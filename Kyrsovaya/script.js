// JavaScript код для открытия и закрытия модального окна
function openModal() {
    document.getElementById('myModal').style.display = "block";
    setTimeout(function() {
        document.getElementById('myModal').classList.add('visible'); // Добавляем класс visible для анимации
    }, 100); // Ждем некоторое время перед добавлением класса для анимации
}

function closeModal() {
    document.getElementById('myModal').classList.remove('visible'); // Удаляем класс visible для анимации
    setTimeout(function() {
        document.getElementById('myModal').style.display = "none";
    }, 300); // Ждем завершения анимации перед скрытием модального окна
}

