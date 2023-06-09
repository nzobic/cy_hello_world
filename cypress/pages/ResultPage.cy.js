class ResultPage {

    elements = {
        jobHeader: () => cy.get('.__job-header h1 span'),
    }


    verifyResultContent() {
        cy.then (function() {
            cy.get('.__job-header h1 span').scrollIntoView().should('have.text', this.title)
        })
    }

}

module.exports = new ResultPage();