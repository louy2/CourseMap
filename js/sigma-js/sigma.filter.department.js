/* Initialization */

var filter = sigma.plugins.filter();

/* Predicate */

/*
 * filter by departments
 *
 * @param int   n               course node
 * @param Array departmentList  list of selected departments
 *
 * @return boolean  whether course node n is in one of the departments
 *                  listed in departmentList
 */
function applyDepartmentFilter(departmentList) {
  filter
    .undo('departments')
    .nodesBy(function(n, params) {
      return params.departmentList.indexOf(n.department) != -1;
    }, departmentList, 'departments')
    .apply();
}

applyDepartmentFilter();
