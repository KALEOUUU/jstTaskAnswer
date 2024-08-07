let barang = [
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "Minyak goreng", harga: 9000, jumlah: 10}
];

function hitungTotalBelanja(barang) {
    return barang.reduce((total, item) => total + item.harga * item.jumlah, 0);
}
const totalBelanja = hitungTotalBelanja(barang);


console.log(`Total belanja yang harus dibayarkan oleh Bu Astuti adalah Rp ${totalBelanja.toLocaleString('id-ID')}`);

