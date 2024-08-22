document.getElementById('submit-btn').addEventListener('click', function() {
    const answer = document.getElementById('answer').value;
    const popup = document.getElementById('popup');
    const message = document.getElementById('popup-message');

    if (answer.trim().toLowerCase() === "loong") {  // Jawaban yang benar adalah "loong"
        message.innerHTML = 'Benar! <br> <a href="https://www.example.com" target="_blank" class="btn btn-success mt-3">Lihat Selengkapnya</a>';
        message.style.color = "green";
    } else {
        message.textContent = "Salah, coba lagi!";
        message.style.color = "red";
    }

    popup.style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
