function hitungHargaTanah(panjang, lebar, hargaPerMeter) {
    return panjang * lebar * hargaPerMeter;
}

function hitungPPN(totalHarga, persentasePPN) {
    return totalHarga * (persentasePPN / 100);
}

function hitungTotalPembayaran(panjang, lebar, hargaPerMeter, persentasePPN) {
    const totalHargaTanah = hitungHargaTanah(panjang, lebar, hargaPerMeter);
    const ppn = hitungPPN(totalHargaTanah, persentasePPN);
    return totalHargaTanah + ppn;
}

const panjangTanah = 20.5; 
const lebarTanah = 30; // meter
const hargaPerMeter = 1500000; // Rupiah
const persentasePPN = 15; // Persentase

const totalPembayaran = hitungTotalPembayaran(panjangTanah, lebarTanah, hargaPerMeter, persentasePPN);
console.log('Total pembayaran yang harus dibayarkan oleh Pak Arman adalah Rp ' + totalPembayaran.toLocaleString('id-ID'));
