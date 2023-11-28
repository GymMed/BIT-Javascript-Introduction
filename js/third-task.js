let initialName = "User name";
let initialSurname = "User surname";

let initialNameDom = document.querySelector("#initialName");
let initialSurnameDom = document.querySelector("#initialSurname");
let initialBtn = document.querySelector("#third-task-btn");
let initialResult = document.querySelector("#third-task-result");

initialNameDom.value = initialName;
initialSurnameDom.value = initialSurname;

initialBtn.addEventListener("click", function () {
    initialName = initialNameDom.value;
    initialSurname = initialSurnameDom.value;

    if (
        initialName === null ||
        initialName === undefined ||
        initialName.length < 1 ||
        initialSurname === null ||
        initialSurname === undefined ||
        initialSurname.length < 1
    )
        return;

    let inicialai = (initialName[0] + initialSurname[0]).toUpperCase();

    console.log(inicialai);
    initialResult.textContent = inicialai;
    initialResult.classList.remove("d-none");
});
