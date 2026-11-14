// const nome = document.getElementById("nome");
// const email = document.getElementById("email");
// const telefone = document.getElementById("telefone");
// const website = document.getElementById("website");
// const companyName = document.getElementById("company_name");

const conteiner = document.getElementById("conteiner")
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

    })
