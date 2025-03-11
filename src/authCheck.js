export function authCheck(){
    if(localStorage.getItem('users')){
        const userList = JSON.parse(localStorage.getItem('users'));
        return userList.find(el => el.active === true);
    } 

    else return false;
}