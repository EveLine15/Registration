export function renderRegistration(element){
    const reg = `
        <div class="container registr">
        <h1>Create account</h1>
      <form>
        <input type="text" placeholder="Create login" name="login">
        <input type="password" placeholder="Create password" name="password">
        <h3>About you</h3>
        <input type="number" placeholder="Your age" name="age">
        <input type="email" placeholder="Your email" name="email">
        <input type="text" placeholder="Your company" name="company">
        <p class="hidden-error error">Invalid</p>
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
    const {login, password, age, email, company} = event.target.elements;
    const user = {
        login: login.value,
        password: password.value,
        age: age.value,
        email: email.value,
        company: company.value,
        active: true
    }

    const isEmpty = Object.values(user).some(value => String(value || "").trim() === "");;

    console.log(isEmpty);

    const usersList = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    console.log(usersList);

    console.log(user.login);
    if(usersList.find(el => el.login === user.login)){
        const errMessage = document.querySelector('.error');
        errMessage.innerText = 'Account already exsists'
        errMessage.classList.remove('hidden-error');
        event.target.reset();
    }

    else if(isEmpty){
        const errMessage = document.querySelector('.error');
        errMessage.innerText = 'Fill all fields'
        errMessage.classList.remove('hidden-error');
    }

    else{
        usersList.push(user);
        localStorage.setItem('users', JSON.stringify(usersList));
        console.log(location.pathname)
        location.pathname = "/home";
    }
}