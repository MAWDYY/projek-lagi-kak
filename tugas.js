// Simulasi data awal mahasiswa
let dataMahasiswa = [
    { nama: "Maulida", nim: "2411102441018", nilai: 90 },
    { nama: "Indah", nim: "2411102441020", nilai: 85 },
    { nama: "Pertiwi", nim: "2411102441030", nilai: 78 },
];

// Fungsi untuk menampilkan data ke console
function tampilkanData() {
    console.clear();
    console.log("=== DATA MAHASISWA ===");
    dataMahasiswa.forEach((mhs, i) => {
        console.log(`${i + 1}. Nama: ${mhs.nama}, NIM: ${mhs.nim}, Nilai: ${mhs.nilai}`);
    });

    // Hitung rata-rata nilai
    const total = dataMahasiswa.reduce((acc, mhs) => acc + mhs.nilai, 0);
    const rataRata = total / dataMahasiswa.length;
    console.log(`Rata-rata Nilai: ${rataRata.toFixed(2)}`);

    // Logika keputusan nilai
    if (rataRata >= 85) {
        console.log("Kategori: Sangat Baik 👍");
    } else if (rataRata >= 70) {
        console.log("Kategori: Baik 🙂");
    } else {
        console.log("Kategori: Perlu Perbaikan 😅");
    }
}

// Fungsi untuk menambah data baru
function tambahData() {
    const nama = prompt("Masukkan nama mahasiswa:");
    const nim = prompt("Masukkan NIM:");
    const nilai = parseFloat(prompt("Masukkan nilai:"));

    if (nama && nim && !isNaN(nilai)) {
        dataMahasiswa.push({ nama, nim, nilai });
        console.log(`Data baru ditambahkan: ${nama} (${nim}) dengan nilai ${nilai}`);
    } else {
        console.log("Input tidak valid!");
    }
}

// Hubungkan tombol HTML dengan fungsi JS
document.getElementById("tampilkanData").addEventListener("click", tampilkanData);
document.getElementById("tambahData").addEventListener("click", tambahData);