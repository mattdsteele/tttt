export interface Athlete {
    text: string;
    time: number;
    enabled: boolean;
}

export type State = "stopped" | "running" | "paused";

export interface Round {
    timePassed: number;
    totalTime: number;
    currentAthlete: number | undefined; // undefined = startDelay
}

export interface TeamMember {
  div: number;
  divw: number;
  flag: string;
  r: string;
  ftp: (number | string)[];
  name: string;
  aid: string;
  age: string;
  zada: number;
  w: (number | string)[];
  rank: string;
  skill: number;
  distance: number;
  climbed: number;
  energy: number;
  time: number;
  skill_race: number;
  skill_seg: number;
  skill_power: number;
  zwid: number;
  status: string;
  reg: number;
  email: string;
  h_1200_watts?: string;
  h_1200_wkg?: string;
  h_15_watts?: string;
  h_15_wkg?: string;
}