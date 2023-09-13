import TablesPage from '../../pages/tablesPage/tables.page.js'
import { expect } from "chai";

describe('Heroku App Coding Exercise - Task 2', () => {
    it('Navigate to Tables Page', async () => {
        await TablesPage.open()
    })

    it('Validate Example 1 Table is Displayed', async () => {
        await TablesPage.example1Table.waitForDisplayed()
    })

    it('Sort Ascending by Last Name', async () => {
        let unsorted = await TablesPage.unsortedData(TablesPage.firstColumnData)
        await TablesPage.filterTableColumn('Last Name')[0].click()
        let sorted = await TablesPage.sortedData(TablesPage.firstColumnData)
        expect(TablesPage.compareStringArrays(unsorted.sort(), sorted)).to.be.true
    })

    it('Sort Ascending by First Name', async () => {
        let unsorted = await TablesPage.unsortedData(TablesPage.secondColumnData)
        await TablesPage.filterTableColumn('First Name')[0].click()
        let sorted = await TablesPage.sortedData(TablesPage.secondColumnData)
        expect(TablesPage.compareStringArrays(unsorted.sort(), sorted)).to.be.true
    })

    it('Sort Ascending by Email', async () => {
        let unsorted = await TablesPage.unsortedData(TablesPage.thirdColumnData)
        await TablesPage.filterTableColumn('Email')[0].click()
        let sorted = await TablesPage.sortedData(TablesPage.thirdColumnData)
        expect(TablesPage.compareStringArrays(unsorted.sort(), sorted)).to.be.true
    })

    it('Sort Ascending by Due', async () => {
        let unsorted = await TablesPage.unsortedData(TablesPage.forthColumnData)
        await TablesPage.filterTableColumn('Due')[0].click()
        let sorted = await TablesPage.sortedData(TablesPage.forthColumnData)
        expect(TablesPage.compareNumberArrays(
            TablesPage.sortNumberArray(unsorted),
            sorted.map(TablesPage.convertToFloat)
        )).to.be.true
    })

    it('Sort Ascending by Web Site', async () => {
        let unsorted = await TablesPage.unsortedData(TablesPage.fifthColumnData)
        await TablesPage.filterTableColumn('Web Site')[0].click()
        let sorted = await TablesPage.sortedData(TablesPage.fifthColumnData)
        expect(TablesPage.compareStringArrays(unsorted.sort(), sorted)).to.be.true
    })

    it('Validate edit options are clickable', async () => {
        // These can also be moved into a loop to wait for them to be clickable, which will make more sense
        // if the number of rows are much larger.
        expect(await TablesPage.editLinkSixthColumnData(1).isClickable()).to.be.true
        expect(await TablesPage.editLinkSixthColumnData(2).isClickable()).to.be.true
        expect(await TablesPage.editLinkSixthColumnData(3).isClickable()).to.be.true
        expect(await TablesPage.editLinkSixthColumnData(4).isClickable()).to.be.true
    })

    it('Validate delete options are clickable', async () => {
        // These can also be moved into a loop to wait for them to be clickable, which will make more sense
        // if the number of rows are much larger.
        expect(await TablesPage.deleteLinkSixthColumnData(1).isClickable()).to.be.true
        expect(await TablesPage.deleteLinkSixthColumnData(2).isClickable()).to.be.true
        expect(await TablesPage.deleteLinkSixthColumnData(3).isClickable()).to.be.true
        expect(await TablesPage.deleteLinkSixthColumnData(4).isClickable()).to.be.true
    })
})
