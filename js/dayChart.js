
function getPeriod() {
    const periodSelect = document.getElementById('period-select');
    console.log("Period string: " + periodSelect.value);
    const today = new Date();
    var periodString = periodSelect.value;
    if (periodString === "week") return 7;
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


document.addEventListener('DOMContentLoaded', function() {
    const periodSelect = document.getElementById('period-select');
    let period = getPeriod();
    let data = getData(period);
    let labels = generateLabels(period);
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
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
    periodSelect.addEventListener('change', function() {
        period = getPeriod();
        console.log("Period: " + period);
        data = getData(period);
        labels = generateLabels(period);
        console.log("Data: " + data);
        console.log("Labels: " + labels);
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = data;
        myChart.update();
    });
});

