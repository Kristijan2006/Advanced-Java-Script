let button=document.getElementById('generatebtn');
let tableBody=document.querySelector('#userTable tbody');

button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            tableBody.innerHTML = ''; 

           for (let key in data) {
                tableBody.innerHTML += `
                    <tr>
                        <td>${key}</td>
                        <td>${data[key]}</td>
                    </tr>
                `;
            }

        })
        .catch(function (error) {
            console.log('Error:', error);
        });
});
    
    