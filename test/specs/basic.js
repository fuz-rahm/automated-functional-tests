const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://facebook.com')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Facebook - Log In or Sign Up')
        console.log(title)
        browser.pause(5000)
    })
})