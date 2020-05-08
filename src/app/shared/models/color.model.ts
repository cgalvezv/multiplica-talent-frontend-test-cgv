export interface ResponseColorData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Color[];
}

export interface Color {
    id: number;
    color: string;
    name: string;
    pantone_value: string;
    year: number;
}