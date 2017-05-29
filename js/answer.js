
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

  // Only one CEO, so no need to account for multiple roots.
  // Iterate through employee array.
  for (var i of employees) {

    // If employee reports to no one, i.e. the CEO.
    if (i.manager === null) {

      // Set employee as the root node.
      ceo = new PersonTreeNode(i);
    }
  }

  // Subroutine to find directReports.
  var findDirectReports = function(boss) {

    // Iterate through employee array.
    for (var n of employees) {

      // If employee has a manager.
      if (n.manager) {

        // If that manager matches the boss argument.
        if (n.manager.id === boss.person.id) {

          // Create new variable to be able to access PersonTreeNode recursively.
          var x = new PersonTreeNode(n);

          // Push employee into manager's directReports array.
          boss.directReports.push(x);

          // Recurse to see if employee has directReports.
          findDirectReports(x);
        }
      }
    }

    // Break recursion if employee has no directReports.
    return;
  };

  // Call subroutine starting with CEO.
  findDirectReports(ceo);

  // YOUR CODE ENDS HERE

  return ceo;
};
