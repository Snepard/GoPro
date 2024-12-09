const container = document.getElementById('container');
const reg_btn = document.getElementById('register');
const login_btn = document.getElementById('login');

reg_btn.addEventListener('click', () => {
    container.classList.add("active");
});

login_btn.addEventListener('click', () => {
    container.classList.remove("active");
});