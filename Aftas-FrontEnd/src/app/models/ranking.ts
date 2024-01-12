export interface Ranking {
    memberNumber?:     string; 
    competitionCode?: string ;
 }
export class CRanking implements Ranking {
   constructor(
    public memberNumber?:     string,
    public competitionCode?: string,
   ) { }
   
 }

