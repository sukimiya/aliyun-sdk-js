var batchcompute = require('./batchcompute');

/**
*
*/

var opt= {
  JobId:'job-00000000559638EC00005F780000069A',
  Marker: "", //本页起始资源标识符。默认为空字符串。
  MaxItemCount: 100  //实际返回最大资源数量。默认值50，最大值100。
};


batchcompute.listTasks(opt,function(err, result) {

  console.log(err || result);

  /**
   result.data:
   [ { EndTime: '',
     InstanceMetrics:
     { FailedCount: 0,
     FinishedCount: 0,
     RunningCount: 0,
     StoppedCount: 0,
     WaitingCount: 1 },
     StartTime: '',
     State: 'Waiting',
     TaskName: 'CountTask' } ]
   */
});
