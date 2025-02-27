export type LocalizedString = {
  es: string;
  en: string;
};

export type LocalizedStringArray = {
  es: string[];
  en: string[];
};

export type TextSection = {
  type: "text";
  title: LocalizedString;
  code?: string;
  content: LocalizedString;
};

export type ListSection = {
  type: "list";
  title: LocalizedString;
  content: LocalizedStringArray;
};

export type CodeSection = {
  type: "code";
  title: LocalizedString;
  content: string; // El código suele ser universal y no requiere localización
  };

export type TableSection = {
    type: "table";
    title: LocalizedString;
    headers: LocalizedStringArray;
    rows: { es: string[]; en: string[] }[];
  };

export type ExampleSection = {
    type: "example";
    title: LocalizedString;
    caseTitle: LocalizedString;
    caseDescription: LocalizedString;
    code: string;
    conclusion: LocalizedString;
  };

export type ConceptSection =
  | TextSection
  | ListSection
  | CodeSection
  | TableSection
  | ExampleSection;

export type Concept = {
    title: LocalizedString;
    slug: string;
    description: LocalizedString;
    code?: string;
    conclusion?: LocalizedString | LocalizedStringArray;
    sections?: ConceptSection[];
  
};
