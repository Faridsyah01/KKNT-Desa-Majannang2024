let currentPage = 1;
const rowsPerPage = 100;
let dataCache = [];

// Fungsi untuk memuat halaman
function loadPage(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = dataCache.slice(start, end);
    displayTable(paginatedData);
    document.getElementById('page-info').textContent = `Page ${page} of ${Math.ceil(dataCache.length / rowsPerPage)}`;
}

// Fungsi untuk menampilkan tabel
function displayTable(data) {
    const tbody = document.querySelector("#data-table tbody");
    tbody.innerHTML = ''; // Kosongkan tbody

    data.forEach(item => {
        const row = document.createElement("tr");
        Object.values(item).forEach(text => {
            const cell = document.createElement("td");
            cell.textContent = text;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

// Fetch data JSON
fetch('./data/mechine.json')
    .then(response => response.json())
    .then(data => {
        dataCache = data;

        // Membuat header tabel
        const thead = document.querySelector("#data-table thead tr");
        const headers = Object.keys(data[0]);
        headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            thead.appendChild(th);
        });

        // Muat halaman pertama
        loadPage(currentPage);

        // Event listener untuk tombol pagination
        document.getElementById('prev').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                loadPage(currentPage);
            }
        });
        document.getElementById('next').addEventListener('click', () => {
            if (currentPage * rowsPerPage < dataCache.length) {
                currentPage++;
                loadPage(currentPage);
            }
        });
    })
    .catch(error => console.error('Error fetching JSON data:', error));
