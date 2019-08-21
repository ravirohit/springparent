var itemToPrint=[{},{}];
var customerId="";
function printfunc(item,customer,totalCost) {
    itemToPrint = itemToPrint.slice(0,itemToPrint.length - 2);
    console.log('++++++++++++++++++++++');
  itemToPrint.push(item);
  if(customer != null ){
      customerId = "Invoice of Customer: " + customer;
  }
  else {
    customerId = "Invoice of Customer";
  }
  itemToPrint.push({name:'-',quantity:'-',rate:'-',cost:'-'});
  itemToPrint.push({name:'Total Cost',quantity:'',rate:'',cost:totalCost});
}

;
//# sourceMappingURL=scripts.js.map