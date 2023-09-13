import Page from '../page.js'

/**
 * page containing selectors and methods for login page
 */
class HoversPage extends Page {
    open() {
        return super.open('hovers');
    }

    /**
     * define selectors using accessor methods
     */
    get userImages() {
        return $$('img[alt="User Avatar"]');
    }

    get user1Profile() {
        return $('[href="/users/1"]')
    }

    get user2Profile() {
        return $('[href="/users/2"]')
    }

    get user3Profile() {
        return $('[href="/users/3"]')
    }

    get notFoundTitle() {
        return $('h1')
    }
}

export default new HoversPage();