// Receive message from main file
self.onmessage = function(e) {
  workerno=e.data.worker;
    console.log(workerno+" - Sending Start :"+JSON.stringify(e.data.pdata));
        dataPost(e.data.pdata,workerno);
    // Send message to main file
    self.postMessage(workerno);
  }

// long running process
 function dataPost(data,t){
     LongRunningProcee(1,data,t);     
}

function LongRunningProcee(milliseconds,data,t) {
    /* const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds); */

    var x = 0;
    for (var i = 0; i < 500000000; i++) {
        x = x + i;
    }

    console.log(t+ " Data Posted")
}