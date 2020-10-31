function renderChart(dates , maxx , minn) {
	const ctx = document.getElementById('chart').getContext('2d');
	const chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: dates,
			datasets: [{
				label: 'MAXIMUM TEMPERATURE',
				data: maxx,
				backgroundColor: 'transparent',
				borderColor: 'red',
				borderWidth: 2
			},
			{
				label: 'MINIMUM TEMPERATURE',
				data: minn,
				backgroundColor: 'transparent',
				borderColor: 'green',
				borderWidth: 2
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}