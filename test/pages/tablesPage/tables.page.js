import Page from '../page.js'

/**
 * page containing selectors and methods for secure page
 */
class TablePage extends Page {
    open() {
        return super.open('tables')
    }

    filterTableColumn(columnName) {
        return this.columnHeaders.filter(
            async (column) => await column.getText() === columnName)
    }

    async unsortedData(elements) {
        let unsortedValues = [];
        for (let i = 0; i < await elements.length; i++) {
            unsortedValues.push(await elements[i].getText())
        }
        return unsortedValues;
    }

    async sortedData(elements) {
        let unsortedValues = [];
        for (let i = 0; i < await elements.length; i++) {
            unsortedValues.push(await elements[i].getText())
        }
        return unsortedValues;
    }

    compareStringArrays(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }

        return JSON.stringify(array1) === JSON.stringify(array2)
    }

    convertToFloat(value) {
        return parseFloat(value.replace('$', ''));
    }

    sortNumberArray(array) {
        return array.map(this.convertToFloat).sort((a, b) => a - b);
    }

    compareNumberArrays(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }

        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }

        return true;
    }

    editLinkSixthColumnData(row) {
        return $(`#table1 tbody tr:nth-child(${row}) a:first-child`)
    }

    deleteLinkSixthColumnData(row) {
        return $(`#table1 tbody tr:nth-child(${row}) a:last-child`)
    }

    /**
     * define selectors using accessor methods
     */
    get example1Table() {
        return $('#table1')
    }

    get columnHeaders() {
        return $$('#table1 th')
    }

    get firstColumnData() {
        return $$('#table1 td:first-child')
    }

    get secondColumnData() {
        return $$('#table1 td:nth-child(2)')
    }

    get thirdColumnData() {
        return $$('#table1 td:nth-child(3)')
    }

    get forthColumnData() {
        return $$('#table1 td:nth-child(4)')
    }

    get fifthColumnData() {
        return $$('#table1 td:nth-child(5)')
    }
}

export default new TablePage()