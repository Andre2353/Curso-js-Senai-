const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const website = document.getElementById("website");
const companyName = document.getElementById("company_name");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        const usuario = data[6]; 
        
        nome.textContent = usuario.name;
        email.textContent = usuario.email;
        telefone.textContent = usuario.phone;
        website.textContent = usuario.website;
        companyName.textContent = usuario.company.name;
    })
    