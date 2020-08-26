// export class Budgets{

//     _id: number;
//     code: string;
//     name: string;
// }
export class Budgets {
    constructor(
        public field: any,
        public header: any
    ) { }
}
export const budgets: Budgets[] = [
    
    { field: 'code', header: 'Kode' },
    { field: 'name', header: 'Nama' },
    { field: '', header: 'Action' },
];