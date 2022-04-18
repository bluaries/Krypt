require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: ' https://eth-ropsten.alchemyapi.io/v2/nFrVleBqq0Uqvf9Q9nz-Z3qMRN7lbuCL',
      accounts: ['89a4d1a531a329ab5b4bdec7f592d9e91232463c2ad0dbbea84e4c5686cd4ad3'],
    },
  },
};