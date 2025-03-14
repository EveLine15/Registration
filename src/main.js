import { renderAuth } from "./pages/authorization/authorization";
import { renderHome } from "./pages/home/home";
import { renderRegistration } from "./pages/registration/registration";
import { renderAccount } from "./pages/account/account";
import { authCheck } from "./authCheck";
import "./style/style.scss"

const app = document.querySelector('#app');

authCheck() ? renderHome(app) : renderAuth(app);

switch (location.pathname) {
    case "/home":
        renderHome(app)
        break;
    case "/registr":
        renderRegistration(app);
        break;
    case "/auth":
        renderAuth(app);
        break;
    case "/account":
        renderAccount(app);
        break;
    default:
        break;
}