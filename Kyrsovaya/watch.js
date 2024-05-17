// Функция для отображения модального окна с видео
function showVideo(videoSrc) {
    var modal = document.getElementById("videoModal");
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videoSrc; // Устанавливаем источник видео
    modal.style.display = "block"; // Показываем модальное окно
}

// Функция для закрытия модального окна
function closeModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "none"; // Скрываем модальное окно
}
function closeVideo() {
    var video = document.getElementById('videoPlayer'); // Получаем элемент видео по его ID
    video.pause(); // Приостанавливаем воспроизведение видео
    var overlay = document.getElementById('videoOverlay'); // Получаем элемент оверлея видео по его ID
    overlay.style.display = 'none'; // Скрываем оверлей
}
