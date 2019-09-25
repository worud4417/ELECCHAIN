var Web3 = require("web3");
var web3 = new Web3(Web3.providers.HttpProvider("http://localhost:7545"));

var address = "0x4836596A62391e3b9373FA2Ff0c8cE1E040df824";
var abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_ID",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_BALANCE",
          "type": "uint256"
        }
      ],
      "name": "noticeCustomer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_ID",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_RATE",
          "type": "uint256"
        }
      ],
      "name": "noticeProducer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ID",
          "type": "string"
        },
        {
          "name": "_BALANCE",
          "type": "uint256"
        }
      ],
      "name": "setCustomer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ID",
          "type": "string"
        },
        {
          "name": "_OLDBALANCE",
          "type": "uint256"
        },
        {
          "name": "_NEWBALANCE",
          "type": "uint256"
        }
      ],
      "name": "updateCustomer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ID",
          "type": "string"
        },
        {
          "name": "_RATE",
          "type": "uint256"
        }
      ],
      "name": "setProducer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_ID",
          "type": "string"
        },
        {
          "name": "_RATE",
          "type": "uint256"
        }
      ],
      "name": "checkProducer",
      "outputs": [],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ID",
          "type": "string"
        },
        {
          "name": "_OLDRATE",
          "type": "uint256"
        },
        {
          "name": "_NEWRATE",
          "type": "uint256"
        }
      ],
      "name": "updateProducer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

var instance = new web3.eth.Contract(abi,address);

module.exports = instance;

//작업중 여기서 컨트렉트의 함수 별로 각각 처리해서 제공할 예정
//ex) 