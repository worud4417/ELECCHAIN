pragma solidity ^0.5.10;

contract elecstation{
    
    event noticeCustomer(string _ID,uint _BALANCE);
    event noticeProducer(string _ID,uint _RATE);
    
    struct Customer{
        string ID;
        uint BALANCE;
        uint HASH;
    }
    
    struct Producer{
        string ID;
        uint RATE;
        uint HASH;
    }
    
    Customer[] internal customers;
    mapping (string=>uint) customerMapping;
    
    Producer[] internal producers;
    mapping (string => uint) producerMapping;
    
    function setCustomer(string memory _ID, uint _BALANCE) public{
        
        require(customerMapping[_ID] == 0);
        
        uint term = _getHash(_ID,_BALANCE);
        uint number = customers.push(Customer(_ID,_BALANCE,term));
        customerMapping[_ID] = number;
        emit noticeCustomer(_ID,_BALANCE);
    }
    
    function updateCustomer(string memory _ID,uint _OLDBALANCE,uint _NEWBALANCE) public{
        uint term = _getHash(_ID,_OLDBALANCE);
        uint term1 = customers[customerMapping[_ID]-1].HASH;
        
        require(term == term1);
        
        uint newTerm = _getHash(_ID,_NEWBALANCE);
        customers[customerMapping[_ID]-1].BALANCE = _NEWBALANCE;
        customers[customerMapping[_ID]-1].HASH = newTerm;
    }
    
    function setProducer(string memory _ID, uint _RATE) public {
        
        require(producerMapping[_ID] ==0);
        
        uint term = _getHash(_ID,_RATE);
        uint number = producers.push(Producer(_ID,_RATE,term));
        producerMapping[_ID] = number;
    }
    
    function checkProducer(string memory _ID, uint _RATE) public view{
        uint term = _getHash(_ID,_RATE);
        uint term1 = producers[producerMapping[_ID]-1].HASH;
        
        require(term == term1);
    }
    
    function updateProducer(string memory _ID,uint _OLDRATE, uint _NEWRATE) public {
        checkProducer(_ID,_OLDRATE);
        producers[producerMapping[_ID]-1].RATE = _NEWRATE;
        producers[producerMapping[_ID]-1].HASH = _getHash(_ID,_NEWRATE);
    }
    
    function _getHash(string memory _ID,uint _VALUE) private pure returns(uint){
        return uint(keccak256(abi.encodePacked(uint(keccak256(abi.encodePacked(_ID)))+uint(keccak256(abi.encodePacked(_VALUE))))));
    }
}