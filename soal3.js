const beratBadan = 90
const tinggiBadan = 1.7

const bmi = beratBadan / (tinggiBadan ** 2)

let statusKondisi;

if (bmi < 18.5) {
    statusKondisi = "Kekurangan berat badan"
} else if (bmi >= 18.5 && bmi <= 24.9) {
    statusKondisi = "Normal (ideal)"
} else if (bmi >= 25 && bmi <= 29.9) {
    statusKondisi = "Kelebihan berat badan"
} else {
    statusKondisi = "Kegemukan (Obesitas)"
}


console.log(`BMI Rhodey adalah ${bmi.toFixed(1)} dan status kondisi tubuhnya adalah ${statusKondisi}.`);

// bmi.toFixed(1) untuk membulatkan bilangan