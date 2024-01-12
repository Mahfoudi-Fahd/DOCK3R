import { Time } from "@angular/common";

export interface Member {
    id?: string;
    firstName?: string;
    lastName?: string;
    accessionDate?: Date;
    nationality?: string;
    identityNumber?: string;
    identityDocumentTypeEnum?: string;

}

export class CMember implements Member {
    id?: string;
    firstName?: string;
    lastName?: string;
    accessionDate?: Date;
    nationality?: string;
    identityNumber?: string;
    identityDocumentTypeEnum?: string;
}