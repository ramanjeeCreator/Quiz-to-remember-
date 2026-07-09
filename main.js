
function openSelection() {

    document.getElementById("homeScreen")
        .classList.add("hidden");

    document.getElementById("selectScreen")
        .classList.remove("hidden");

}

function goHome() {

    document.getElementById("selectScreen")
        .classList.add("hidden");

    document.getElementById("homeScreen")
        .classList.remove("hidden");

}

function chooseTest(type) {

    localStorage.setItem("selectedTest", type);

    document
        .getElementById("selectScreen")
        .classList.add("hidden");

    document
        .getElementById("questionScreen")
        .classList.remove("hidden");

    startTimer();

}
