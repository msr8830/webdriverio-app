import HoversPage from "../../pages/hoversPage/hovers.page.js";
import { expect } from "chai";
import {browser} from "@wdio/globals";

describe('Heroku App Coding Exercise - Task 3', () => {
    before(async () => {
        await HoversPage.open()
    });

    describe('Hover - User 1', () => {
        it('Hover Image To View Profile Link', async () => {
            await HoversPage.userImages[0].moveTo()
            await HoversPage.user1Profile.waitForDisplayed()

        })

        it('Click "View Profile" Link & Verify URL', async () => {
            await HoversPage.user1Profile.click()
            await HoversPage.notFoundTitle.waitForDisplayed()
            expect(await browser.getUrl()).to.include('/users/1')
        })

        it('Navigate to Hovers Page', async () => {
            await HoversPage.open()
        })
    })

    describe('Hover - User 2', () => {
        it('Hover Image To View Profile Link', async () => {
            await HoversPage.userImages[1].moveTo()
            await HoversPage.user2Profile.waitForDisplayed()

        })

        it('Click "View Profile" Link & Verify URL', async () => {
            await HoversPage.user2Profile.click()
            await HoversPage.notFoundTitle.waitForDisplayed()
            expect(await browser.getUrl()).to.include('/users/2')
        })

        it('Navigate to Hovers Page', async () => {
            await HoversPage.open()
        })
    })

    describe('Hover - User 3', () => {
        it('Hover Image To View Profile Link', async () => {
            await HoversPage.userImages[2].moveTo()
            await HoversPage.user3Profile.waitForDisplayed()

        })

        it('Click "View Profile" Link & Verify URL', async () => {
            await HoversPage.user3Profile.click()
            await HoversPage.notFoundTitle.waitForDisplayed()
            expect(await browser.getUrl()).to.include('/users/3')
        })
    })
})
