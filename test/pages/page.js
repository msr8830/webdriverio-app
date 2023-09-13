/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a page
    * @param path path of the page
    */
    open(path) {
        return browser.url(path)
    }
}
