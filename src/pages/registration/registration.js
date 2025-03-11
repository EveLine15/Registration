export function renderRegistration(element){
    const reg = `
        <div class="container registr">
        <h1>Create account</h1>
      <form>
        <input type="text" placeholder="Create login" name="login">
        <input type="password" placeholder="Create password" name="password">
        <p class="hidden-error error">Account already exists</p>
        <button>Sign up</button>
      </form>
    </div>
    `

    element.innerHTML = reg;
    initCreateAccount();
}

function initCreateAccount(){
    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);
}

function submitForm(event){
    event.preventDefault();
    const {login, password} = event.target.elements;
    const user = {
        login: login.value,
        password: password.value,
        active: true
    }

    const usersList = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    console.log(usersList);

    console.log(user.login);
    if(usersList.find(el => el.login === user.login)){
        const errMessage = document.querySelector('.error');
        errMessage.classList.remove('hidden-error');
        event.target.reset();
    }

    else{
        usersList.push(user);
        localStorage.setItem('users', JSON.stringify(usersList));
        console.log(location.pathname)
        location.pathname = "/home";
    }
}