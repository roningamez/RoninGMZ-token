const { expect } = require("chai");

const ofs = require('fs')

describe("Contract", function () {

	const contractName = "Ronin";
	Token = null;
	supply = null;
	accts = null;
	decimals = 18;
	contractAddress = null;

	// Functions ///////////////////////////////////////////////
    async function getVar(func_get, func_get_name, val) {
		val_read = await func_get();
		console.log("\tReading back: " + func_get_name + " and got " + val_read);
		//expect(val).to.equal(val_read);
	}

    async function setgetVar(func_set, func_set_name, func_get, func_get_name, val) {
		// Fee Set: corporateFee
		await func_set(val);
		val_read = await func_get();
		console.log("\t" + func_set_name + " set value to " + val + 
			"\n\tReading back: " + func_get_name + " and got " + val_read);
		expect(val).to.equal(val_read);
	}

	async function balance(acct) {
		bal = await Token.balanceOf(acct);
		return bal;
	}

	async function printBalance(acct) {
		bal = await Token.balanceOf(acct);
		console.log("\tacct balance " + acct + ": " + bal);
		return bal
	}

	async function printBalances(accts) {
		await printBalance(owner.address);
		await printBalance(addr1.address);
		await printBalance(addr2.address);
		await printBalance(addr3.address);
		await printBalance(addr4.address);
		await printBalance(addr5.address);
	}

	async function printLastSellInfo(acct) {
		t = await Token.lastSellTime(acct);
		b = await Token.lastSellTimeBalance(acct);
		B = b/10**decimals;
		console.log("\tLast sell time+balance: " + acct + ": " + t + " " + B.toLocaleString());
	}

	async function printLastSellInfos() {
		await printLastSellInfo(owner.address);
		await printLastSellInfo(addr1.address);
		await printLastSellInfo(addr2.address);
		await printLastSellInfo(addr3.address);
		await printLastSellInfo(addr4.address);
		await printLastSellInfo(addr5.address);
	}

	async function Wait(d) {
		await setTimeout(() => { console.log("Delay: "+ d); }, d);
	}
	// End Functions ///////////////////////////////////////////

	// Boilerplate setup ///////////////////////////////////////
	beforeEach(async function() {
		// get signers
		[owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
	});

	describe("Read the contract address", function() {
		it("Should read the contract address from file", async function () {
			ofs.readFile('contract01.address.txt', 
				'utf8', (err, data) => {
				if (err) { console.error(err); return };
				contractAddress = data;
			});
			console.log("Read address: " + contractAddress);
		});
	});

	describe("Attach to contract", function() {
		it("Should attach to the contract", async function () {
			const contract = await ethers.getContractFactory(contractName);
			Token = await contract.attach(contractAddress);
		});
    });

	// End Boilerplate setup ///////////////////////////////////

	describe("Total supply", function() {
		it("Should assign the total supply of tokens to the owner", async function () {
			supply = await Token.balanceOf(owner.address);
			supply_n = supply / 10**decimals
			expect(await Token.totalSupply()).to.equal(supply);
			console.log("\tTotal supply: " + supply +
				"\n\tWithout decimals: " + supply_n.toLocaleString());
		});
    });

	describe("Set Variables", function() {
		it("Wait", async function() {
			res = await Wait(10000);
		});

		it("Should get current marketingFee", async function() {
			res = await getVar(Token.marketingFee,
				'Token.marketingFee', 10);
		});

		it("Should set TotalHoldingsToExempt", async function() {
			res = await setgetVar(
				Token.setTotalHoldingsToExempt,
				'Token.setTotalHoldingsToExempt',
				Token.totalHoldingsToExempt,
				'Token.totalHoldingsToExempt',
				5
			);
		});

		it("Should set sellDelay", async function() {
			res = await setgetVar(
				Token.setSellDelay,
				'Token.setSellDelay',
				Token.sellDelay,
				'Token.sellDelay',
				1
			);
		});

    });

});
