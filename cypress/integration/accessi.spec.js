import axe, { AxeResults } from 'axe-core'
import {createHtmlReport} from 'axe-html-reporter'


describe('Sample Test Suite',()=>{
    it('To test a sample application using Cypress IO',()=>{
        cy.visit("https://www.amazon.in/")
        cy.injectAxe()
        
        cy.checkA11y(null,{
            includedImpacts: ['serious'],
            runOnly: {
                type: 'tag',
                values: ['wcag2a']
              }},terminallog,true)
        function terminallog(violations) {
           cy.writeFile("./build/report.json",violations)
        }

        
       
   })
})