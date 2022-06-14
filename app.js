const { getUsers, getCompanies } = require("./helpers/assessment");
const {
  CompaniesAndUsers,
  InactiveUsersFromCompanies,
  CompaniesSalaryCostGroup,
  SortSalaryCost,
} = require("./functions/basics");

const main = async () => {
  const users = await getUsers();
  const companies = await getCompanies();

  // Task 1
  // Function to get companies data filled with users data
  const users_companies = CompaniesAndUsers(companies, users);
    console.log(users_companies);

  // Task 2
  // 2.a
  // Inactive user names from active companies
  const inactive_users = InactiveUsersFromCompanies(users_companies);
    console.log(inactive_users);

  // 2.b
  // Companies salary cost grouped by gender.
  const salary_company = CompaniesSalaryCostGroup(users_companies);
    console.log(salary_company);

  // 2.c
  // Companies name sorted by total salary cost
  const order_companies_by_salary = SortSalaryCost(salary_company);
  console.log(order_companies_by_salary);
};

main();
