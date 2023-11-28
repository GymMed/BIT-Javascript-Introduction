let myName = "Name";
let mySurname = "Surname";
let myBirthday = new Date("1950-02-08");
let myDate = new Date("2000-11-28");

let myNameDom = document.querySelector("#myName");
let mySurnameDom = document.querySelector("#mySurname");
let myBirthdayDom = document.querySelector("#myBirthday");
let myDateDom = document.querySelector("#myDate");
let myBtn = document.querySelector("#second-task-btn");
let myResult = document.querySelector("#second-task-result");

myNameDom.value = myName;
mySurnameDom.value = mySurname;
myBirthdayDom.value = myBirthday.toISOString().split("T")[0];
myDateDom.value = myDate.toISOString().split("T")[0];

myBtn.addEventListener("click", function () {
    let passedBirthday = new Date(myBirthdayDom.value);
    let passedDate = new Date(myDateDom.value);

    let dateDiffrence = getYearDifferenceWithMonthsAndDays(
        passedBirthday,
        passedDate
    );
    let nameText = `Aš esu ${myNameDom.value} ${mySurnameDom.value}. Man yra ${dateDiffrence} metai(ų)`;

    console.log(nameText);
    myResult.textContent = nameText;
    myResult.classList.remove("d-none");
});

function getYearDifferenceWithMonthsAndDays(date1, date2) {
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth();
    const day1 = date1.getDate();

    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();
    const day2 = date2.getDate();

    let yearDifference = year2 - year1;

    // Adjust the difference based on the month and day
    if (month2 < month1 || (month2 === month1 && day2 < day1)) {
        yearDifference--;
    }

    return yearDifference;
}
