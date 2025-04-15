function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(function(bar) {
        var percentage = bar.getAttribute("data-percentage");
        bar.style.width = percentage;
    });
});

// function openModal() {
//     document.getElementById("modal").style.display = "block";
// }

// function closeModal() {
//     document.getElementById("modal").style.display = "none";
// }

window.onclick = function(event) {
    if (event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
}

