export function renderAuth(element){
    const auth = `
        <div class="container auth">
        <h1>Authorization</h1>
        <form>
        <input type="text" placeholder="login" name="login">
        <input type="password" placeholder="password" name="password">
        <p class="hidden-error error">Invalid login or password</p>
        <button>Log in</button>
      </form>
      <p>Don't have an account?</p>
      <a href="registr" class="reg-link">Sign up</a>
    </div>
    `
    element.innerHTML = auth;
    initSubmit();
}

function initSubmit(){
    const form = document.querySelector('form');
    form.addEventListener('submit', registrationCheck);

    const regButton = document.querySelector('.reg-link');
    regButton.addEventListener('click', () => {
        location.pathname = "/registr";
    });
}

function registrationCheck(event){
    event.preventDefault();
    console.log(event.target)
    const {login, password} = event.target.elements;
    const user = {
        login: login.value,
        password: password.value,
        active: false
    }
    
    const usersList = localStorage.getItem('users') ?  JSON.parse(localStorage.getItem('users')) : [];
    console.log(usersList);
    console.log(user);
    const authUser = usersList.find(el => el.login === user.login && el.password === user.password);
    if(authUser){
        usersList.map(el => {
            if(el.login === authUser.login) el.active = true;
        });
        localStorage.setItem('users', JSON.stringify(usersList));
        location.pathname = "/home";
    }
    else {
        const errMessage = document.querySelector('.error');
        errMessage.classList.remove('hidden-error');
    }
}