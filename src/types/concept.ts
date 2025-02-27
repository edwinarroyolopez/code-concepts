export type TextSection = {
  type: "text";
  title: string;
  code?: string;
  content: string;
};

export type ListSection = {
  type: "list";
  title: string;
  content: string[];
};

export type CodeSection = {
  type: "code";
  title: string;
  content: string;
};

export type TableSection = {
  type: "table"; 
  title: string; 
  headers: string[]; 
  rows: string[][]
}

export type ExampleSection = {
  type: "example";
  title: string;
  caseTitle: string;
  caseDescription: string;
  code: string;
  conclusion: string;
};

export type ConceptSection =
  | TextSection
  | ListSection
  | CodeSection
  | TableSection
  | ExampleSection;

export type Concept = {
  title: string;
  slug: string;
  description: string;
  code?: string;
  conclusion?: string | string[];
  sections?: ConceptSection[];
};
