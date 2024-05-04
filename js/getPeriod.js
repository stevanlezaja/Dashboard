document.addEventListener('DOMContentLoaded', function() {
    const periodSelect = document.getElementById('period-select');
    let period;
    periodSelect.addEventListener('change', function() {
        console.log(periodSelect.value);
        period = getPeriod();
    });
});