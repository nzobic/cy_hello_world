class HomePage {

    elements = {
        acceptCookiesBtn: () => cy.get('[onclick="allow_ct();"]'),
    }


    clickAcceptCookies() {
        this.elements.acceptCookiesBtn().click()
    }

    selectCategoryFromMenu(menu, submenu) {
        cy.get("#$-submenu".replace('$', menu)).invoke('show')
        cy.get("#$-submenu".replace('$', menu)).contains(submenu).click()
    }
}

module.exports = new HomePage();