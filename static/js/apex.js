var options = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    fill: {
        colors: "#3e95cd"
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [85, 85, 85,85, 70, 70, 65, 60, 65, 55, 70, 50, 40]
    }],
    xaxis: {
        categories: ['Node.JS', 'Express.JS', 'PostgreSQL', 'Knex.JS', 'Flask', 'Python', 'Laravel', 'PHP', 'Postman','JSON', 'JSON Web Token', 'Socket.io', 'Redis'],
    }
}

var chart = new ApexCharts(
    document.querySelector("#chart1"),
    options
);
// chart.updateOptions({
// 		colors: ["#00FF00"]
// 	})

chart.render();
function chartTab1() {
    chart.updateOptions({
        fill: {
            colors: "#3e95cd"
        },
        series: [{
            data: [85, 85, 85,85, 70, 70, 65, 60, 65, 55, 70, 50, 40]
        }],
        xaxis: {
            categories: ['Node.JS', 'Express.JS', 'PostgreSQL', 'Knex.JS', 'Flask', 'Python', 'Laravel', 'PHP', 'Postman','JSON', 'JSON Web Token', 'Socket.io', 'Redis'],
        }
    })
}
function chartTab2() {
    chart.updateOptions({
        fill: {
            colors: "#8e5ea2"
        },
        series: [{
            data: [85, 70, 65, 55, 80, 40]
        }],
        xaxis: {
            categories: ['React.JS', 'Next.JS', 'HTML5', 'CSS', 'JavaScript', 'Redux.JS'],
        }
    })
}
function chartTab3() {
    chart.updateOptions({
        fill: {
            colors: "#3cba9f"
        },
        series: [{
            data: ['60', '55', '40', '45', '60']
        }],
        xaxis: {
            categories: ['SRS', 'SDD', 'STD', 'STR', 'UMD'],
        }
    })
}
function chartTab4() {
    chart.updateOptions({
        fill: {
            colors: "#e8c3b9"
        },
        series: [{
            data: ['60', '80', '65', '55']
        }],
        xaxis: {
            categories: ['Android Studio', 'Java', 'XML', 'Firebase'],
        }
    })
}