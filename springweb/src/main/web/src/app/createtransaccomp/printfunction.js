var itemToPrint=[{},{}];
var docheading="";
function printfunc(item,docheadstr,docfooter) {
  itemToPrint = itemToPrint.slice(0,itemToPrint.length - 2);
  itemToPrint.push(item);
  docheading = docheadstr;
  itemToPrint.push(docfooter[0]);
  itemToPrint.push(docfooter[1]);
}
function updateRecord(id, quantity, cost, totalSum){
  itemToPrint.forEach(item => {
    if(item.id == id){
      item.quantity = quantity;
      item.cost = cost;
    }
  });
  item = itemToPrint[itemToPrint.length - 1];
  item.cost = totalSum;  // updating the total sum cost;
}
function removeItemFromPrintList(id, docfooter){
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
    itemToPrint.push(docfooter[0]);
    itemToPrint.push(docfooter[1]);

}
function clearRecord(){
    itemToPrint=[{},{}];
    docheading="";  
}
