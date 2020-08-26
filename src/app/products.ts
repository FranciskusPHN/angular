// export class Products{
//     Id: number;
//     Code: string;
//     Name: string;
//     Unit: string;
//     Price: number;
//     Tags: string;
// }
export class Products {
    constructor(
        public field: any,
        public header: any
    ) { }
}
export const products: Products[] = [

    { field: 'Code', header: 'Kode Barang' },
    { field: 'Name', header: 'Nama Barang' },
    { field: 'UOM.Unit', header: 'Satuan Default' },
    { field: 'Currency.Code', header: 'Mata Uang' },
    { field: 'Price', header: 'Harga Barang' },
    { field: 'Tags', header: 'Tags' },
    { field: '', header: 'Action' },
];