// Menampilkan pesan ke console
console.log("File JavaScript berhasil terhubung!");

// Mengubah teks pada elemen HTML
document.getElementById("pesan").textContent = "Halo dari JavaScript!";

// Deklarasi variabel
const nama = "Maulida";
let umur = 21;
let aktif = true;

// Menampilkan tipe data di console
console.log("Nama:", nama, "| Tipe:", typeof nama);
console.log("Umur:", umur, "| Tipe:", typeof umur);
console.log("Status Aktif:", aktif, "| Tipe:", typeof aktif);

let nilai = 85;
let hasil;

if (nilai >= 90) {
    hasil = "A";
} else if (nilai >= 75) {
    hasil = "B";
} else if (nilai >= 60) {
    hasil = "C";
} else {
    hasil = "D";
}

document.getElementById("hasil").textContent = `Nilai Anda: ${hasil}`;
console.log(`Nilai numerik: ${nilai}, Huruf: ${hasil}`);