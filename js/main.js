let rating = 0;

const firstQuestion = +prompt("Сколько будет 2 + 2?") === 4 ? rating += 10 : rating;

const secondQuestion = prompt("Солнце встает на востоке?") === "Да" ? rating += 10 : rating;

const thirdQuestion = prompt("Сколько будет 5 / 0?") === ("0" || "На 0 делить нельзя") ? rating += 10 : rating;

const fourthQuestion = prompt("Какого цвета небо?") === ("Голубое" || "Синее") ? rating += 10 : rating;

const fifthQuestion = prompt("Каков правильный ответ на главный вопрос жизни, вселенной и всего такого?") === "42" ? rating += 10 : rating;

alert(`Ваш итоговый рейтинг составил ${rating} баллов`);