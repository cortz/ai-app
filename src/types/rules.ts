export interface Rule {
  id: string;
  name: string;
  description: string;
  content: string;
}

export interface RuleSelection {
  [key: string]: boolean;
}
