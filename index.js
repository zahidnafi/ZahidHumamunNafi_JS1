// Contoh 1: if, else, dan nested if
let nilai = 85;

if (nilai >= 90) {
    console.log("Nilai Anda A");
} else if (nilai >= 80) {
    console.log("Nilai Anda B");
} else if (nilai >= 70) {
    console.log("Nilai Anda C");
} else {
    console.log("Nilai Anda D");
}

// Contoh 2: switch case
let hari = "Senin";
let aktivitas;

switch (hari) {
    case "Senin":
        aktivitas = "Meeting tim kerja";
        break;
    case "Selasa":
    case "Rabu":
        aktivitas = "Pekerjaan rutin";
        break;
    case "Kamis":
        aktivitas = "Pelatihan";
        break;
    case "Jumat":
        aktivitas = "Presentasi";
        break;
    default:
        aktivitas = "Weekend, istirahat!";
}
console.log(`Hari ini: ${hari}, aktivitas: ${aktivitas}`);

// Contoh 3: for statement
for (let i = 1; i <= 5; i++) {
    console.log(`Iterasi ke-${i}`);
}

// Contoh 4: while
let counter = 1;
while (counter <= 5) {
    console.log(`Iterasi ke-${counter}`);
    counter++;
}

// Contoh 5: do while
counter = 1;
do {
    console.log(`Iterasi ke-${counter}`);
    counter++;
} while (counter <= 5);

// Contoh 6: function
function tambahkan(a, b) {
    return a + b;
}

let hasil = tambahkan(5, 3);
console.log(`Hasil penambahan: ${hasil}`);
