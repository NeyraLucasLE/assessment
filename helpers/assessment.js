const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Antonio",
          gender: "male",
          status: "active",
          salary: 1000,
        },
        {
          id: 2,
          name: "Rosa",
          gender: "female",
          status: "active",
          salary: 1000,
        },
        {
          id: 3,
          name: "Joseph",
          gender: "male",
          status: "inactive",
          salary: 2000,
        },
        {
          id: 4,
          name: "Lisa",
          gender: "female",
          status: "active",
          salary: 2000,
        },
        {
          id: 5,
          name: "Gwen",
          gender: "female",
          status: "inactive",
          salary: 3000,
        },
        {
          id: 6,
          name: "Antonio",
          gender: "male",
          status: "inactive",
          salary: 3000,
        },
      ]);
    }, 1000);
  });
};

const getCompanies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Disney", employees: [1, 3], status: "inactive" },
        { id: 2, name: "Nestle", employees: [4], status: "active" },
        { id: 3, name: "Microsoft", employees: [2, 5, 6], status: "active" },
      ]);
    }, 3000);
  });
};

//export functions
module.exports = {
    getUsers,
    getCompanies,
};

// 1 - Based on the functions above, we need a function to get companies data filled with users data
//     response example:
//         [
//             { id: 1...
//             {
//                 id: 2,
//                 name: Nestle,
//                 employees: [
//                     {
//                         id: 4,
//                         name: 'Lisa',
//                         gender: 'female',
//                         status: 'active',
//                         salary: 2000
//                     }
//                 ],
//                 status: 'active'
//             }
//             { id: 3...
//         ]

// 2 - For the next conditions create different functions to get: (you can use the function created before inside this functions if you want)
//     2a- Inactive user names from active companies.
//         expected response:
//             ['Gwen', 'Antonio']

//     2b- Companies salary cost grouped by gender.
//         expected response:
//             [
//                 {
//                     name: 'Disney',
//                     male: 3000,
//                     female: 0
//                 },
//                 {
//                     name: 'Nestle',
//                     male: 0,
//                     female: 2000
//                 },
//                 {
//                     name: 'Microsoft',
//                     male: 3000,
//                     female: 4000
//                 }
//             ]

//     2c- Companies name sorted by total salary cost.
//         expected response:
//             ['Microsoft', 'Disney', 'Nestle'] or ['Nestle', 'Disney', 'Microsoft']. both are valid
