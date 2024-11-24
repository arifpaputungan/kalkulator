// Fungsi untuk menambahkan angka atau operator ke layar kalkulator
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Fungsi untuk membersihkan layar kalkulator
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fungsi untuk menghitung hasil dari operasi yang ada
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluasi ekspresi matematika yang ada di layar
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
