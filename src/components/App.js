import useInterval from "@use-it/interval";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Jumbotron,
  ProgressBar,
} from "react-bootstrap";
import { loadConfig, saveConfig } from "../common/config";
import { speakCommand } from "../common/speech";
import { toSeconds } from "../common/util";
import { useVoices } from "../hooks/useVoices";
import { AthletesSettings } from "./AthletesSettings";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { VoiceSettings } from "./VoiceSettings";

const initialConfig = loadConfig();

export default function App() {
  const [state, setState] = useState("stopped");

  const [startDelay, setStartDelay] = useState(initialConfig.startDelay);
  const [speechEnabled, setSpeechEnabled] = useState(
    initialConfig.speechEnabled
  );
  const [athletes, setAthletes] = useState(initialConfig.athletes);

  const getAthleteName = (athleteIndex) => {
    if (athleteIndex === undefined) {
      return "";
    }

    return athletes[athleteIndex].text || `Athlete ${athleteIndex + 1}`;
  };

  const voices = useVoices();
  const [voiceURI, setVoiceURI] = useState(initialConfig.voice);
  const voice = voices.find((v) => v.voiceURI === voiceURI);

  const [timeUntilNextChange, setTimeUntilNextChange] = useState(0);
  const [currentAthlete, setCurrentAthlete] = useState(undefined);

  useEffect(() => {
    saveConfig({ athletes, startDelay, speechEnabled, voice: voiceURI });
  }, [athletes, startDelay, speechEnabled, voiceURI]);

  const nextAthlete = useMemo(() => {
    const athletesWithIndex = athletes.map((a, ai) => ({ ...a, index: ai }));

    if (currentAthlete === undefined) {
      return athletesWithIndex.find((a) => a.enabled).index;
    }

    return [
      ...athletesWithIndex.slice(currentAthlete + 1),
      ...athletesWithIndex,
    ].filter((a) => a.enabled)[0].index;
  }, [currentAthlete, athletes]);

  const startTimeRef = useRef();
  const prevTimeRef = useRef();
  const pauseTimeRef = useRef();

  const speak = (command) => {
    if (!speechEnabled) {
      return;
    }
    speakCommand(command, { nextAthlete: getAthleteName(nextAthlete) }, voice);
  };

  const changeToNextAthlete = () => {
    setCurrentAthlete(nextAthlete);
    setTimeUntilNextChange(athletes[nextAthlete].time);

    const now = Date.now();
    startTimeRef.current = now;
    if (state === "paused") {
      pauseTimeRef.current = now;
    }
  };

  useInterval(() => {
    if (state !== "running") {
      return;
    }

    const changeTime =
      currentAthlete === undefined ? startDelay : athletes[currentAthlete].time;

    const now = Date.now();

    const secondsSinceStart = toSeconds(now - startTimeRef.current);
    const prevSecondsSinceStart = toSeconds(
      prevTimeRef.current - startTimeRef.current
    );

    if (secondsSinceStart !== prevSecondsSinceStart) {
      if (secondsSinceStart >= changeTime) {
        speak(currentAthlete === undefined ? "start" : 0);
        changeToNextAthlete();
      } else {
        speak(changeTime - secondsSinceStart);
        setTimeUntilNextChange(Math.max(changeTime - secondsSinceStart, 0));
      }
    }

    prevTimeRef.current = now;
  }, 500);

  const handleStart = () => {
    const now = Date.now();

    prevTimeRef.current = now;
    startTimeRef.current = now;

    setTimeUntilNextChange(startDelay > 0 ? startDelay : athletes[0].time);
    setCurrentAthlete(startDelay > 0 ? undefined : nextAthlete);

    setState("running");
  };

  const handleStop = () => {
    setState("stopped");
  };

  const handlePause = () => {
    setState("paused");
    pauseTimeRef.current = Date.now();
  };

  const handleResume = () => {
    setState("running");
    startTimeRef.current =
      Date.now() - (pauseTimeRef.current - startTimeRef.current);
  };

  return (
    <>
      <Header />

      <Container>
        <Jumbotron className="mb-2">
          {state !== "stopped" ? (
            <>
              <h1 className="text-center display-2">
                {currentAthlete === undefined
                  ? "Wait"
                  : getAthleteName(currentAthlete)}
              </h1>

              <h2 className="text-center display-5">
                🔜 {getAthleteName(nextAthlete)}
              </h2>

              <h3 className="text-center display-6">
                ⏱️ {timeUntilNextChange}s
              </h3>
              <ProgressBar
                style={{ transform: "scaleX(-1)", background: "white" }}
                now={timeUntilNextChange}
                max={
                  currentAthlete === undefined
                    ? startDelay
                    : athletes[currentAthlete].time
                }
              />

              <div className="mt-4 text-center">
                {state !== "stopped" ? (
                  <>
                    <Button
                      variant="danger"
                      className="mr-1"
                      onClick={handleStop}
                    >
                      Stop
                    </Button>
                    {state === "paused" ? (
                      <Button
                        variant="info"
                        className="mr-1"
                        onClick={handleResume}
                      >
                        Resume
                      </Button>
                    ) : (
                      <Button
                        variant="info"
                        className="mr-1"
                        onClick={handlePause}
                      >
                        Pause
                      </Button>
                    )}

                    <Button variant="warning" onClick={changeToNextAthlete}>
                      Skip
                    </Button>
                  </>
                ) : (
                  <Button variant="primary" onClick={handleStart} size="lg">
                    Start
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <Button variant="primary" onClick={handleStart} size="lg">
                Start
              </Button>
            </div>
          )}
        </Jumbotron>

        <Card className="mb-2">
          <Card.Body>
            <AthletesSettings athletes={athletes} onChange={setAthletes} />

            <h3>Settings</h3>
            <Form.Group controlId="startDelay">
              <Form.Label>Start Delay (in seconds)</Form.Label>
              <Form.Control
                type="number"
                value={startDelay}
                onChange={(e) => setStartDelay(+e.target.value)}
                min={0}
              />
            </Form.Group>

            <Form.Group controlId="speechEnabled">
              <Form.Check
                type="checkbox"
                label="Voice Output"
                checked={speechEnabled}
                onChange={(e) => setSpeechEnabled(e.target.checked)}
              />
              <Form.Text>Voice Output is not supported on iOS</Form.Text>
            </Form.Group>
            <VoiceSettings
              voices={voices}
              voice={voice}
              onChange={(v) => setVoiceURI(v?.voiceURI)}
            />
          </Card.Body>
        </Card>

        <Footer />
      </Container>
    </>
  );
}
