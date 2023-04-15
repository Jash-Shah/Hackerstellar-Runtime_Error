import axios from "axios";

axios.get("http://localhost:8000/").then(result => console.log(result));

let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ2YWliaGF2Z2FtaW5naWQxQGdtYWlsLmNvbSIsImV4cGlyeSI6MTY3ODUxOTg2NC45NjI0OTZ9.MkFwdzlE1_gY_yv8-j5FRowNnj5PS6VM9QCZ35A9Cb0";

const config = {
    headers: { Authorization: `Bearer ${token}` },
};

// const bodyParameters = JSON.parse({
//     name: "Vaibhav patel",
//     email: "vaibhavpatel02892@gmail.com",
//     joinedAt: "2023-03-11T10:13:53.733628",
//     profession: "teacher",
//     password: "abcdefg",
//     gender: true,
// });
axios
    .post(
        "http://localhost:8000/user/login",
        {
            email: "vaibhavgamingid1@gmail.com",
            password: "abcdefg",
        },
        config,
    )
    .then(result => console.log(result.data.data[0]["access token"]));

// above function returns access token

//! Unit test

//! productChain
// let x = await wallet.contract.productCount();
// console.log(x.toNumber());

//! manufactureProduct
// let y = await wallet.contract.manufactureProduct(
//     "0xe5dEecAF155B8E07f2Dd250A338AF66eBb5C81F2",
//     250,
//     "casting",
//     "Product for casting iron",
//     ["abcde.png"],
//     [
//         "0xf28b8B0227332B87798B4fA68cba2ceaA37FFF19",
//         "0xe5dEecAF155B8E07f2Dd250A338AF66eBb5C81F2",
//     ],
//     [false, false],
// );

//! product count increased after addition of product
// let x = await wallet.contract.productCount();
// console.log(x.toNumber());

//! get manufacture details
// Create a transaction object
// let x = await wallet.contract.getProducts_manu(
//     "0x9BAaE6dBcC45219E605Cec67447C9417a756830f",
// );
