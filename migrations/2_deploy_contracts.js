const PlasmaChainManager = artifacts.require("./PlasmaChainManager");
const minHeapLib = artifacts.require("./MinHeapLib");
const RLP = artifacts.require("./RLP.sol");

module.exports = function(deployer) {
  deployer.deploy(minHeapLib);
  deployer.deploy(RLP);
  deployer.deploy(PlasmaChainManager);
};
