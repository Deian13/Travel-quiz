document.addEventListener("DOMContentLoaded", function () {
    const floatingWindows = document.querySelectorAll('.floating-window');
    const nextBtns = document.querySelectorAll('#nextBtn');
    const resultDiv = document.getElementById("result");
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
            resultDiv.classList.remove("hidden");
        }
    }

    showWindow(currentWindowIndex);

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", showNextWindow);
    });
});