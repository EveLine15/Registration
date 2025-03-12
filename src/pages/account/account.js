import { checkAuth } from "../home/home";

export function renderAccount(element){
    const authUser = checkAuth();
    const account = `
    <div class="container change">
    <h1>Change account's data</h1>
      <form>
        <label for="login">Login</label>
        <input type="text" placeholder="${authUser.login}" name="login">
        <label for="password">Password</label>
        <input type="password" placeholder="${authUser.password}" name="password">
        <label for="age">Age</label>
        <input type="number" placeholder="${authUser.age}" name="age">
        <label for="email">Email</label>
        <input type="email" placeholder="${authUser.email}" name="email">
        <label for="company">Company</label>
        <input type="text" placeholder="${authUser.company}" name="company">
        <p class="hidden-error error">Account already exists</p>
        <button>Change</button>
      </form>
    </div>`

    element.innerHTML = account;
    initChanges();
}

function initChanges(){
    const form = document.querySelector('form');
    form.addEventListener('submit', changeData);
}

function changeData(event){
    event.preventDefault();
    const authUser = checkAuth();
    const usersList = JSON.parse(localStorage.getItem('users'));

    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(input => {
        if(input.value.trim() !== "") authUser[input.name] = input.value;
    })
    
    const index = usersList.findIndex(item => item.active === true);
    usersList.splice(index, 1);
    usersList.push(authUser);
    localStorage.setItem('users', JSON.stringify(usersList));
    location.pathname = '\home'
}