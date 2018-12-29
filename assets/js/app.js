require('../css/app.css');
require('../../node_modules/open-iconic/font/css/open-iconic-bootstrap.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');


var $ = require('jquery');
require('bootstrap');
require('chart.js');
require('popper.js');

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});

