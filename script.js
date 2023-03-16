//NO 1
function cetakFunction(){
    return `nama saya ` + a

console.log(cetakFunction("rangga"));
}
//no 2
let angka1 = 20;
let angka2 = 7;

function myFunction(a,b){
    return a + b;
}
let output  = myFunction(angka1,angka2)
console.log(myFunction)

//NO 3
function Hello(){
    return "HELLO"
}
console.log


//NO 4
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia",
}
console.log(obj.bahasa);

//NO 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku",1992]
let objectDaftarPeserta ={
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahun : arrayDaftarPeserta[3],
}
console.log(objectDaftarPeserta);

//NO 6
let buah = [{
    nama : 'nanas',
    warna : 'kuning',
    adaBijinya : 'ada',
    harga : 9000,
},
{
    nama : 'jeruk',
    warna : 'oranye',
    adaBijinya : 'ada',
    harga : 8000,
},
{
    nama : 'semangka',
    warna : 'hijau',
    adaBijinya : 'ada',
    harga : 7000,
},
{
    nama : 'pisang',
    warna : 'kuning',
    adaBijinya : 'tidak',
    harga : 3000,
}
]
let berBiji = buah.filter((buah) => buah.adaBijinya === 'ada');

console.log('berbiji');