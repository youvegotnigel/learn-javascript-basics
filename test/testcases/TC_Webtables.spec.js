describe('Handling WebTables', function () {
  
    it('WebTables test case', function (){
       cy.visit("https://money.rediff.com/indices/bse/sensex?src=moneyhome_bseIndices");
      
      //total rows
      cy.get('table.dataTable > tbody tr').should('have.length','30')

      //total cols
       cy.get('table.dataTable > tbody tr:first-child td').should('have.length','6')

      //get single row data and validate column text

      cy.get('table.dataTable > tbody tr').eq(0).within(()=>{

         cy.get('td').then((element)=>{
            cy.log(element.text())
         })

         cy.get('td').eq(0).should('contain.text','Asian')

      })


      //validate data based on cell values

      cy.get('table.dataTable').contains('Bajaj Auto Ltd.').parent().parent().within(()=>{

         cy.get('td').eq(2).then((element)=>{

            cy.log("Current price is: "+element.text())
         })

      })



      //Get entire Table data
      cy.get('table.dataTable > tbody tr')
      .each((rows)=>{

         cy.wrap(rows).within(()=>{

            cy.get('td').each((celldata)=>{

               cy.log(celldata.text())
            })

         })

      })

    });
 });