 #!/bin/bash
 txn=$1
 curl -s -X POST --data "{\"jsonrpc\":\"2.0\",\"method\":\"eth_getTransactionByHash\",\"params\":[\"$1\"],\"id\":1}" http://localhost:8545 | jq
