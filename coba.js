// Coba coba tipe data js

// let nama = "kaale"
// let umur = 16
// let single = true

// console.log("Hi, Saya " + nama + ", umur saya sekarang " + umur + ", Status saya single = " + single)

// const arya_single = true

// console.log("arya single abadi? " + arya_single)

// coba coba objek
let siswa_1 = {
    nama : "Arya",
    umur : 17,
    single : true,
}

// console.log(siswa_1.nama)
siswa_1.nama = "eugene"

console.log(siswa_1.nama)

// array string
let mapel = ["Math", "Code", "Science"]

// array numeric
let kelas = [10, 11, 12]

// array object
let siswa = [

    {
        nama: "kaale", jurusan: "AI Engineering"
    },
    {
        nama: "Berlin", jurusan: "MIPA Murni"
    }
]

console.log(siswa)
console.log(siswa.length, mapel.length, kelas.length)

siswa.push(
    {
        nama: "Rinso", jurusan: "English"
    },
    {
        nama: "bayem", jurusan: "sayuran"
    }
    
)
console.log(siswa)

siswa.splice(2,2)
console.log(siswa)

siswa.map(
    (sis, index) => {
        console.log(sis.jurusan + " " + sis.nama)
    }
)

// let tahun = 2021
// if (tahun % 4 == 0) {
//     console.log("Tahun Kabisat = " + tahun)
// }
// else{
//     console.log("yaaa.. berarti bukan tahun kabisat")
// }

for (let i = 1; i <= 10; i++){
    console.log("Perulangan ke - " + i)
}
// class persegi {
//     constructor(sisi) {
//         this.sisi = sisi
//     }

//     luas = () => {
//         return this.sisi^2
//     }

//     keliling = () => {
//         return 4 * this.sisi
//     }
// }

// let kotak = new persegi(5)
// console.log("Luas: " + kotak.luas())
// console.log("Keliling: " + kotak.keliling())

// class kubus extends persegi {
    
// }

 