export interface Endorsement {
  skill: string;
  user: string;
}

export interface ProcessedSkill {
  skill: string;
  users: string[];
  count: number;
}
