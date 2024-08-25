// Pilih semua tombol
const buttons = document.querySelectorAll('.btn1, .btn2');
const buttons2 = document.querySelectorAll('.btn3, .btn4');
const h2 = document.querySelector('h2');
const h1 = document.querySelector('h1');


// Fungsi untuk menghasilkan warna acak
const generateRandomColor = () => {
    const r  = Math.floor(Math.random() * 255);
    const g  = Math.floor(Math.random() * 250);
    const b  = Math.floor(Math.random() * 250);

    return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColor2 = () => {
    const r  = Math.floor(Math.random() * 250);
    const g  = Math.floor(Math.random() * 250);
    const b  = Math.floor(Math.random() * 250);

    return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColor3 = () => {
    const r  = Math.floor(Math.random() * 250);
    const g  = Math.floor(Math.random() * 250);
    const b  = Math.floor(Math.random() * 250);

    return `rgb(${r}, ${g}, ${b})`;
}

// Mengubah warna latar belakang tombol secara berkala
setInterval(() => {
    const newColor = generateRandomColor();
    const newColor2 = generateRandomColor2();
    const newColor3 = generateRandomColor3();
    buttons.forEach(button => {
        button.style.backgroundColor = newColor; // Mengubah warna latar belakang tombol
    });
    buttons2.forEach(button => {
        button.style.backgroundColor = newColor2; // Mengubah warna latar belakang tombol
    });
        h1.style.color = newColor3; // mengubah warna latar belakang h1
    console.log(newColor);
    console.log(newColor2);
    console.log(newColor3);
}, 1000); // Mengubah warna setiap detik (1000 milidetik)

// Mengubah warna latar belakang dan teks secara berkala
setInterval(() => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    h2.innerText = newColor;
    console.log(newColor);
}, 1000); // Mengubah warna setiap 2 detik (2000 milidetik)