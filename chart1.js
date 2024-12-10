fetch('assets/data/Data2.json')
    .then(response => response.json())
    .then(data => {
        // Proses data untuk grafik
        const educationCounts = data.reduce((counts, item) => {
            const education = item['Pekerjaan'];
            if (education) counts[education] = (counts[education] || 0) + 1;
            return counts;
        }, {});

        const labels = Object.keys(educationCounts);
        const values = Object.values(educationCounts);

        // Buat grafik
        const ctx = document.getElementById('educationChart1').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: ['#f1c40f', '#e67e22', '#2980b9', '#8e44ad']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error processing JSON:', error));
