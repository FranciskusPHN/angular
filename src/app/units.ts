// export class Units{

//     Id: number;
//     Code: string;
//     Name: string;
//     DivisionCode: string;
//     DivisionName: string;
//     DivisionDescription: string;
//     DivisionId: number;
// }
export class Units {
    constructor(
        public field: any,
        public header: any
    ) { }
}
export const units: Units[] = [
    
    { field: 'Code', header: 'Kode' },
    { field: 'Division.Name', header: 'Nama Divisi' },
    { field: 'Name', header: 'Nama Unit' },
    { field: '', header: 'Action' },
];