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
  itemToPrint.push({id:'-',name:'-',quantity:'-',rate:'-',cost:'-'});
  itemToPrint.push({id:'',name:'Total Cost',quantity:'',rate:'',cost:totalCost});
}
function removeItemFromPrintList(id, totalCost){
    console.log("id:"+id);
    itemToPrint = itemToPrint.slice(0,itemToPrint.length - 2);
    let tempItem=[];
    for(let el of itemToPrint){
      if(el.id == id){

      }
      else {
        tempItem.push(el);
      }
      if(el.id > id){
        el.id = el.id -1;
      }
    }
    itemToPrint = tempItem;
    tempItem=[];
    itemToPrint.push({id:'-',name:'-',quantity:'-',rate:'-',cost:'-'});
    itemToPrint.push({id:'',name:'Total Cost',quantity:'',rate:'',cost:totalCost});

}
function clearRecord(){
    itemToPrint=[{},{}];
    customerId="";  
}
