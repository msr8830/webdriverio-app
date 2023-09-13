import LoginPage from '../../pages/loginPage/login.page.js'
import SecurePage from '../../pages/securePage/secure.page.js'
import { expect } from "chai";

describe('Heroku App Coding Exercise - Task 1', () => {
    it('Navigate to Login Page', async () => {
        await LoginPage.open()
    })

    it('Enter the username and password to login', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await SecurePage.successMessage.waitForDisplayed();
    })

    it('Validate you have logged in', async () => {
        expect(await SecurePage.successMessage.isExisting()).to.be.true
        expect(await SecurePage.successMessage.getText()).to.include('You logged into a secure area!')
    })

    it('Click Logout Button To Logout', async () => {
        await SecurePage.logoutButton.waitForDisplayed();
        await SecurePage.logoutButton.click();
    })

    it('Validate you’ve logged out', async () => {
        await SecurePage.successMessage.waitForDisplayed();
        expect(await SecurePage.successMessage.isExisting()).to.be.true
        expect(await SecurePage.successMessage.getText()).to.include('You logged out of the secure area!')
    })
})

