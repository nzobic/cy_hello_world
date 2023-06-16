class JobPage {

    elements = {
        keywordField: () => cy.get('[placeholder="Pretraži po ključnoj reči..."]'),
        keywordItem: () => cy.get('.ui-menu-item'),
        seniorityField: () => cy.get('div[class*="seniority-select"]'),
        seniorityOption: () => cy.get('[name="senioritet[]"]'),
        //sorting: () => cy.get('[class*="search_sort"] span'),
        sorting: () => cy.get('.__search-title-and-sort button'),
        tags: () => cy.get('.flex.items-center.gap-2.flex-wrap'),
        jobTitle: () => cy.get('.__search-results div.relative h3 a')
    }


    clickOnKeywordField() {
        this.elements.keywordField().click()
    }

    typeInKeywordField(text) {
        this.elements.keywordField().type(text)
    }

    selectByTechnology() {
        this.elements.keywordItem().contains('pretraži po IT tehnologiji').click({force:true})
    }

    clickOnKeywordAndType(text) {
        this.clickOnKeywordField()
        this.typeInKeywordField(text)
        this.selectByTechnology()
    }

    clickOnSeniorityField() {
        this.elements.seniorityField().click()
    }

    selectSeniority(text) {
        this.elements.seniorityOption().select(text, {force:true})
    }

    clickOnSeniorityAndSelectOption(text) {
        this.clickOnSeniorityField()
        this.selectSeniority(text)
    }

    sortJobs(text) {
        this.elements.sorting().contains(text).scrollIntoView().click({force:true})
    }

    verifySearchResult(text1, text2) {
        this.elements.tags().each(($el) => {
            cy.wrap($el).invoke('text').should('contain', text1)
            cy.wrap($el).invoke('text').should('contain', text2)
        })
    }

    clickOnFirstJobTitle() {
        this.elements.jobTitle().eq(0).invoke('text')
        .then((text) => text.trim())
        .as('title')
    
        this.elements.jobTitle().eq(0).scrollIntoView().click({force:true})
    }

}

module.exports = new JobPage();