export interface Animal {
  name: string;
  Scientific: string;
  year: number;
  group: number;
  status: string;
  birthdate: string;
  birthPlace: string;
  gender: string;
  almaMater: string;
  undergraduateMajor: string;
  graduateMajor: string;
  militaryRank: string;
  militaryBranch: string;
  spaceFlights: number;
  spaceFlightHours: number;
  spaceWalks: number;
  spaceWalkHours: number;
  missions: string;
  deathDate: string;
  deathMission: string;
  photo: string;
  ScientificName: string;
  ConservationStatus: string;
  Range: string;
}

export interface Filter {
  category: string;
  displayName: string;
  options: Option[];
}

export type FilterState = Record<string, Option>;

export type Option = string | number;
