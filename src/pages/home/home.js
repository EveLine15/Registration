export function renderHome(element){
  const authUser = checkAuth();
    const home = `
        <div class="container home">
      <h1>Thank you for registration, <span>${authUser.login}</span></h1>
      <h3>Your age: <span>${authUser.age}</span></h3>
      <h3>Your email: <span>${authUser.email}</span></h3>
      <h3>Your company: <span>${authUser.company}</span></h3>
      <a href="account">Change account</a>
      <a href="auth" id="logOut">Log out</a>
    </div>
    `
  element.innerHTML = home;
  submitLogOut();
}

export function checkAuth(){
  const usersList = JSON.parse(localStorage.getItem('users'));
  const authUser = usersList.find(el => el.active);
  return authUser;
}

function submitLogOut(){
  const linkBack = document.querySelector('#logOut');
  linkBack.addEventListener('click', logOut);
}

function logOut(event){
  let usersList = JSON.parse(localStorage.getItem('users'));
  usersList.map(el => el.active = false);
  localStorage.setItem('users', JSON.stringify(usersList));
}