

class LoginPageAction {

    visitLoginPage(){
        cy.visit('/login')
        return this
    } 

    typeInEmailField(email: string){
        cy.get('input[type="email"]').clear().type(email)
        return this
    }

    typeInPassword(password: string){
        cy.get('input[type="password"]').clear().type(password)
        return this
    }

    clickSignInButton(){
        cy.get('button[type="submit"]').click()
        return this
    }
}

export default LoginPageAction