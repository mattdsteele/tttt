import { faPlus, faSkullCrossbones, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Col, Form, InputGroup, Row, ToggleButton } from "react-bootstrap";
import { DEFAULT_ATHLETE_NAMES, DEFAULT_TIME_PER_ATHLETE } from "../common/constants";
import { Athlete, State } from "../types";
import { TeamList } from "./TeamList";

interface Props {
    athletes: Athlete[];
    onChange: (athletes: Athlete[]) => void;
    state: State;
}

const firstName = ( fullName: string ) => fullName.split(' ')[0];
export function AthletesSettings({ athletes, onChange, state }: Props) {
    const getBackgroundColor = (athleteIndex: number) => {
        if (state === "stopped") {
            return "#fff";
        }

        if (!athletes[athleteIndex].enabled) {
            return "#6c757d80";
        }

        return "#fff";
    };

    return (
        <>
            <h2 className="mb-3">Athletes</h2>

            {athletes.map((athlete, athleteIndex) => (
                <Form.Group key={athleteIndex} as={Row} controlId={`athlete-${athleteIndex}`}>
                    <Col sm={12}>
                        <InputGroup>
                            <Form.Control
                                style={{ background: getBackgroundColor(athleteIndex) }}
                                type="text"
                                placeholder="Name"
                                value={athlete.text}
                                onChange={(e) =>
                                    onChange(
                                        athletes.map((a, ai) => (ai === athleteIndex ? { ...a, text: e.target.value } : a))
                                    )
                                }
                            />
                            <Form.Control
                                style={{ background: getBackgroundColor(athleteIndex) }}
                                type="number"
                                placeholder="Time (in seconds)"
                                min={5}
                                step={5}
                                value={athlete.time}
                                onChange={(e) =>
                                    onChange(
                                        athletes.map((a, ai) => (ai === athleteIndex ? { ...a, time: +e.target.value } : a))
                                    )
                                }
                            />
                            {state !== "stopped" && (
                                <ButtonGroup toggle as={InputGroup.Append}>
                                    <ToggleButton
                                        variant="outline-secondary"
                                        type="checkbox"
                                        name={`athlete-${athleteIndex}-enabled`}
                                        checked={!athlete.enabled}
                                        disabled={athlete.enabled && athletes.filter((a) => a.enabled).length === 1}
                                        value={athlete.text}
                                        onChange={(e) =>
                                            onChange(
                                                athletes.map((a, ai) =>
                                                    ai === athleteIndex ? { ...a, enabled: !e.target.checked } : a
                                                )
                                            )
                                        }
                                    >
                                        <FontAwesomeIcon icon={faSkullCrossbones} />
                                    </ToggleButton>
                                </ButtonGroup>
                            )}
                            {state === "stopped" && (
                                <InputGroup.Append>
                                    <Button
                                        variant="danger"
                                        disabled={athletes.length === 1}
                                        onClick={() => onChange(athletes.filter((_, ai) => ai !== athleteIndex))}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </InputGroup.Append>
                            )}
                        </InputGroup>
                    </Col>
                </Form.Group>
            ))}

            {state === "stopped" && (
                <>
                    <Button
                        variant="light"
                        block
                        onClick={() => {
                            onChange([
                                ...athletes,
                                {
                                    text: DEFAULT_ATHLETE_NAMES[athletes.length] ?? "",
                                    time: DEFAULT_TIME_PER_ATHLETE,
                                    enabled: true,
                                },
                            ]);
                        }}
                    >
                        <FontAwesomeIcon icon={faPlus} /> Add athlete
                    </Button>
                    <p>Or click to add:</p>
                    <TeamList handleClick={team => {
                        onChange([...athletes, {text: firstName(team.name), time: DEFAULT_TIME_PER_ATHLETE, enabled: true}])
                    }} />
                </>
            )}
        </>
    );
}
