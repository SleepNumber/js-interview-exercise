
/**
 * Given an array of Person objects, returns the root PersonTreeNode (the CEO).
 * @param {Person[]} employees - An array of Person objects representing all the employees of the company.
 * @returns {PersonTreeNode} The CEO of the organization.
 */
function generateTree(employees) {

  /**
   * @ignore
   * INSTRUCTIONS:
   * 1. ONLY edit this function and nothing else!.
   *
   * 2. Analyze the Person.js and PersonTreeNode.js files.
   *
   * 3. Parse the `employees` array and create a single PersonTreeNode
   *    object representing the CEO (the Person with no `manager`).
   *    All PersonTreeNode object's `directReports` arrays should contain
   *    PersonTreeNode's for their direct reports...creating a tree.
   *
   * 4. Refresh or click the 'Retry Test' button to rerun the test.
   *
   *  Feel free to create any additional functions in this file as needed.
   */

  var ceo = null; // Should be a PersonTreeNode object at the end;

  // YOUR CODE STARTS HERE


  //********//
  //  Plan  //
  //********//
  // 1. Make employeeDirectory to facilitate look-up
  // 2. Convert Person Objects to Tree Nodes
  // 3. Add Tree nodes to directory
  // 4. Add employee to manager's directReports
  // 5. Find managerless employee (CEO)



  // 1. Make employeeDirectory
  var employeeDirectory = {};

  // For Future case where lookup, or structuring
  // by name alone
  var employeeNameToId = {};

  // 2. Convert Person Objects to Tree Nodes
  ceo = employees.map(employee => new PersonTreeNode(employee))

  // 3. Add Tree nodes to directory
  .map(employee => {
    employeeDirectory[employee.person.id] = employee;
    employeeNameToId[employee.person.name] = employee;
    return employee;
  })

  // 4. Add employee to manager's directReports
  .map(employee => {
    if(employee.person.manager){
      var managerId = employee.person.manager.id;
      employeeDirectory[managerId].directReports.push(employee);
    }
    return employee;
  })
  
  // 5. Find managerless employee (CEO)
  .reduce((CEO, employee) => employee.person.manager === null ? employee : CEO, null);

  // YOUR CODE ENDS HERE

  return ceo;
};




//***************************//
//   Bi-DirectionalTree      //
//***************************//
//  Great if modifying the tests
//  were allowed :)
function generateBidirectionalTree (employees){
  var ceo
  
  ceo = employees.map(employee => {
    employee.directReports = [];
    return employee;
  })
  .map(employee => {
    employee.manager && employee.manager.directReports.push(employee);
    return employee;
  })
  .reduce((CEO, employee) => employee.manager === null ? employee : CEO, null);

  return ceo
}
