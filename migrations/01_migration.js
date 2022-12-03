const Migration = artifacts.require("Demo");

module.exports = function (deployer) {
    deployer.deploy("Migration");
};