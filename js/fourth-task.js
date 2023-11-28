let fourthName = "Actor name";
let fourthSurname = "Actor surname";

let fourthNameDom = document.querySelector("#fourthName");
let fourthSurnameDom = document.querySelector("#fourthSurname");
let fourthBtn = document.querySelector("#fourth-task-btn");
let fourthResult = document.querySelector("#fourth-task-result");

fourthNameDom.value = fourthName;
fourthSurnameDom.value = fourthSurname;

fourthBtn.addEventListener("click", function () {
    fourthName = fourthNameDom.value;
    fourthSurname = fourthSurnameDom.value;

    if (
        fourthName === null ||
        fourthName === undefined ||
        fourthName.length < 1 ||
        fourthSurname === null ||
        fourthSurname === undefined ||
        fourthSurname.length < 1
    )
        return;

    let nameLength = fourthName.length;
    let surnameLength = fourthSurname.length;
    let concatedName =
        fourthName.substring(nameLength - 3, nameLength) +
        fourthSurname.substring(surnameLength - 3, surnameLength);

    console.log(concatedName);
    fourthResult.textContent = concatedName;
    fourthResult.classList.remove("d-none");
});
