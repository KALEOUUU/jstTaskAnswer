const sukuPertama = 4
const rasio = 3
const jumlahSuku = 10

function hitungJumlahDeretGeometri(sukuPertama, rasio, jumlahSuku) {
    let total = 0;
    let sukuSaatIni = sukuPertama;

    for (let i = 0; i < jumlahSuku; i++) {
        total += sukuSaatIni;
        sukuSaatIni *= rasio; 
    }

    return total;
}

const totalJumlah = hitungJumlahDeretGeometri(sukuPertama, rasio, jumlahSuku);

console.log(`Jumlah 10 suku pertama dari deret geometri tersebut adalah ${totalJumlah}`);