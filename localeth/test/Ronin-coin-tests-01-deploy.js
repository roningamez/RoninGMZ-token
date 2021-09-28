const { expect } = require("chai");

const ofs = require('fs')

describe("Contract", function () {

	const contractName = "Ronin";
	accts = null;
	Token = null;
	supply = null;
	var contractAddress = null;

    beforeEach(async function() {
        // get signers
        [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
        accts = await ethers.getSigners();
    });

	describe("Deployment", function() {
		it("Should create the the contract", async function () {
			const contract = await ethers.getContractFactory(contractName);
			Token = await contract.deploy();
			contractAddress = Token.address
			console.log(contractAddress);
			ofs.writeFile('./contract01.address.txt', contractAddress, err => {
				if (err) { console.error(err); return; } });
		});

    });

	describe("Total supply", function() {
		it("Should assign the total supply of tokens to the owner", async function () {
			supply = await Token.balanceOf(owner.address);
			expect(await Token.totalSupply()).to.equal(supply);
		});
    });

});
