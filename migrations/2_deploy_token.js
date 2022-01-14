const LittleHorse = artifacts.require("LittleHorse");

module.exports = function(deployer) {
    deployer.deploy(LittleHorse);
};