import Page from '../page.js'

/**
 * page containing selectors and methods for login page
 */
class LoginPage extends Page {
    open() {
        return super.open('login');
    }

    /**
     * define selectors using accessor methods
     */
    get usernameInput() {
        return $('#username');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('button[type="submit"]');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();