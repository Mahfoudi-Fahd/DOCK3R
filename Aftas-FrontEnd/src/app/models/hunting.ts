
export interface Hunting {    
memberId?: string;
    fishId?: string;
    competitionId?:  string;
    weightOfFish?:   number;
}

export class CHunting implements Hunting {
   constructor(
    public memberId ?: string,
    public fishId?: string,
    public competitionId?:  string,
    public weightOfFish?:   number,
   ) { }
   
 }