const CompaniesAndUsers = (companies, users) => {
  const company_merge = companies.map((data) => {
    return {
      ...data,
      employees: data.employees.map((user_id) =>
        users.find((element) => element.id == user_id)
      ),
    };
  });

  return company_merge;
};

const InactiveUsersFromCompanies = (company) => {
  //2a
  const inactive_users = company
    .filter((data) => data.status == "active")
    .map((companies_map) => {
      return companies_map.employees.filter(
        (employee) => employee.status == "inactive"
      );
    });

  const reducer = inactive_users
    .reduce((a, b) => a.concat(b), [])
    .map((employee) => employee.name);

  return reducer;
};

const CompaniesSalaryCostGroup = (company) => {
  //2b
  //Companies salary cost grouped by gender
  const salary_company = company.map(({ name, employees }) => {
    return {
      name: name,
      male: CalculateSalaryByGender(employees, "male"),
      female: CalculateSalaryByGender(employees, "female"),
    };
  });

  return salary_company;
};

const SortSalaryCost = (salary_company) => {
  // 2c
  // Companies name sorted by total salary cost
  const order_salary_cost = salary_company.map(({ name, male, female }) => {
    return {
      name: name,
      salary: male + female,
    };
  });

  const order = order_salary_cost.sort((a, b) => a.salary - b.salary);

  return order.map((data) => data.name);
};

//Function to evaluate gender
const CalculateSalaryByGender = (employee_arr, gender) => {
  return employee_arr
    .map((salary) => (salary.gender === gender ? salary.salary : 0))
    .reduce((a, b) => a + b, 0);
};

module.exports = {
  CompaniesAndUsers,
  InactiveUsersFromCompanies,
  CompaniesSalaryCostGroup,
  SortSalaryCost,
};
