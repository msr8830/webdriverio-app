import Page from '../page.js'

/**
 * page containing selectors and methods for secure page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get successMessage() {
        return $('#flash')
    }

    get logoutButton() {
        return $('a[href="/logout"]');
    }

    open() {
        return super.open('secure')
    }
}

export default new SecurePage()