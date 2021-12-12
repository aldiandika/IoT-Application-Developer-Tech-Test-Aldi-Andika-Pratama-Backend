
const axios = require("axios");
const salaryData = require("../__mocks__/salary_data");

// Generate user data and salry conversion database
exports.salaryData = (req, res) => {
  const endpoint_1 = axios.get(`http://jsonplaceholder.typicode.com/users`);
  const endpoint_2 = axios.get(`https://free.currconv.com/api/v7/convert?q=USD_IDR,IDR_USD&compact=ultra&apiKey=cc3c98ffa806079aa062`);


  axios.all([
    endpoint_1,
    endpoint_2
  ]).then(
    axios.spread((...response) => {

      // Get Data
      const userData = response[0].data;
      const currencyConvert = response[1].data;
      let newSalaryList = [];

      // Convert salary
      for (let i = 0; i < salaryData.length; i++) {
        for (let k = 0; k < userData.length; k++) {
          if (userData[k].id == salaryData[i].id) {
            let salaryInUSD = salaryData[i].salaryInIDR * currencyConvert.IDR_USD;

            // Create new user data object
            const newSalaryObj = {
              id: salaryData[i].id,
              name: userData[k].name,
              username: userData[k].username,
              email: userData[k].email,
              address: userData[k].address,
              phone: userData[k].phone,
              salaryInIDR: salaryData[i].salaryInIDR,
              salaryInUSD: salaryInUSD
            }

            newSalaryList.push(newSalaryObj);

          }
        }
      }

      res.status(200).send(
        {
          newSalaryList
        }
      )
    })
  ).catch(
    err => {
      console.log(err)
    }
  )


}
