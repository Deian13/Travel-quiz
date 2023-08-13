document.addEventListener("DOMContentLoaded", function () {
    const floatingWindows = document.querySelectorAll('.floating-window');
    const nextBtns = document.querySelectorAll('#nextBtn');
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("resultText");
    let currentWindowIndex = 0;

    function showWindow(index) {
        floatingWindows[index].style.display = "block";
    }

    function hideWindow(index) {
        floatingWindows[index].style.display = "none";
    }

    function showNextWindow() {
        hideWindow(currentWindowIndex);
        currentWindowIndex++;

        if (currentWindowIndex < floatingWindows.length) {
            showWindow(currentWindowIndex);
        } else {
            showResult();
        }
    }

    function showResult() {
        let selectedOptions = document.querySelectorAll('input[type="radio"]:checked');
        let result = "Unknown";

        if (selectedOptions.length === floatingWindows.length) {
            result = determineResult(selectedOptions);
        }

        resultText.textContent = result;
        resultDiv.classList.remove("hidden");
    }

    function determineResult(selectedOptions) {
        let answers = Array.from(selectedOptions).map(option => option.value);

        if (answers.includes("warm") && answers.includes("beach") && answers.includes("local")) {
            return "Croatia";
        } else if (answers.includes("cold") && answers.includes("adventure") && answers.includes("international")) {
            return "Himalaya";
        } else {
            return "Ibiza";
        }
    }

    showWindow(currentWindowIndex);

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", showNextWindow);
    });
});