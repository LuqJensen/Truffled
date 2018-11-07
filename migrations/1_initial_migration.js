var Migrations = artifacts.require("./Banker.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
