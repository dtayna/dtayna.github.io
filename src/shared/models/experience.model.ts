export interface Experience {
    title: string;
    description?: string;
    company: string;
    companyIcon: string;
    startYear: number;
    endYear?: number | 'Present';

}