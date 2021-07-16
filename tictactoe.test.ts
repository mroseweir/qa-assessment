import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Clicking upper left square adds an X to that square', async () => {

    let upperLeftBox = await (await driver).findElement(By.id('cell-0'));
    await upperLeftBox.click();

    expect(await upperLeftBox.getText()).toEqual('X')

});

test('Clicking upper right square adds an X to that square', async () => {

    let upperRightBox = await (await driver).findElement(By.id('cell-2'));
    await upperRightBox.click();

    expect(await upperRightBox.getText()).toEqual('X')

});

test('Clicking lower right square adds an X to that square', async () => {

    let lowerRightBox = await (await driver).findElement(By.id('cell-8'));
    await lowerRightBox.click();

    expect(await lowerRightBox.getText()).toEqual('X')

});