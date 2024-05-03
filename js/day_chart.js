function generateLabels(period=7) {
    const labels = [];
    for (let i = period-1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      labels.push(date.toLocaleDateString());
    }
    return labels;
}

function getData(period=7) {
    const data = [];
    for (let i = period-1; i >= 0; i--) {
      data.push(Math.floor(Math.random() * 12));
    }
    return data;
}

let period = 7;
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