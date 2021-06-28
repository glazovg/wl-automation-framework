import { Selector, t } from "testcafe";

class Login {
    usernameField = Selector('#user-name')
    passwordField = Selector('#password')
    loginButton = Selector('#login-button')
    inventoryContainer = Selector('.inventory_container')
    errorMessage = Selector('h3')

    async login(username, password) {
        if (username == null || password == null) {
            await t
                .click(this.loginButton)
        } else {
            await t
                .typeText(this.usernameField, username)
                .typeText(this.passwordField, password)
                .click(this.loginButton)
        }
    }
}

export default Login = new Login()