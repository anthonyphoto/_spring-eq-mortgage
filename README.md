## SpringEQ-Mortgage

### Demo Link https://springeq.anthonyphoto.now.sh/

##### Server Repo https://github.com/anthonyphoto/_spring-eq-mortgage/tree/master/server
##### Client Repo https://github.com/anthonyphoto/_spring-eq-mortgage/tree/master/client

### Summary

A business user wants to see a very simple front-end display for all loans that have a specific attribute, or all attributes for one specific loan. If the user gives a single attribute, the front-end should display a list of all loans and their details for any loan that has that attribute. The user should also be able to search through that list by typing specific details into a search box. If the user gives a single loan identifier, all information for just that loan should be displayed. 

### Requirements

* Create the routes to serve the details according to specs
    * Get by loan_number
    * Get by an attribute (e.g. First Name = Mike)
*  Create a front end to visual the data
    * A search box (fuzzy) to give me a list of loans based on either the loan number, first name, last name, city as I type it in (search-ahead)
    * The returned list should show the loan number, state, last name and first name with a “detail” collapsible that shows the full record in an easy-to-read format

### Technology Used
* React/ Redux/ Redux-form/ Thunk
* React Hooks
* Node.js/ Express
</br></br></br>

