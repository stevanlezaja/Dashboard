const periodSelect = document.getElementById('period-select');
let period;

document.addEventListener('DOMContentLoaded', () => {
    periodSelect.addEventListener('change', () => {
        console.log(periodSelect.value);
    });
});

function getPeriod() {
    const periodSelect = document.getElementById('period-select');
    const today = new Date();
    let periodString = periodSelect.value;
    if (periodString === "month") {
        if (today.getMonth() === 0 || 2 || 4 || 6 || 7 || 9 || 11) {
            return 31;
        } else if (today.getMonth() === 3 || 5 || 8 || 10) {
            return 30;
        } else {
            return 28;
        }
    }
    if (periodString === "year") {
        if (today.getFullYear() % 4 === 0) {
            return 366;
        } else {
            return 365;
        }
    }
    return 7;
}

function getData(period) {
    const data = [];
    for (let i = period-1; i >= 0; i--) {
      data.push(Math.floor(Math.random() * 12));
    }
    return data;
}

function generateLabels(period) {
    const labels = [];
    const options = {day: '2-digit', month: 'short'};
    for (let i = period-1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      labels.push(date.toLocaleDateString('en-GB', options));
    }
    return labels;
}

periodSelect.addEventListener('change', () => {
    let period = getPeriod();
    let labels = generateLabels(period);
    let data = getData(period);
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = data;
    myChart.update();
});

// Initialize labels and data
const labels = generateLabels(period);
const data = getData(period);

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {beginAtZero: true}
        }
    }
});