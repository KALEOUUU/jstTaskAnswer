class Lingkaran {
    constructor(jari_jari) {
        this.jari_jari = jari_jari;
    }

    luas() {
        return Math.PI * this.jari_jari ** 2;
    }

    keliling() {
        return 2 * Math.PI * this.jari_jari;
    }
}

class Tabung extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return this.luas() * this.tinggi;
    }

    luasPermukaan() {
        return 2 * this.luas() + this.keliling() * this.tinggi;
    }

    luasSelimut() {
        return this.keliling() * this.tinggi;
    }
}

class Kerucut extends Lingkaran {
    constructor(jari_jari, tinggi) {
        super(jari_jari);
        this.tinggi = tinggi;
    }

    volume() {
        return (1/3) * this.luas() * this.tinggi;
    }

    luasPermukaan() {
        const s = Math.sqrt(this.jari_jari ** 2 + this.tinggi ** 2); // garis pelukis
        return this.luas() + Math.PI * this.jari_jari * s;
    }

    luasSelimut() {
        const s = Math.sqrt(this.jari_jari ** 2 + this.tinggi ** 2); // garis pelukis
        return Math.PI * this.jari_jari * s;
    }
}

class Bola extends Lingkaran {
    volume() {
        return (4/3) * Math.PI * this.jari_jari ** 3;
    }

    luasPermukaan() {
        return 4 * this.luas();
    }
}


// Bola
const bola = new Bola(30 / 2); // jari-jari = 30 cm / 2
console.log("Bola:");
console.log(`Volume: ${bola.volume().toFixed(2)} cm³`);
console.log(`Luas Permukaan: ${bola.luasPermukaan().toFixed(2)} cm²`);
console.log("---------------------------------------------------------")

// Kerucut
const kerucut = new Kerucut(20 / 2, 40); // jari-jari = 20 cm / 2, tinggi = 40 cm
console.log("Kerucut:");
console.log(`Volume: ${kerucut.volume().toFixed(2)} cm³`);
console.log(`Luas Permukaan: ${kerucut.luasPermukaan().toFixed(2)} cm²`);
console.log(`Luas Selimut: ${kerucut.luasSelimut().toFixed(2)} cm²`);
console.log("---------------------------------------------------------")

// Tabung
const tabung = new Tabung(15 / 2, 50); // jari-jari = 15 cm / 2, tinggi = 50 cm
console.log("Tabung:");
console.log(`Volume: ${tabung.volume().toFixed(2)} cm³`);
console.log(`Luas Permukaan: ${tabung.luasPermukaan().toFixed(2)} cm²`);
console.log(`Luas Selimut: ${tabung.luasSelimut().toFixed(2)} cm²`);
console.log("---------------------------------------------------------")
