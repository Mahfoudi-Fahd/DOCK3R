import { Time } from "@angular/common";

export interface Competition {
    id?: string;
    competitionName?: string;
    competitionCode?: string;
    date?: Date; 
    startTime?: Date;
    endTime?: Date;
    numberOfParticipants?: number;
    location?: string;
    amount?: number;
}

export class CCompetition implements Competition {
    id?: string ;
    competitionName?: string;
    competitionCode?: string;
    date?: Date; 
    startTime?: Date;
    endTime?: Date;
    numberOfParticipants?: number;
    location?: string;
    amount?: number;
}