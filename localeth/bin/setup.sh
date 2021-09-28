#!/bin/bash

echo setup

npm install -g npm@7.21.1
npm install -g truffle
npm install truffle-contract-size
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-web3 web3
npm add @uniswap/v3-periphery
npm install hardhat-ethernal
npm install -D hardhat-deploy
npm install --save-dev  @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
npm install -g ethereum-checksum-address
npm audit fix
npm audit fix

yarn add --dev hardhat-contract-sizer
yarn run hardhat size-contracts
yard hardhat compile --force
yarn run hardhat size-contracts
cat yarn.lock
yarn install
yarn compile
yarn test

exit
echo "
  Run test with

    // eth blockchain, locally pinned
    % npx hardhat node

    // test out the contract
    % npx hardhat test --network localhost

"

# npm install -g ethernal
# npm install -g jshint
# npm add @uniswap/v3-periphery
# npm install rpc_modules
# npm install remix-ide -g
# npm install @remix-project/remixd
