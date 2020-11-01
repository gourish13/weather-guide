function renderChart(dates, maxx, minn) {
	const ctx = document.getElementById('chart').getContext('2d');
	const chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: dates,
			datasets: [{
				label: 'MAX TEMP',
				data: maxx,
				backgroundColor: 'transparent',
				borderColor: 'red',
				borderWidth: 2
			},
			{
				label: 'MIN TEMP',
				data: minn,
				backgroundColor: 'transparent',
				borderColor: 'navy',
				borderWidth: 2
			}]
		},
		options: {
			tooltips: {
				callbacks: {
					label: function(tooltipitem) {
						if (Number(localStorage.isUnitCelcius))
							return tooltipitem.yLabel + "°C"
						else
							return tooltipitem.yLabel + "°F"
					}
				}
			},
			title: {
				display: true,
				text: 'Max and Min temp forecast for 5 days',
				position: 'bottom'
			},
			scales: {
				yAxes: [{
					ticks: {
						fontColor: 'orangered',
						beginAtZero: false
					}
				}],
				xAxes: [{
					ticks: {
						fontColor: 'cyan',
						beginAtZero: false
					}
				}]
			}
		}
	});
}