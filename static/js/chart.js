new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Backend Development", "Front-end Development", "Documentation", "Mobile Development"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
            data: [70, 15, 10, 5]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'By Category'
        },
        hover: false
    }
});