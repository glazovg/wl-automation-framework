import { t } from 'testcafe'
import loginPage from '../pageObjects/Login.po'
import data from '../dataProvider/data'
import config from '../../config'

fixture `Login`
    .page(config.url)

test.only('Valid credentials', async () => {
    loginPage.login(data.name,data.password)
    const inventory = loginPage.inventoryContainer
    await t
        .expect(inventory.exists)
        .ok('Inventory was not displayed.')
})

test('Empty credentials', async ()=> {
    await loginPage.login(data.nullName,data.nullPassword)
    const errorMessage = await loginPage.errorMessage.innerText
    await t
        .expect(errorMessage)
        .eql('Epic sadface: Username is required', 'Erros message was not diplayed or the message was not correct.')
})