export const DaiTokenAbi = [
{
  "contractName": "DaiToken",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.6+commit.7338295f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/c/Users/tomil/Documents/GitHub/token-farming/blockchain/contracts/DaiToken.sol\":\"DaiToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/c/Users/tomil/Documents/GitHub/token-farming/blockchain/contracts/DaiToken.sol\":{\"keccak256\":\"0x92a9660bc89bfe76be684bba7b699c71631ced514853c1e94d88d4691be0c9fb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea08904de2724ea8ce0c28c02185ad7ff4403b9235fb5676b595e22a1bc10c4a\",\"dweb:/ipfs/QmZPJPc6kBpDwy5Fv4mLkex8KiB3roJca5BD2RPJ68cRZk\"]}},\"version\":1}",
  "bytecode": "0x60806040526040518060400160405280600e81526020017f4d6f636b2044414920546f6b656e0000000000000000000000000000000000008152506000908051906020019061004f92919061011e565b506040518060400160405280600481526020017f6d444149000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061011e565b5069d3c21bcecceda10000006002556012600360006101000a81548160ff021916908360ff1602179055503480156100d257600080fd5b50600254600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506101c9565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282610154576000855561019b565b82601f1061016d57805160ff191683800117855561019b565b8280016001018555821561019b579182015b8281111561019a57825182559160200191906001019061017f565b5b5090506101a891906101ac565b5090565b5b808211156101c55760008160009055506001016101ad565b5090565b610a75806101d86000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461022157806370a082311461024257806395d89b411461029a578063a9059cbb1461031d578063dd62ed3e1461038157610093565b806306fdde0314610098578063095ea7b31461011b57806318160ddd1461017f57806323b872dd1461019d575b600080fd5b6100a06103f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101676004803603604081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610497565b60405180821515815260200191505060405180910390f35b610187610589565b6040518082815260200191505060405180910390f35b610209600480360360608110156101b357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061058f565b60405180821515815260200191505060405180910390f35b6102296107fa565b604051808260ff16815260200191505060405180910390f35b6102846004803603602081101561025857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061080d565b6040518082815260200191505060405180910390f35b6102a2610825565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102e25780820151818401526020810190506102c7565b50505050905090810190601f16801561030f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103696004803603604081101561033357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108c3565b60405180821515815260200191505060405180910390f35b6103e36004803603604081101561039757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a1a565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561048f5780601f106104645761010080835404028352916020019161048f565b820191906000526020600020905b81548152906001019060200180831161047257829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60025481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156105dd57600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561066657600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600360009054906101000a900460ff1681565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108bb5780601f10610890576101008083540402835291602001916108bb565b820191906000526020600020905b81548152906001019060200180831161089e57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561091157600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600560205281600052604060002060205280600052604060002060009150915050548156fea26469706673582212208ca90ada0cfa9847eac4ecd119c94564c94833a5518ceaa905b38696de2ac2b164736f6c63430007060033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461022157806370a082311461024257806395d89b411461029a578063a9059cbb1461031d578063dd62ed3e1461038157610093565b806306fdde0314610098578063095ea7b31461011b57806318160ddd1461017f57806323b872dd1461019d575b600080fd5b6100a06103f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101676004803603604081101561013157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610497565b60405180821515815260200191505060405180910390f35b610187610589565b6040518082815260200191505060405180910390f35b610209600480360360608110156101b357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061058f565b60405180821515815260200191505060405180910390f35b6102296107fa565b604051808260ff16815260200191505060405180910390f35b6102846004803603602081101561025857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061080d565b6040518082815260200191505060405180910390f35b6102a2610825565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102e25780820151818401526020810190506102c7565b50505050905090810190601f16801561030f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103696004803603604081101561033357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108c3565b60405180821515815260200191505060405180910390f35b6103e36004803603604081101561039757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a1a565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561048f5780601f106104645761010080835404028352916020019161048f565b820191906000526020600020905b81548152906001019060200180831161047257829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60025481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156105dd57600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561066657600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600360009054906101000a900460ff1681565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108bb5780601f10610890576101008083540402835291602001916108bb565b820191906000526020600020905b81548152906001019060200180831161089e57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561091157600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600560205281600052604060002060205280600052604060002060009150915050548156fea26469706673582212208ca90ada0cfa9847eac4ecd119c94564c94833a5518ceaa905b38696de2ac2b164736f6c63430007060033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "60:1579:0:-:0;;;85:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;130:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;196:25;167:54;;274:2;248:28;;;;;;;;;;;;;;;;;;;;649:68;;;;;;;;;;698:11;;674:9;:21;684:10;674:21;;;;;;;;;;;;;;;:35;;;;60:1579;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "60:1579:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;85:38;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1017:216;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;167:54;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1241:395;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;248:28;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;525:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;130:30;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;725:284;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;576:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;85:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1017:216::-;1084:12;1143:6;1109:9;:21;1119:10;1109:21;;;;;;;;;;;;;;;:31;1131:8;1109:31;;;;;;;;;;;;;;;:40;;;;1186:8;1165:38;;1174:10;1165:38;;;1196:6;1165:38;;;;;;;;;;;;;;;;;;1221:4;1214:11;;1017:216;;;;:::o;167:54::-;;;;:::o;1241:395::-;1323:12;1366:9;:16;1376:5;1366:16;;;;;;;;;;;;;;;;1356:6;:26;;1348:35;;;;;;1412:9;:16;1422:5;1412:16;;;;;;;;;;;;;;;:28;1429:10;1412:28;;;;;;;;;;;;;;;;1402:6;:38;;1394:47;;;;;;1472:6;1452:9;:16;1462:5;1452:16;;;;;;;;;;;;;;;;:26;;;;;;;;;;;1507:6;1489:9;:14;1499:3;1489:14;;;;;;;;;;;;;;;;:24;;;;;;;;;;;1556:6;1524:9;:16;1534:5;1524:16;;;;;;;;;;;;;;;:28;1541:10;1524:28;;;;;;;;;;;;;;;;:38;;;;;;;;;;;1594:3;1578:28;;1587:5;1578:28;;;1599:6;1578:28;;;;;;;;;;;;;;;;;;1624:4;1617:11;;1241:395;;;;;:::o;248:28::-;;;;;;;;;;;;;:::o;525:44::-;;;;;;;;;;;;;;;;;:::o;130:30::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;725:284::-;788:12;846:6;821:9;:21;831:10;821:21;;;;;;;;;;;;;;;;:31;;813:40;;;;;;889:6;864:9;:21;874:10;864:21;;;;;;;;;;;;;;;;:31;;;;;;;;;;;924:6;906:9;:14;916:3;906:14;;;;;;;;;;;;;;;;:24;;;;;;;;;;;967:3;946:33;;955:10;946:33;;;972:6;946:33;;;;;;;;;;;;;;;;;;997:4;990:11;;725:284;;;;:::o;576:64::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity >0.7.4;\r\n\r\ncontract DaiToken {\r\n    string  public name = \"Mock DAI Token\";\r\n    string  public symbol = \"mDAI\";\r\n    uint256 public totalSupply = 1000000000000000000000000; // 1 million tokens\r\n    uint8   public decimals = 18;\r\n\r\n    event Transfer(\r\n        address indexed _from,\r\n        address indexed _to,\r\n        uint256 _value\r\n    );\r\n\r\n    event Approval(\r\n        address indexed _owner,\r\n        address indexed _spender,\r\n        uint256 _value\r\n    );\r\n\r\n    mapping(address => uint256) public balanceOf;\r\n    mapping(address => mapping(address => uint256)) public allowance;\r\n\r\n    constructor() {\r\n        balanceOf[msg.sender] = totalSupply;\r\n    }\r\n\r\n    function transfer(address _to, uint256 _value) public returns (bool success) {\r\n        require(balanceOf[msg.sender] >= _value);\r\n        balanceOf[msg.sender] -= _value;\r\n        balanceOf[_to] += _value;\r\n        emit Transfer(msg.sender, _to, _value);\r\n        return true;\r\n    }\r\n\r\n    function approve(address _spender, uint256 _value) public returns (bool success) {\r\n        allowance[msg.sender][_spender] = _value;\r\n        emit Approval(msg.sender, _spender, _value);\r\n        return true;\r\n    }\r\n\r\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {\r\n        require(_value <= balanceOf[_from]);\r\n        require(_value <= allowance[_from][msg.sender]);\r\n        balanceOf[_from] -= _value;\r\n        balanceOf[_to] += _value;\r\n        allowance[_from][msg.sender] -= _value;\r\n        emit Transfer(_from, _to, _value);\r\n        return true;\r\n    }\r\n}",
  "sourcePath": "c:/Users/tomil/Documents/GitHub/token-farming/blockchain/contracts/DaiToken.sol",
  "ast": {
    "absolutePath": "/c/Users/tomil/Documents/GitHub/token-farming/blockchain/contracts/DaiToken.sol",
    "exportedSymbols": {
      "DaiToken": [
        180
      ]
    },
    "id": 181,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">",
          "0.7",
          ".4"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 180,
        "linearizedBaseContracts": [
          180
        ],
        "name": "DaiToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "06fdde03",
            "id": 4,
            "mutability": "mutable",
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 180,
            "src": "85:38:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 2,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "85:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "4d6f636b2044414920546f6b656e",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "107:16:0",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_6d90cba715b117e04c08ba13ca94303f9268ad96badda30ff2a17247cb20acd4",
                "typeString": "literal_string \"Mock DAI Token\""
              },
              "value": "Mock DAI Token"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "95d89b41",
            "id": 7,
            "mutability": "mutable",
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 180,
            "src": "130:30:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "130:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "6d444149",
              "id": 6,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "154:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_3f44f13c76ec4ee5ad23a417aa883a0b3b0a77b84cc11766945e27bcce3e8b39",
                "typeString": "literal_string \"mDAI\""
              },
              "value": "mDAI"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "18160ddd",
            "id": 10,
            "mutability": "mutable",
            "name": "totalSupply",
            "nodeType": "VariableDeclaration",
            "scope": 180,
            "src": "167:54:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 8,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "167:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31303030303030303030303030303030303030303030303030",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "196:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000000000"
              },
              "value": "1000000000000000000000000"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "313ce567",
            "id": 13,
            "mutability": "mutable",
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 180,
            "src": "248:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 11,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "248:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "hexValue": "3138",
              "id": 12,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "274:2:0",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 21,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "310:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "310:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "342:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "372:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "372:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "299:94:0"
            },
            "src": "285:109:0"
          },
          {
            "anonymous": false,
            "id": 29,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "427:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 25,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "460:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "460:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "495:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "495:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "416:100:0"
            },
            "src": "402:115:0"
          },
          {
            "constant": false,
            "functionSelector": "70a08231",
            "id": 33,
            "mutability": "mutable",
            "name": "balanceOf",
            "nodeType": "VariableDeclaration",
            "scope": 180,
            "src": "525:44:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 32,
              "keyType": {
                "id": 30,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "533:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "525:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 31,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "544:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "dd62ed3e",
            "id": 39,
            "mutability": "mutable",
            "name": "allowance",
            "nodeType": "VariableDeclaration",
            "scope": 180,
            "src": "576:64:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 38,
              "keyType": {
                "id": 34,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "584:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "576:47:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 37,
                "keyType": {
                  "id": 35,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "603:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "595:27:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 36,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "614:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 49,
              "nodeType": "Block",
              "src": "663:54:0",
              "statements": [
                {
                  "expression": {
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 42,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "674:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 45,
                      "indexExpression": {
                        "expression": {
                          "id": 43,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "684:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 44,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "684:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "674:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 46,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "698:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "674:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "674:35:0"
                }
              ]
            },
            "id": 50,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "660:2:0"
            },
            "returnParameters": {
              "id": 41,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "663:0:0"
            },
            "scope": 180,
            "src": "649:68:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 90,
              "nodeType": "Block",
              "src": "802:207:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 65,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 60,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33,
                            "src": "821:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 63,
                          "indexExpression": {
                            "expression": {
                              "id": 61,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "831:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "831:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "821:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 64,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54,
                          "src": "846:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "821:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 59,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "813:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 66,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "813:40:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67,
                  "nodeType": "ExpressionStatement",
                  "src": "813:40:0"
                },
                {
                  "expression": {
                    "id": 73,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 68,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "864:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 71,
                      "indexExpression": {
                        "expression": {
                          "id": 69,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "874:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "874:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "864:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 72,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54,
                      "src": "889:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "864:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 74,
                  "nodeType": "ExpressionStatement",
                  "src": "864:31:0"
                },
                {
                  "expression": {
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 75,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "906:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 77,
                      "indexExpression": {
                        "id": 76,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "916:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "906:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 78,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54,
                      "src": "924:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "906:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 80,
                  "nodeType": "ExpressionStatement",
                  "src": "906:24:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 82,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "955:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "955:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "id": 84,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 52,
                        "src": "967:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 85,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "972:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 81,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "946:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "946:33:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 87,
                  "nodeType": "EmitStatement",
                  "src": "941:38:0"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 88,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "997:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 58,
                  "id": 89,
                  "nodeType": "Return",
                  "src": "990:11:0"
                }
              ]
            },
            "functionSelector": "a9059cbb",
            "id": 91,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 55,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 52,
                  "mutability": "mutable",
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 91,
                  "src": "743:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54,
                  "mutability": "mutable",
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 91,
                  "src": "756:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "742:29:0"
            },
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 57,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 91,
                  "src": "788:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 56,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "788:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "787:14:0"
            },
            "scope": 180,
            "src": "725:284:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 118,
              "nodeType": "Block",
              "src": "1098:135:0",
              "statements": [
                {
                  "expression": {
                    "id": 107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 100,
                          "name": "allowance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "1109:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 104,
                        "indexExpression": {
                          "expression": {
                            "id": 101,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1119:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 102,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1119:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1109:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 105,
                      "indexExpression": {
                        "id": 103,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 93,
                        "src": "1131:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1109:31:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 106,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "1143:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1109:40:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 108,
                  "nodeType": "ExpressionStatement",
                  "src": "1109:40:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 110,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1174:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1174:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "id": 112,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 93,
                        "src": "1186:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 113,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "1196:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 109,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 29,
                      "src": "1165:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1165:38:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 115,
                  "nodeType": "EmitStatement",
                  "src": "1160:43:0"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1221:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 99,
                  "id": 117,
                  "nodeType": "Return",
                  "src": "1214:11:0"
                }
              ]
            },
            "functionSelector": "095ea7b3",
            "id": 119,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 96,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "mutability": "mutable",
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "1034:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 92,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1034:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 95,
                  "mutability": "mutable",
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "1052:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 94,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1033:34:0"
            },
            "returnParameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 98,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "1084:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 97,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1084:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1083:14:0"
            },
            "scope": 180,
            "src": "1017:216:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 178,
              "nodeType": "Block",
              "src": "1337:299:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 131,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125,
                          "src": "1356:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "baseExpression": {
                            "id": 132,
                            "name": "balanceOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33,
                            "src": "1366:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 134,
                          "indexExpression": {
                            "id": 133,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 121,
                            "src": "1376:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1366:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1356:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 130,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1348:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1348:35:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "1348:35:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 139,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 125,
                          "src": "1402:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "baseExpression": {
                            "baseExpression": {
                              "id": 140,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 39,
                              "src": "1412:9:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 142,
                            "indexExpression": {
                              "id": 141,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 121,
                              "src": "1422:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1412:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 145,
                          "indexExpression": {
                            "expression": {
                              "id": 143,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1429:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 144,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1429:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1412:28:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1402:38:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 138,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1394:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1394:47:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 148,
                  "nodeType": "ExpressionStatement",
                  "src": "1394:47:0"
                },
                {
                  "expression": {
                    "id": 153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 149,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "1452:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 151,
                      "indexExpression": {
                        "id": 150,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1462:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1452:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 152,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "1472:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1452:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 154,
                  "nodeType": "ExpressionStatement",
                  "src": "1452:26:0"
                },
                {
                  "expression": {
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 155,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "1489:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 157,
                      "indexExpression": {
                        "id": 156,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 123,
                        "src": "1499:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1489:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "id": 158,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "1507:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1489:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 160,
                  "nodeType": "ExpressionStatement",
                  "src": "1489:24:0"
                },
                {
                  "expression": {
                    "id": 168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 161,
                          "name": "allowance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39,
                          "src": "1524:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 165,
                        "indexExpression": {
                          "id": 162,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121,
                          "src": "1534:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1524:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 166,
                      "indexExpression": {
                        "expression": {
                          "id": 163,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1541:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 164,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1541:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1524:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "id": 167,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "1556:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1524:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 169,
                  "nodeType": "ExpressionStatement",
                  "src": "1524:38:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 171,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1587:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 172,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 123,
                        "src": "1594:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 173,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "1599:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 170,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "1578:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1578:28:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 175,
                  "nodeType": "EmitStatement",
                  "src": "1573:33:0"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1624:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 129,
                  "id": 177,
                  "nodeType": "Return",
                  "src": "1617:11:0"
                }
              ]
            },
            "functionSelector": "23b872dd",
            "id": 179,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121,
                  "mutability": "mutable",
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 179,
                  "src": "1263:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 123,
                  "mutability": "mutable",
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 179,
                  "src": "1278:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 122,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1278:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125,
                  "mutability": "mutable",
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 179,
                  "src": "1291:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1291:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1262:44:0"
            },
            "returnParameters": {
              "id": 129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 128,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 179,
                  "src": "1323:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 127,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1323:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1322:14:0"
            },
            "scope": 180,
            "src": "1241:395:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 181,
        "src": "60:1579:0"
      }
    ],
    "src": "33:1606:0"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/c/Users/tomil/Documents/GitHub/token-farming/blockchain/contracts/DaiToken.sol",
      "exportedSymbols": {
        "DaiToken": [
          180
        ]
      },
      "license": "MIT"
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">",
            "0.7",
            ".4"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "attributes": {
          "abstract": false,
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            180
          ],
          "name": "DaiToken",
          "scope": 181
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "functionSelector": "06fdde03",
              "mutability": "mutable",
              "name": "name",
              "scope": 180,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 2,
                "name": "ElementaryTypeName",
                "src": "85:6:0"
              },
              {
                "attributes": {
                  "hexvalue": "4d6f636b2044414920546f6b656e",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "token": "string",
                  "type": "literal_string \"Mock DAI Token\"",
                  "value": "Mock DAI Token"
                },
                "id": 3,
                "name": "Literal",
                "src": "107:16:0"
              }
            ],
            "id": 4,
            "name": "VariableDeclaration",
            "src": "85:38:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "95d89b41",
              "mutability": "mutable",
              "name": "symbol",
              "scope": 180,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 5,
                "name": "ElementaryTypeName",
                "src": "130:6:0"
              },
              {
                "attributes": {
                  "hexvalue": "6d444149",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "token": "string",
                  "type": "literal_string \"mDAI\"",
                  "value": "mDAI"
                },
                "id": 6,
                "name": "Literal",
                "src": "154:6:0"
              }
            ],
            "id": 7,
            "name": "VariableDeclaration",
            "src": "130:30:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "18160ddd",
              "mutability": "mutable",
              "name": "totalSupply",
              "scope": 180,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 8,
                "name": "ElementaryTypeName",
                "src": "167:7:0"
              },
              {
                "attributes": {
                  "hexvalue": "31303030303030303030303030303030303030303030303030",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "token": "number",
                  "type": "int_const 1000000000000000000000000",
                  "value": "1000000000000000000000000"
                },
                "id": 9,
                "name": "Literal",
                "src": "196:25:0"
              }
            ],
            "id": 10,
            "name": "VariableDeclaration",
            "src": "167:54:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "313ce567",
              "mutability": "mutable",
              "name": "decimals",
              "scope": 180,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 11,
                "name": "ElementaryTypeName",
                "src": "248:5:0"
              },
              {
                "attributes": {
                  "hexvalue": "3138",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "token": "number",
                  "type": "int_const 18",
                  "value": "18"
                },
                "id": 12,
                "name": "Literal",
                "src": "274:2:0"
              }
            ],
            "id": 13,
            "name": "VariableDeclaration",
            "src": "248:28:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "mutability": "mutable",
                      "name": "_from",
                      "scope": 21,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 14,
                        "name": "ElementaryTypeName",
                        "src": "310:7:0"
                      }
                    ],
                    "id": 15,
                    "name": "VariableDeclaration",
                    "src": "310:21:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "mutability": "mutable",
                      "name": "_to",
                      "scope": 21,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 16,
                        "name": "ElementaryTypeName",
                        "src": "342:7:0"
                      }
                    ],
                    "id": 17,
                    "name": "VariableDeclaration",
                    "src": "342:19:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "_value",
                      "scope": 21,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 18,
                        "name": "ElementaryTypeName",
                        "src": "372:7:0"
                      }
                    ],
                    "id": 19,
                    "name": "VariableDeclaration",
                    "src": "372:14:0"
                  }
                ],
                "id": 20,
                "name": "ParameterList",
                "src": "299:94:0"
              }
            ],
            "id": 21,
            "name": "EventDefinition",
            "src": "285:109:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "mutability": "mutable",
                      "name": "_owner",
                      "scope": 29,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 22,
                        "name": "ElementaryTypeName",
                        "src": "427:7:0"
                      }
                    ],
                    "id": 23,
                    "name": "VariableDeclaration",
                    "src": "427:22:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "mutability": "mutable",
                      "name": "_spender",
                      "scope": 29,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 24,
                        "name": "ElementaryTypeName",
                        "src": "460:7:0"
                      }
                    ],
                    "id": 25,
                    "name": "VariableDeclaration",
                    "src": "460:24:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "mutability": "mutable",
                      "name": "_value",
                      "scope": 29,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 26,
                        "name": "ElementaryTypeName",
                        "src": "495:7:0"
                      }
                    ],
                    "id": 27,
                    "name": "VariableDeclaration",
                    "src": "495:14:0"
                  }
                ],
                "id": 28,
                "name": "ParameterList",
                "src": "416:100:0"
              }
            ],
            "id": 29,
            "name": "EventDefinition",
            "src": "402:115:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "70a08231",
              "mutability": "mutable",
              "name": "balanceOf",
              "scope": 180,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 30,
                    "name": "ElementaryTypeName",
                    "src": "533:7:0"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 31,
                    "name": "ElementaryTypeName",
                    "src": "544:7:0"
                  }
                ],
                "id": 32,
                "name": "Mapping",
                "src": "525:27:0"
              }
            ],
            "id": 33,
            "name": "VariableDeclaration",
            "src": "525:44:0"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "dd62ed3e",
              "mutability": "mutable",
              "name": "allowance",
              "scope": 180,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => uint256))",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => uint256))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 34,
                    "name": "ElementaryTypeName",
                    "src": "584:7:0"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 35,
                        "name": "ElementaryTypeName",
                        "src": "603:7:0"
                      },
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 36,
                        "name": "ElementaryTypeName",
                        "src": "614:7:0"
                      }
                    ],
                    "id": 37,
                    "name": "Mapping",
                    "src": "595:27:0"
                  }
                ],
                "id": 38,
                "name": "Mapping",
                "src": "576:47:0"
              }
            ],
            "id": 39,
            "name": "VariableDeclaration",
            "src": "576:64:0"
          },
          {
            "attributes": {
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "modifiers": [
                null
              ],
              "name": "",
              "scope": 180,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 40,
                "name": "ParameterList",
                "src": "660:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 41,
                "name": "ParameterList",
                "src": "663:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 33,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 42,
                                "name": "Identifier",
                                "src": "674:9:0"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4294967281,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 43,
                                    "name": "Identifier",
                                    "src": "684:3:0"
                                  }
                                ],
                                "id": 44,
                                "name": "MemberAccess",
                                "src": "684:10:0"
                              }
                            ],
                            "id": 45,
                            "name": "IndexAccess",
                            "src": "674:21:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 46,
                            "name": "Identifier",
                            "src": "698:11:0"
                          }
                        ],
                        "id": 47,
                        "name": "Assignment",
                        "src": "674:35:0"
                      }
                    ],
                    "id": 48,
                    "name": "ExpressionStatement",
                    "src": "674:35:0"
                  }
                ],
                "id": 49,
                "name": "Block",
                "src": "663:54:0"
              }
            ],
            "id": 50,
            "name": "FunctionDefinition",
            "src": "649:68:0"
          },
          {
            "attributes": {
              "functionSelector": "a9059cbb",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transfer",
              "scope": 180,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_to",
                      "scope": 91,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 51,
                        "name": "ElementaryTypeName",
                        "src": "743:7:0"
                      }
                    ],
                    "id": 52,
                    "name": "VariableDeclaration",
                    "src": "743:11:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_value",
                      "scope": 91,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 53,
                        "name": "ElementaryTypeName",
                        "src": "756:7:0"
                      }
                    ],
                    "id": 54,
                    "name": "VariableDeclaration",
                    "src": "756:14:0"
                  }
                ],
                "id": 55,
                "name": "ParameterList",
                "src": "742:29:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "success",
                      "scope": 91,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 56,
                        "name": "ElementaryTypeName",
                        "src": "788:4:0"
                      }
                    ],
                    "id": 57,
                    "name": "VariableDeclaration",
                    "src": "788:12:0"
                  }
                ],
                "id": 58,
                "name": "ParameterList",
                "src": "787:14:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 59,
                            "name": "Identifier",
                            "src": "813:7:0"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 33,
                                      "type": "mapping(address => uint256)",
                                      "value": "balanceOf"
                                    },
                                    "id": 60,
                                    "name": "Identifier",
                                    "src": "821:9:0"
                                  },
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4294967281,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 61,
                                        "name": "Identifier",
                                        "src": "831:3:0"
                                      }
                                    ],
                                    "id": 62,
                                    "name": "MemberAccess",
                                    "src": "831:10:0"
                                  }
                                ],
                                "id": 63,
                                "name": "IndexAccess",
                                "src": "821:21:0"
                              },
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 54,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 64,
                                "name": "Identifier",
                                "src": "846:6:0"
                              }
                            ],
                            "id": 65,
                            "name": "BinaryOperation",
                            "src": "821:31:0"
                          }
                        ],
                        "id": 66,
                        "name": "FunctionCall",
                        "src": "813:40:0"
                      }
                    ],
                    "id": 67,
                    "name": "ExpressionStatement",
                    "src": "813:40:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 33,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 68,
                                "name": "Identifier",
                                "src": "864:9:0"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4294967281,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 69,
                                    "name": "Identifier",
                                    "src": "874:3:0"
                                  }
                                ],
                                "id": 70,
                                "name": "MemberAccess",
                                "src": "874:10:0"
                              }
                            ],
                            "id": 71,
                            "name": "IndexAccess",
                            "src": "864:21:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 54,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 72,
                            "name": "Identifier",
                            "src": "889:6:0"
                          }
                        ],
                        "id": 73,
                        "name": "Assignment",
                        "src": "864:31:0"
                      }
                    ],
                    "id": 74,
                    "name": "ExpressionStatement",
                    "src": "864:31:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 33,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 75,
                                "name": "Identifier",
                                "src": "906:9:0"
                              },
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 52,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 76,
                                "name": "Identifier",
                                "src": "916:3:0"
                              }
                            ],
                            "id": 77,
                            "name": "IndexAccess",
                            "src": "906:14:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 54,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 78,
                            "name": "Identifier",
                            "src": "924:6:0"
                          }
                        ],
                        "id": 79,
                        "name": "Assignment",
                        "src": "906:24:0"
                      }
                    ],
                    "id": 80,
                    "name": "ExpressionStatement",
                    "src": "906:24:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 21,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 81,
                            "name": "Identifier",
                            "src": "946:8:0"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4294967281,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 82,
                                "name": "Identifier",
                                "src": "955:3:0"
                              }
                            ],
                            "id": 83,
                            "name": "MemberAccess",
                            "src": "955:10:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 52,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 84,
                            "name": "Identifier",
                            "src": "967:3:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 54,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 85,
                            "name": "Identifier",
                            "src": "972:6:0"
                          }
                        ],
                        "id": 86,
                        "name": "FunctionCall",
                        "src": "946:33:0"
                      }
                    ],
                    "id": 87,
                    "name": "EmitStatement",
                    "src": "941:38:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 58
                    },
                    "children": [
                      {
                        "attributes": {
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 88,
                        "name": "Literal",
                        "src": "997:4:0"
                      }
                    ],
                    "id": 89,
                    "name": "Return",
                    "src": "990:11:0"
                  }
                ],
                "id": 90,
                "name": "Block",
                "src": "802:207:0"
              }
            ],
            "id": 91,
            "name": "FunctionDefinition",
            "src": "725:284:0"
          },
          {
            "attributes": {
              "functionSelector": "095ea7b3",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "approve",
              "scope": 180,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_spender",
                      "scope": 119,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 92,
                        "name": "ElementaryTypeName",
                        "src": "1034:7:0"
                      }
                    ],
                    "id": 93,
                    "name": "VariableDeclaration",
                    "src": "1034:16:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_value",
                      "scope": 119,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 94,
                        "name": "ElementaryTypeName",
                        "src": "1052:7:0"
                      }
                    ],
                    "id": 95,
                    "name": "VariableDeclaration",
                    "src": "1052:14:0"
                  }
                ],
                "id": 96,
                "name": "ParameterList",
                "src": "1033:34:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "success",
                      "scope": 119,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 97,
                        "name": "ElementaryTypeName",
                        "src": "1084:4:0"
                      }
                    ],
                    "id": 98,
                    "name": "VariableDeclaration",
                    "src": "1084:12:0"
                  }
                ],
                "id": 99,
                "name": "ParameterList",
                "src": "1083:14:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 39,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowance"
                                    },
                                    "id": 100,
                                    "name": "Identifier",
                                    "src": "1109:9:0"
                                  },
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4294967281,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 101,
                                        "name": "Identifier",
                                        "src": "1119:3:0"
                                      }
                                    ],
                                    "id": 102,
                                    "name": "MemberAccess",
                                    "src": "1119:10:0"
                                  }
                                ],
                                "id": 104,
                                "name": "IndexAccess",
                                "src": "1109:21:0"
                              },
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 93,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 103,
                                "name": "Identifier",
                                "src": "1131:8:0"
                              }
                            ],
                            "id": 105,
                            "name": "IndexAccess",
                            "src": "1109:31:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 95,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 106,
                            "name": "Identifier",
                            "src": "1143:6:0"
                          }
                        ],
                        "id": 107,
                        "name": "Assignment",
                        "src": "1109:40:0"
                      }
                    ],
                    "id": 108,
                    "name": "ExpressionStatement",
                    "src": "1109:40:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 29,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 109,
                            "name": "Identifier",
                            "src": "1165:8:0"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4294967281,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 110,
                                "name": "Identifier",
                                "src": "1174:3:0"
                              }
                            ],
                            "id": 111,
                            "name": "MemberAccess",
                            "src": "1174:10:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 93,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 112,
                            "name": "Identifier",
                            "src": "1186:8:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 95,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 113,
                            "name": "Identifier",
                            "src": "1196:6:0"
                          }
                        ],
                        "id": 114,
                        "name": "FunctionCall",
                        "src": "1165:38:0"
                      }
                    ],
                    "id": 115,
                    "name": "EmitStatement",
                    "src": "1160:43:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 99
                    },
                    "children": [
                      {
                        "attributes": {
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 116,
                        "name": "Literal",
                        "src": "1221:4:0"
                      }
                    ],
                    "id": 117,
                    "name": "Return",
                    "src": "1214:11:0"
                  }
                ],
                "id": 118,
                "name": "Block",
                "src": "1098:135:0"
              }
            ],
            "id": 119,
            "name": "FunctionDefinition",
            "src": "1017:216:0"
          },
          {
            "attributes": {
              "functionSelector": "23b872dd",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "scope": 180,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_from",
                      "scope": 179,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 120,
                        "name": "ElementaryTypeName",
                        "src": "1263:7:0"
                      }
                    ],
                    "id": 121,
                    "name": "VariableDeclaration",
                    "src": "1263:13:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_to",
                      "scope": 179,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 122,
                        "name": "ElementaryTypeName",
                        "src": "1278:7:0"
                      }
                    ],
                    "id": 123,
                    "name": "VariableDeclaration",
                    "src": "1278:11:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_value",
                      "scope": 179,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 124,
                        "name": "ElementaryTypeName",
                        "src": "1291:7:0"
                      }
                    ],
                    "id": 125,
                    "name": "VariableDeclaration",
                    "src": "1291:14:0"
                  }
                ],
                "id": 126,
                "name": "ParameterList",
                "src": "1262:44:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "success",
                      "scope": 179,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 127,
                        "name": "ElementaryTypeName",
                        "src": "1323:4:0"
                      }
                    ],
                    "id": 128,
                    "name": "VariableDeclaration",
                    "src": "1323:12:0"
                  }
                ],
                "id": 129,
                "name": "ParameterList",
                "src": "1322:14:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 130,
                            "name": "Identifier",
                            "src": "1348:7:0"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 125,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 131,
                                "name": "Identifier",
                                "src": "1356:6:0"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 33,
                                      "type": "mapping(address => uint256)",
                                      "value": "balanceOf"
                                    },
                                    "id": 132,
                                    "name": "Identifier",
                                    "src": "1366:9:0"
                                  },
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 121,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 133,
                                    "name": "Identifier",
                                    "src": "1376:5:0"
                                  }
                                ],
                                "id": 134,
                                "name": "IndexAccess",
                                "src": "1366:16:0"
                              }
                            ],
                            "id": 135,
                            "name": "BinaryOperation",
                            "src": "1356:26:0"
                          }
                        ],
                        "id": 136,
                        "name": "FunctionCall",
                        "src": "1348:35:0"
                      }
                    ],
                    "id": 137,
                    "name": "ExpressionStatement",
                    "src": "1348:35:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 138,
                            "name": "Identifier",
                            "src": "1394:7:0"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 125,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 139,
                                "name": "Identifier",
                                "src": "1402:6:0"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "mapping(address => uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 39,
                                          "type": "mapping(address => mapping(address => uint256))",
                                          "value": "allowance"
                                        },
                                        "id": 140,
                                        "name": "Identifier",
                                        "src": "1412:9:0"
                                      },
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 121,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 141,
                                        "name": "Identifier",
                                        "src": "1422:5:0"
                                      }
                                    ],
                                    "id": 142,
                                    "name": "IndexAccess",
                                    "src": "1412:16:0"
                                  },
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "type": "address payable"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 4294967281,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 143,
                                        "name": "Identifier",
                                        "src": "1429:3:0"
                                      }
                                    ],
                                    "id": 144,
                                    "name": "MemberAccess",
                                    "src": "1429:10:0"
                                  }
                                ],
                                "id": 145,
                                "name": "IndexAccess",
                                "src": "1412:28:0"
                              }
                            ],
                            "id": 146,
                            "name": "BinaryOperation",
                            "src": "1402:38:0"
                          }
                        ],
                        "id": 147,
                        "name": "FunctionCall",
                        "src": "1394:47:0"
                      }
                    ],
                    "id": 148,
                    "name": "ExpressionStatement",
                    "src": "1394:47:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 33,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 149,
                                "name": "Identifier",
                                "src": "1452:9:0"
                              },
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 121,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 150,
                                "name": "Identifier",
                                "src": "1462:5:0"
                              }
                            ],
                            "id": 151,
                            "name": "IndexAccess",
                            "src": "1452:16:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 125,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 152,
                            "name": "Identifier",
                            "src": "1472:6:0"
                          }
                        ],
                        "id": 153,
                        "name": "Assignment",
                        "src": "1452:26:0"
                      }
                    ],
                    "id": 154,
                    "name": "ExpressionStatement",
                    "src": "1452:26:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 33,
                                  "type": "mapping(address => uint256)",
                                  "value": "balanceOf"
                                },
                                "id": 155,
                                "name": "Identifier",
                                "src": "1489:9:0"
                              },
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 123,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 156,
                                "name": "Identifier",
                                "src": "1499:3:0"
                              }
                            ],
                            "id": 157,
                            "name": "IndexAccess",
                            "src": "1489:14:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 125,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 158,
                            "name": "Identifier",
                            "src": "1507:6:0"
                          }
                        ],
                        "id": 159,
                        "name": "Assignment",
                        "src": "1489:24:0"
                      }
                    ],
                    "id": 160,
                    "name": "ExpressionStatement",
                    "src": "1489:24:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 39,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowance"
                                    },
                                    "id": 161,
                                    "name": "Identifier",
                                    "src": "1524:9:0"
                                  },
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 121,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 162,
                                    "name": "Identifier",
                                    "src": "1534:5:0"
                                  }
                                ],
                                "id": 165,
                                "name": "IndexAccess",
                                "src": "1524:16:0"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4294967281,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 163,
                                    "name": "Identifier",
                                    "src": "1541:3:0"
                                  }
                                ],
                                "id": 164,
                                "name": "MemberAccess",
                                "src": "1541:10:0"
                              }
                            ],
                            "id": 166,
                            "name": "IndexAccess",
                            "src": "1524:28:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 125,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 167,
                            "name": "Identifier",
                            "src": "1556:6:0"
                          }
                        ],
                        "id": 168,
                        "name": "Assignment",
                        "src": "1524:38:0"
                      }
                    ],
                    "id": 169,
                    "name": "ExpressionStatement",
                    "src": "1524:38:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 21,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 170,
                            "name": "Identifier",
                            "src": "1578:8:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 121,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 171,
                            "name": "Identifier",
                            "src": "1587:5:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 123,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 172,
                            "name": "Identifier",
                            "src": "1594:3:0"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 125,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 173,
                            "name": "Identifier",
                            "src": "1599:6:0"
                          }
                        ],
                        "id": 174,
                        "name": "FunctionCall",
                        "src": "1578:28:0"
                      }
                    ],
                    "id": 175,
                    "name": "EmitStatement",
                    "src": "1573:33:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 129
                    },
                    "children": [
                      {
                        "attributes": {
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 176,
                        "name": "Literal",
                        "src": "1624:4:0"
                      }
                    ],
                    "id": 177,
                    "name": "Return",
                    "src": "1617:11:0"
                  }
                ],
                "id": 178,
                "name": "Block",
                "src": "1337:299:0"
              }
            ],
            "id": 179,
            "name": "FunctionDefinition",
            "src": "1241:395:0"
          }
        ],
        "id": 180,
        "name": "ContractDefinition",
        "src": "60:1579:0"
      }
    ],
    "id": 181,
    "name": "SourceUnit",
    "src": "33:1606:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.6+commit.7338295f.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xCb3b3DD997e51ef57875AA6d3384272209e6f4e5",
      "transactionHash": "0x99eb20d7a44f47d890143856f6728c76f6a5b453724d3305fd7628f697b16dfa"
    }
  },
  "schemaVersion": "3.4.1",
  "updatedAt": "2021-07-16T18:11:47.431Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
]