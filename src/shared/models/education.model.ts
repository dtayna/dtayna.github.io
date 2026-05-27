export interface Education {
    title: string;
    institution: string;
    progress: number;
    startYear?: number;
    endYear?: number | 'Present';
  }