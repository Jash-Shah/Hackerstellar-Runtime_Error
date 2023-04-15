export const CONTRACT_ADDRESS = "0xD8D3cB0d58eD075701f9EF68636952cD9053eaad";

export const CONTRACT_ABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "productId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "manufacturer",
                type: "address",
            },
        ],
        name: "ProductDefective",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "productId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "manufacturer",
                type: "address",
            },
        ],
        name: "ProductManufactured",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "productId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "customer",
                type: "address",
            },
        ],
        name: "ProductReceived",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "productId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "retailer",
                type: "address",
            },
        ],
        name: "ProductSignedByRetailer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "chains",
        outputs: [
            {
                internalType: "address",
                name: "_addressOfChainMember",
                type: "address",
            },
            {
                internalType: "bool",
                name: "signed",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "address[]",
                name: "_addresses",
                type: "address[]",
            },
            {
                internalType: "bool[]",
                name: "_signed",
                type: "bool[]",
            },
        ],
        name: "createProductChain",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_productId",
                type: "uint256",
            },
        ],
        name: "getProductDetails_customer",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_productId",
                type: "uint256",
            },
        ],
        name: "getProductDetails_manu",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getProducts_customer",
        outputs: [
            {
                internalType: "uint256[100]",
                name: "",
                type: "uint256[100]",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_manu",
                type: "address",
            },
        ],
        name: "getProducts_manu",
        outputs: [
            {
                internalType: "uint256[100]",
                name: "",
                type: "uint256[100]",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getProducts_retail",
        outputs: [
            {
                internalType: "uint256[100]",
                name: "",
                type: "uint256[100]",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "customer",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "price",
                type: "uint64",
            },
            {
                internalType: "string",
                name: "_productName",
                type: "string",
            },
            {
                internalType: "string",
                name: "_productDescription",
                type: "string",
            },
            {
                internalType: "string[]",
                name: "_productImages",
                type: "string[]",
            },
            {
                internalType: "address[]",
                name: "_addresses",
                type: "address[]",
            },
            {
                internalType: "bool[]",
                name: "_signed",
                type: "bool[]",
            },
        ],
        name: "manufactureProduct",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "payEther",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "productCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "products",
        outputs: [
            {
                internalType: "uint256",
                name: "productId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "manufacturer",
                type: "address",
            },
            {
                internalType: "address",
                name: "customer",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "price",
                type: "uint64",
            },
            {
                internalType: "string",
                name: "productName",
                type: "string",
            },
            {
                internalType: "string",
                name: "productDescription",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "dateManufactured",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "dateReceived",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "reachedClient",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "productId",
                type: "uint256",
            },
        ],
        name: "signProduct",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "productId",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "defective",
                type: "bool",
            },
        ],
        name: "signProduct_customer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
