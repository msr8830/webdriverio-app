import { remote } from 'webdriverio';

async function clickCheckbox(element, index) {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome',
        },
    });

    await browser.url('https://the-internet.herokuapp.com/checkboxes')
    await browser.maximizeWindow()

    const randomNum = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < randomNum; i++) {
        await browser.$$(element)[index].click()
    }

    await browser.deleteSession();
}

clickCheckbox('#checkboxes>input', 0)
clickCheckbox('#checkboxes>input', 1)


async function randomDropdown(selectBox) {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome',
        },
    });

    await browser.url('https://the-internet.herokuapp.com/dropdown')
    await browser.maximizeWindow()

    const randomNum = Math.floor(Math.random() * 2) + 1;

    await browser.$(selectBox).selectByAttribute('value', randomNum.toString());

    await browser.deleteSession();
}

randomDropdown('#dropdown')