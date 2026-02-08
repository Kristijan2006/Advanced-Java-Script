let button = document.getElementById('btn1');
let tableBody = document.querySelector('#Table tbody');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');

let currentPage = 1;


function loadPlanets() {
    fetch(`https://swapi.py4e.com/api/planets/?page=${currentPage}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            tableBody.innerHTML = '';

            for (let i = 0; i < data.results.length && i < 10; i++) {
                tableBody.innerHTML += `
                    <tr>
                        <td>${data.results[i].name}</td>
                        <td>${data.results[i].population}</td>
                        <td>${data.results[i].climate}</td>
                        <td>${data.results[i].gravity}</td>
                    </tr>
                `;
            }
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
}


button.addEventListener('click', function () {
    currentPage = 1;
    loadPlanets();
});


button2.addEventListener('click', function () {
    currentPage = 2;
    loadPlanets();
});


button3.addEventListener('click', function () {
    currentPage = 1;
    loadPlanets();
});