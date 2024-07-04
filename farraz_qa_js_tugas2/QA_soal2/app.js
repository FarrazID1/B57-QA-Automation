//Tugas Pekanan 2 - Javascript
//Nama : Farraz Sarmento Salim

const userData = require('./userData.js');
const productData = require('./productData.js');

const cashier = userData.DEFINED_USER_DATA.username;
console.log('// Cashier Name : ', cashier); //Cashier Name : farraz sarmento

console.log('// Product Name : ', productData.data[0].productName); //FloBrand-DressBSPink
console.log('- Data fetching => ', productData.message); //Data fetching =>  Success

//accessing JSON data (inside array)
const dataX = productData.data;

const qtyX = dataX.map((item) => item.quantity);
// console.log('qtyList => ', qtyX); //qtyList =>  [76, 71, 10]
// const qtyList = qtyX.forEach((item) => console.log(item)); //76, 71, 81

console.log('- Qty Storages (Length) => ', qtyX.length); //Qty Length :>>  3

let qtySum = 0;
for (let i = 0; i < qtyX.length; i++) {
  qtySum += qtyX[i];
}
console.log('- Qty Product (in all storages) => ', qtySum); //Qty Sum => 157
