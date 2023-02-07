export class Enterprise {

    id:number;
    status:boolean;
    address:string;
    name:string;
    phone:string;

}

export interface EnterpriseDTO {
    id: number;
    name: string;
}