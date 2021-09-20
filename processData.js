chrome.runtime.onInstalled.addListener(() => {
  
  });
  

  //worker mode
var IsWorkerMultiple=true;


setInterval(() => {
  //data captured by content script stored in db will send here to server
  if(listData.length>0)
  {
    if(IsWorkerMultiple)
    {
    //multiple Worker
    ProcessByMultipleWorker();
    }
    else
    {
      //Single Worker
    ProcessBySingleWorker();
    }
  }
}, 1000);

var worker_no=0;
function ProcessByMultipleWorker()
{
  var tempData=listData;
  var processLen=tempData.length;
  console.log(processLen);
  worker_no++;
  const myWorker = new Worker('worker.js');
  // Send message to worker
  myWorker.postMessage({"pdata":listData.splice(0,processLen),"worker":"W-"+worker_no});

// Receive message from worker
myWorker.onmessage = function(e) {
console.log("Completed - "+e.data );
}
}

var SWorker = new Worker('worker.js');
function ProcessBySingleWorker()
{

  var tempData=listData;
  var processLen=tempData.length;
  console.log(processLen);
  // Send message to worker
  SWorker.postMessage({"pdata":listData.splice(0,processLen),"worker":"W-1"});

// Receive message from worker
SWorker.onmessage = function(e) {
console.log("Completed - "+e.data );
}

}
