var Banker = artifacts.require("./banker.sol");

contract("Banker", function(accounts) {
    web3.eth.defaultAccount = accounts[0];

    it("Should deposit 10 to the balance of the sender", async () => {
        let meta = await Banker.deployed();
        let transaction = await meta.deposit(10);
        assert.notEqual(transaction, [], "Deposit yielded no transaction hash");
    });
    
    it("Should deposit and withdraw 10 to the balance of the sender", async () => {
        let meta = await Banker.deployed();
        let deposit = await meta.deposit(10);
        let transaction = await meta.withdraw(10);
        assert.notEqual(transaction, [], "Withdraw yielded no transaction hash");
    });

    it("Balance should be higher after depositing", async() => {
        let meta = await Banker.deployed();
        let balance1 = await meta.getBalance.call();
        let deposit = await meta.deposit(10);
        let balance2 = await meta.getBalance.call();
        assert.equal(balance1.toNumber() + 10, balance2.toNumber());
    });
});