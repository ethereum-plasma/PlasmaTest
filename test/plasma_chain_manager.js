const PlasmaChainManager = artifacts.require("./PlasmaChainManager");

contract('PlasmaChainManager', function(accounts) {
  it("should assert true", function(done) {
    var plasmaChainManager = PlasmaChainManager.deployed();
    assert.isTrue(true);
    done();
  });

  it("should set operator true successfully", async () => {
    const plasmaChainManager = await PlasmaChainManager.deployed();
    await plasmaChainManager.setOperator(accounts[0], true);
    assert.isTrue(await plasmaChainManager.operators(accounts[0]));
  });

  it("should set operator false successfully", async () => {
    const plasmaChainManager = await PlasmaChainManager.deployed();
    await plasmaChainManager.setOperator(accounts[0], false);
    assert.isFalse(await plasmaChainManager.operators(accounts[0]));
  });

  it("should deposit successfully", async () => {
    const plasmaChainManager = await PlasmaChainManager.deployed();
    const oldTxCounter = (await plasmaChainManager.txCounter()).toNumber();

    await plasmaChainManager.deposit({value: web3.toWei(1, "ether"), from: accounts[0]});
    const newTxCounter = (await plasmaChainManager.txCounter()).toNumber();
    assert.equal(newTxCounter, oldTxCounter + 1);
  });
});
