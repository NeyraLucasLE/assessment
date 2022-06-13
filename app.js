const { getUsers, getCompanies } = require("./helpers/assessment");
const {
  CompaniesAndUsers,
  InactiveUsersFromCompanies,
  CompaniesSalaryCostGroup,
  SortSalaryCost,
} = require("./functions/basics");

const main = async () => {
  console.clear();

  users = await getUsers();
  companies = await getCompanies();

  // Task 1
  // Function to get companies data filled with users data
  let users_companies = CompaniesAndUsers(companies, users);
    console.log(users_companies);

  // Task 2
  // 2.a
  // Inactive user names from active companies
  let inactive_users = InactiveUsersFromCompanies(users_companies);
    console.log(inactive_users);

  // 2.b
  // Companies salary cost grouped by gender.
  let salary_company = CompaniesSalaryCostGroup(users_companies);
    console.log(salary_company);

  // 2.c
  // Companies name sorted by total salary cost
  let order_companies_by_salary = SortSalaryCost(salary_company);
  console.log(order_companies_by_salary);
};

main();
