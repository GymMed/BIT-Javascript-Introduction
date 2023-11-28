const MONTHS_ENUM = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
};

const lithuanian_months = [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Gegužė",
    "Birželis",
    "Liepa",
    "Rugpjūtis",
    "Rugsėjis",
    "Spalis",
    "Lapkritis",
    "Gruodis",
];

let fifthDateDom = document.querySelector("#fifthDate");
let fifthBtn = document.querySelector("#fifth-task-btn");
let fifthResult = document.querySelector("#fifth-task-result");

fifthDateDom.value = new Date().toISOString().split("T")[0];

fifthBtn.addEventListener("click", function () {
    let dateString = fifthDateDom.value;
    let date = new Date(dateString);

    if (date === null || date === undefined) return;

    console.log(date);
    let month = lithuanian_months[date.getMonth()];

    console.log(month);
    fifthResult.textContent = month;
    fifthResult.classList.remove("d-none");
});
