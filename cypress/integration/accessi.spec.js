
import axe from 'axe-core'
//import 'attest-node'

describe('Sample Test Suite',()=>{
  before( function () {
    cy.visit("https://www.amazon.in/")
    cy.injectAxe();
    
});
    it('To test a sample application using Cypress IO',()=>{
      cy.checkA11y(null,null,terminallog,true)
        function terminallog(violations){
            //cy.writeFile("./build/report.json",violations)
            const violationData = violations.map(
                ({ id, impact, tags,description, nodes }) => ({
                  id,
                  impact,
                  tags,
                  description,
                  nodes: nodes.length,
                })
              )
              
              cy.writeFile("./build/report",violationData)
            
        }
        })
                         
    })