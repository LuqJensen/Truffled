pragma solidity ^0.4.23;

contract Banker {
    mapping (address => uint) public balances;

    function deposit(uint amount) public {
        require(amount < 1e60, "Overflow.");
        balances[msg.sender] += amount;
    }

    function withdraw(uint amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance.");
        balances[msg.sender] -= amount;
    }

    function getBalance() public view returns (uint) {
        return balances[msg.sender];
    }

    function echo() public view returns (address) {
        return msg.sender;
    }
}