function renderChart() {
	const ctx = document.getElementById('chart').getContext('2d');
	const chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['1', '2', '3', '4', '5', '6'],
			datasets: [{
				label: '# of something',
				data: [80, 20, 30, 36, 100, 130],
				backgroundColor: 'transparent',
				borderColor: 'red',
				borderWidth: 2
			},
			{
				label: '# of anotherthing',
				data: [85, 120, 130, 63, 90, 110],
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