//Создадим объект Map для хранения сессии
let session = new Map();

function handleSession() {
    //Сохраним userAgent
    session.set("userAgent", window.navigator.userAgent)

    session.set("startDate", new Date().toLocaleString())
}

function checkAge() {
    //Запросим возраст пользователя и сохраним в переменную
    session.set("age", prompt("Пожалуйста, введите Ваш возраст"));

    if (session.get("age") >= 18) {
        //Те, кто старше 18, увидят приветствие и будут направлены на сайт
        alert("Приветствуем на LifiSpot " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        //Выполним проверку. Если введенное число < 18, лиюо если введено не число - 
        //пользователь будет перенаправлен
        alert("Наши трансляции не предназначены для лиц младше 18 лет. Вы будете перенаправлены")
        window.location.href = "http://google.com";
    }
}

let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}


function filterContent() {

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

