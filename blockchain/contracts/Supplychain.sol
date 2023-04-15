// SPDX-License-Identifier: GPL-3.0

/* 
    author: Vaibhav Patel,
    date: 12/3/2023
*/

pragma solidity >=0.5.0 <0.9.0;

// ============ Licence and version declaration

// ================================ Main COntract
contract SupplyChain {
    // ============================================ States and structures

    // creating two mapping, products is used for storing product information as mapping and chains is used to store tha chain of a product
    mapping(uint256 => Chain[]) public chains;
    mapping(uint256 => Product) public products;

    // structure for creating array of chain structures, so as to get status of the product
    struct Chain {
        address _addressOfChainMember;
        bool signed;
    }

    // structure that stores the data of product
    struct Product {
        uint256 productId;
        address manufacturer;
        address customer;
        uint64 price;
        string productName;
        string productDescription;
        string[] productImages;
        uint256 dateManufactured;
        uint256 dateReceived;
        bool reachedClient;
    }

    uint256 public productCount = 10000001; // setting the initial product id to be used, it will be incremented

    // ============================================ Events

    event ProductManufactured(uint256 productId, address manufacturer);
    // event emitted when manufacturer adds the product

    event ProductSignedByRetailer(uint256 productId, address retailer);
    // called whenever Retailer signs the product

    event ProductReceived(uint256 productId, address customer);
    // called when product is recieved by customer

    event ProductDefective(uint256 productId, address manufacturer);

    // called when product is recieved by customer and product is found defective

    // ============================================= Manufacturer

    // function for paying eth
    function payEther() public payable{

    }

    // below function will be used to initiate a chain
    function manufactureProduct(
        string memory _productName,
        string memory _productDescription,
        string[] memory _productImages,
        address[] memory _addresses,
        bool[] memory _signed
    ) public {
        productCount++;
        products[productCount] = Product(
            productCount,
            msg.sender,
            address(0),
            0,
            _productName,
            _productDescription,
            _productImages,
            block.timestamp,
            0,
            false
        );

        createProductChain(productCount, _addresses, _signed); // creating the chain

        emit ProductManufactured(productCount, msg.sender);
    }

    // below function will be used to create the chain of the object inside the manufacturproduct
    function createProductChain(
        uint256 _pid,
        address[] memory _addresses,
        bool[] memory _signed
    ) public {
        uint256 l = _addresses.length;
        for (uint256 i = 0; i < l; i++) {
            Chain memory ch;
            ch._addressOfChainMember = _addresses[i];
            ch.signed = _signed[i];
            chains[_pid].push(ch);
        }
    }

    // function to get ids of all the products where manufacturer address matches
    function getProducts_manu(address _manu)
        public
        view
        returns (uint256[1000] memory, uint256)
    {
        uint256 size = productCount;

        uint256[1000] memory ps;
        uint256 index = 0;

        for (uint256 i = 0; i < size; i++) {
            if (products[i].manufacturer == _manu) {
                ps[index] = i;
                index++;
            }
        }
        return (ps, index); // also returning the index for iteration
    }

    // product details available to manufracturer by using productid
    function getProductDetails_manu(uint256 _productId)
        public
        view
        returns (
            uint64,
            address,
            string[] memory,
            string memory,
            string memory,
            bool,
            uint256
        )
    {
        return (
            products[_productId].price,
            products[_productId].customer,
            products[_productId].productImages,
            products[_productId].productName,
            products[_productId].productDescription,
            products[_productId].reachedClient,
            products[_productId].dateReceived
        );
    }

    // ============================================= Retailers

    // below function will be used by retailer to sign the product by retailer
    function signProduct(uint256 productId) public returns (bool) {
        uint256 size = chains[productId].length;
        uint256 lastIndex;

        for (uint256 i = 0; i < size; i++) {
            if (chains[productId][i].signed == false) {
                lastIndex = i;
                break;
            }
        }

        address lastaddress = chains[productId][lastIndex]
            ._addressOfChainMember;

        if (address(msg.sender) == lastaddress) {
            chains[productId][lastIndex].signed = true;
            emit ProductSignedByRetailer(productId, address(msg.sender));
            return true;
        } else {
            return false;
        }
    }

    // function to get only ids of products that has to be verified by the retailer, will represent this on client side
    function getProducts_retail()
        public
        view
        returns (uint256[1000] memory, uint256)
    {
        uint256 size = productCount;

        // using a iterative approach
        uint256[1000] memory ps;
        uint256 index = 0;

        for (uint256 i = 0; i < size; i++) {
            uint256 chainsize = chains[i].length;
            for (uint256 j = 0; j < chainsize; j++) {
                address a = chains[i][j]._addressOfChainMember;
                if (a == address(msg.sender)) {
                    ps[index] = i;
                    index++;
                }
            }
        }
        return (ps, index);
    }

    // ============================================= Customers

    // function to sign the product by user
    function signProduct_customer(uint256 productId, bool defective)
        public
        returns (bool)
    {
        uint256 size = chains[productId].length;
        uint256 lastIndex;

        for (uint256 i = 0; i < size; i++) {
            if (chains[productId][i].signed == false) {
                lastIndex = i;
                break;
            }
        }

        address lastaddress = chains[productId][lastIndex]
            ._addressOfChainMember;

        if (address(msg.sender) == lastaddress) {
            chains[productId][lastIndex].signed = true;
            products[productId].reachedClient = true;
            products[productId].dateReceived = block.timestamp;

            emit ProductReceived(productId, address(msg.sender));

            if (defective) {
                emit ProductDefective(
                    productId,
                    products[productId].manufacturer
                );
            }
            return true;
        } else {
            return false;
        }
    }

    // function to get all the products which are going to be delievered to customer
    function getProducts_customer()
        public
        view
        returns (uint256[1000] memory, uint256)
    {
        uint256 size = productCount;

        uint256[1000] memory ps;
        uint256 index = 0;

        for (uint256 i = 0; i < size; i++) {
            if (products[i].customer == address(msg.sender)) {
                ps[index] = i;
                index++;
            }
        }
        return (ps, index);
    }

    // getting the details of individual product, user will have the access of all details, whereas retailers won't
    function getProductDetails_customer(uint256 _productId)
        public
        view
        returns (
            uint256,
            address,
            uint64,
            string[] memory,
            uint256,
            string memory
        )
    {
        return (
            products[_productId].productId,
            products[_productId].manufacturer,
            products[_productId].price,
            products[_productId].productImages,
            products[_productId].dateManufactured,
            products[_productId].productName
        );
    }
}
