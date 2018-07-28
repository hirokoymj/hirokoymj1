[
    {
    category: 'Sporting Goods',
    products: [
    {price: '$49.99', stocked: true, name: 'Football'},
    {price: '$9.99', stocked: true, name: 'Baseball'},
    {price: '$29.99', stocked: false, name: 'Basketball'}]
    },
  {category: 'Electronics', products: [
    {price: '$99.99', stocked: true, name: 'iPod Touch'},
    {price: '$399.99', stocked: false, name: 'iPhone 5'},
    {price: '$199.99', stocked: true, name: 'Nexus 7'}
  ]}
]


// const output = technicalContents.filter((element) => element.category === 'js');
// console.log(output);

// const output2 = technicalContents.filter((element) => element.category === 'html');
// console.log(output2);

// const newProducts = PRODUCTS.reduce(function(acc, current, index){
//   //var existing = "";
//   var existing = acc.map(function(value, index){
//     return value.category
//   }).indexOf(current.category);

//   if(existing > -1){
//     acc[existing].products.push(current)
//   }else{
//     var tmp = [];
//     tmp.category = current.category;
//     tmp.products = [];
//     tmp.products.push(current);
//     acc.push(tmp);
//   }
//   return acc;
// }, []);
// console.log(newProducts);