document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector("#content");
    const toggleBtn = document.getElementById("sidebarToggle");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("hidden");
        content.classList.toggle("expanded");
    });

    // Chart.js - Pie Chart (Sales Distribution)
    new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["Electronics", "Fashion", "Home", "Books"],
            datasets: [{
                data: [300, 150, 100, 80],
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"]
            }]
        }
    });

    // Chart.js - Line Chart (Monthly Revenue)
    new Chart(document.getElementById("lineChart"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Revenue ($)",
                data: [5000, 10000, 7500, 12000, 14000, 16000],
                borderColor: "#36a2eb",
                fill: false
            }]
        }
    });
});

