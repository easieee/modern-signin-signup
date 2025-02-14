const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});


loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function clearInput(){
    document.getElementById("sign_in").value = "";
    document.getElementById("sign_up").value = "";
    
}

function toggleMenu(x) {
    x.classList.toggle("change");
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}