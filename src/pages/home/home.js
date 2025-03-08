export function renderHome(element){
  const authUser = checkAuth();
    const home = `
        <div class="container home">
      <h1>Thank you for registration, <span>${authUser.login}</span></h1>
      <a href="auth">Log out</a>
    </div>
    `
  element.innerHTML = home;
  submitLogOut();
}

function checkAuth(){
  const usersList = JSON.parse(localStorage.getItem('users'));
  const authUser = usersList.find(el => el.active);
  return authUser;
}

function submitLogOut(){
  const linkBack = document.querySelector('a');
  linkBack.addEventListener('click', logOut);
}

function logOut(event){
  let usersList = JSON.parse(localStorage.getItem('users'));
  usersList.map(el => el.active = false);
  localStorage.setItem('users', JSON.stringify(usersList));
}