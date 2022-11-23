export interface QrResponse {
    code: string;
    name: string;
}

export interface ResponseHolidays {
    status: string;
    totalResults: number;
    holidays: Holiday[];
}

export interface Holiday {
    name: string;
    date: string;
    observed: string;
    public: boolean;
    country: string;
    uuid: string;
    weekday: Weekday;
}

export interface Weekday {
    date: Observed;
    observed: Observed;
}

export interface Observed {
    name: string;
    numeric: number;
}
