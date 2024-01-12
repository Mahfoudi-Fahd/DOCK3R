
export interface Fish {
        id: string;
        name: string;
}
    
export class CFish implements Fish {
   constructor(
    public id: string,
    public name: string,
   ) { }
   
 }