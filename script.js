const result = document.getElementById("result");//.innerHTML = "Hello World";
const filter = document.getElementById("filter");
const listItems = [];

// function getData() {
//     fetch('https://randomuser.me/api/?results=50')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
// }
getData();
filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch('https://randomuser.me/api/?results=30');
    const data = await res.json();
    const UserArr = data.results;
    // UserArr.forEach(element => {
    //     console.log(element);
    // });

    result.innerHTML = "";
    UserArr.forEach(user => {
        const li = document.createElement('div');
        listItems.push(li);
        li.innerHTML = `
        <div class="card text-center mb-3 mx-auto" style="width: 12rem;">
          <img src="${user.picture.large}" alt="${user.name.first}"/>
            <div class="card-body">
                <h5 class="card-title">${user.name.first}</h5>
                <p>${user.location.city}</p>
            </div>
        </div>
            `
        result.appendChild(li);
    });
}




//filter options

function filterData(data) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(data.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}