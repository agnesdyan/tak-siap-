// Data Produk dengan gambar
const produk = [
    {"nama": "Samsung Galaxy Tab A9+ 8/128 GB - Graphite", "harga": 3999000, "gambar": "https://id.shp.ee/Q6txCUr"},
    {"nama": "Samsung Galaxy Tab S9 FE WiFi 6/128 GB - Gray", "harga": 5899000, "gambar": "https://id.shp.ee/Xm5Q7Ah"},
    {"nama": "Samsung Galaxy Tab A9 WiFi 4/64 GB - Graphite", "harga": 1709100, "gambar": "https://id.shp.ee/pY5GSpY"},
    {"nama": "Samsung Galaxy Tab S9 FE+ WiFi 8/128 GB - Silver", "harga": 7799000, "gambar": "https://id.shp.ee/3saTJE8"},
    {"nama": "Samsung Galaxy Tab S9 FE 6/128 GB - Gray", "harga": 6849000, "gambar": "https://id.shp.ee/cypBugD"},
    {"nama": "Samsung Galaxy Tab A9 4/64 GB - Graphite", "harga": 2150100, "gambar": "https://id.shp.ee/jeMwJb6"},
    {"nama": "Samsung Galaxy S24", "harga": 8999999, "gambar": "https://tse1.mm.bing.net/th?id=OIP.N6lzS3OqDqnLA8fq9TX1QgHaEK&pid=Api"},
    {"nama": "Samsung Galaxy Z Flip5", "harga": 15000000, "gambar": "https://tse3.mm.bing.net/th?id=OIP.zSWi_6oQatqp7H4SUKKwcAAAAA&pid=Api"},
    {"nama": "Samsung Galaxy A14", "harga": 2250000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.SyP2Kesd1y8XJrDxvo8oOAHaHa&pid=Api"},
    {"nama": "Samsung Galaxy Z Fold5", "harga": 25000000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.J0Ldx8MKFWfajR-lygpOTwHaEJ&pid=Api"},
    {"nama": "Samsung Galaxy M34 5G", "harga": 4500000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.FaOP-QsOSeWn35MVxlXoJAHaHa&pid=Ap"},
    {"nama": "Sony PlayStation 5", "harga": 6899000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.85148_Q0AssOMoMDuWNhPAHaFj&pid=Api"},
    {"nama": "Sony PlayStation 4 Pro", "harga": 2921000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.Pjba5EpErt45l4RHRujBBgHaEK&pid=Api"},
    {"nama": "Sony PlayStation 4 Slim", "harga": 1621000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.oAQOXw49K7RZ5iv9UmiRuAHaHa&pid=Api"},
    {"nama": "Sony PlayStation 3 Slim", "harga": 470000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.7XiPAXAAmCxDIM25840qwQHaHW&pid=Api"},
    {"nama": "Sony PlayStation 2", "harga": 200000, "gambar": "https://tse1.mm.bing.net/th?id=OIP.N7yKBhRj4sQtzNKsuIJyjAHaFH&pid=Api"},
    {"nama": "Canon EOS M5", "harga": 6500000, "gambar": "https://www.bhphotovideo.com/images/images2500x2500/canon_1279c021aa_eos_m5_mirrorless_digital_1281376.jpg"},
    {"nama": "Canon EOS 80D DSLR", "harga": 6500000, "gambar": "https://www.bhphotovideo.com/images/images2500x2500/canon_1263c005_eos_80d_dslr_camera_1225876.jpg"},
    {"nama": "Canon Powershoot SX540", "harga": 4559000, "gambar": "https://www.bhphotovideo.com/images/images2500x2500/canon_1067c001_powershot_sx540_hs_1210598.jpg"},
    {"nama": "Google Pixel 9 Pro Fold", "harga": 28500000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.fdGJ0e6moUPKMfrCQqX3lAHaEK&pid=Api"},
    {"nama": "Google Pixel 9 Pro XL", "harga": 23800000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.KF3EIqtl48wr28l4DzPWpwHaEK&pid=Api"},
    {"nama": "Google Pixel 9 Pro", "harga": 19000000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.l51-EP-KnixvoL-SB58VxwHaEK&pid=Api"},
    {"nama": "Google Pixel 9", "harga": 15800000, "gambar": "https://tse4.mm.bing.net/th?id=OIP.7j7UWotc78Oh4dn8OSjqtAHaFj&pid=Api"},
    {"nama": "Google Pixel 8a", "harga": 8000000, "gambar": "https://tse2.mm.bing.net/th?id=OIP.p-pnWetFE0u4toEHMnswwgHaFF&pid=Api"}
];

// Menampilkan Daftar Produk
function displayProducts(products) {
    const productList = document.getElementById('searchResults');
    productList.innerHTML = "";  // Clear previous results
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <div class="info">
                <h3>${product.nama}</h3> <!-- Nama Produk -->
                <img src="${product.gambar}" alt="${product.nama}"> <!-- Gambar Produk -->
                <p><strong>Harga: </strong>Rp${product.harga.toLocaleString()}</p> <!-- Harga Produk -->
            </div>
        `;
        productList.appendChild(div);
    });
}


// Fungsi Binary Search
function binarySearch(data, target) {
    let low = 0;
    let high = data.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (data[mid].harga === target) {
            return mid;
        } else if (data[mid].harga < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// Fungsi untuk mencari berdasarkan nama
function searchByName(data, target) {
    return data.filter(item => item.nama.toLowerCase().includes(target.toLowerCase()));
}

// Sorting Produk berdasarkan harga
function quickSort(data) {
    if (data.length <= 1) return data;
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter(item => item.harga < pivot.harga);
    const middle = data.filter(item => item.harga === pivot.harga);
    const right = data.filter(item => item.harga > pivot.harga);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Menangani Form Pencarian
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const searchOption = document.getElementById('searchOption').value;
    const searchInput = document.getElementById('searchInput').value;

    let results = [];

    if (searchOption === '1') {
        const targetHarga = parseInt(searchInput);
        const index = binarySearch(produk, targetHarga);
        if (index !== -1) {
            results.push(produk[index]);
        }
    } else if (searchOption === '2') {
        results = searchByName(produk, searchInput);
    }

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = "<h3>Hasil Pencarian</h3>";
    if (results.length > 0) {
        displayProducts(results);
    } else {
        searchResults.innerHTML += "<p>Produk tidak ditemukan</p>";
    }
});

// Menampilkan produk awal
displayProducts(quickSort(produk));
