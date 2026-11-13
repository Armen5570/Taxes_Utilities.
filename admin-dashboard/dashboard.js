
const incomeCanvas = document.getElementById('incomeChart');
const expenseCanvas = document.getElementById('expenseChart');

if (window.Chart) {
    Chart.defaults.color = '#9ba7c0';
    Chart.defaults.font.family = 'Inter';

    new Chart(incomeCanvas, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Income',
                data: [150, 180, 160, 220, 200, 260, 230, 290, 270, 310, 350, 380],
                borderColor: '#9278ff',
                backgroundColor: 'rgba(146,120,255,.12)',
                fill: true,
                tension: .4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });

    new Chart(expenseCanvas, {
        type: 'doughnut',
        data: {
            labels: ['Utilities', 'Taxes', 'Food', 'Other'],
            datasets: [{
                data: [25, 35, 20, 20],
                backgroundColor: [
                    '#8c70ff',
                    '#35dca4',
                    '#5595ff',
                    '#ffbd69'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

document.getElementById('dateButton').addEventListener('click', () => {
    alert('This year: 2026');
});
