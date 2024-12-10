document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('polarArea'); // Mengubah ID sesuai dengan yang digunakan dalam file HTML
  
    fetch('./data/mechine.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const uniqueData = _.uniqBy(data, 'Location'); // Filter data duplikat berdasarkan properti 'Location'
            const locations = uniqueData.map((item) => {
                return item.Location;
            });
            const RCoils = uniqueData.map((item) => {
                return item.RCoil;
            });
  
            // Pastikan data telah terbentuk dengan benar
            console.log(locations);
            console.log(RCoils);
  
            new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: locations,
                    datasets: [{
                        label: 'order per Location',
                        data: RCoils,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true
                }
            });
        })
        .catch((error) => {
            console.error('Error fetching or parsing data:', error);
        });
  });
  