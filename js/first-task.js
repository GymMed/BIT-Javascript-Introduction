let actorName = "John";
let actorSurname = "Cenaa";

let actorNameInput = document.querySelector("#name");
let actorSurnameInput = document.querySelector("#surname");
let actorSubmit = document.querySelector("#first-task-btn");
let actorResult = document.querySelector("#name-result");

actorNameInput.value = actorName;
actorSurnameInput.value = actorSurname;

actorSubmit.addEventListener("click", function () {
    let longerResult = "";

    if (actorNameInput.value.length > actorSurnameInput.value.length) {
        longerResult = "Actor name is longer: " + actorNameInput.value;
    } else {
        longerResult = "Actor surname is longer: " + actorSurnameInput.value;
    }
    console.log(longerResult);
    actorResult.textContent = longerResult;

    actorResult.classList.remove("d-none");
});
