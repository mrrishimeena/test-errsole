
/**
 * Insert this Errsole code snippet as the first line of your app's main file
 */
const errsole = require('errsole');
errsole.initialize({
  framework: 'express',
  token: 'f02f2e8b-4463-41c7-a51a-24578ea0af11'
});
// End of Errsole code snippet

/**
 * Your app code starts here
 */
const express = require('express');
const app = express();
const v8 = require('v8');
const heapStats = v8.getHeapStatistics();
function bytesToMB(bytes) {
  return bytes != null ? (bytes / 1024 / 1024).toFixed(2) + ' MB' : 'N/A';
}

function readableHeapStats() {
  const readableStats = {
    total_heap_size: bytesToMB(heapStats.total_heap_size),
    total_heap_size_executable: bytesToMB(heapStats.total_heap_size_executable),
    total_physical_size: bytesToMB(heapStats.total_physical_size),
    total_available_size: bytesToMB(heapStats.total_available_size),
    used_heap_size: bytesToMB(heapStats.used_heap_size),
    heap_size_limit: bytesToMB(heapStats.heap_size_limit),
    malloced_memory: bytesToMB(heapStats.malloced_memory),
    peak_malloced_memory: bytesToMB(heapStats.peak_malloced_memory),
    external_memory: bytesToMB(heapStats.external_memory),
    // For non-size related or boolean properties, directly copy them or provide default values
    does_zap_garbage: heapStats.does_zap_garbage != null ? heapStats.does_zap_garbage : 'N/A',
    number_of_native_contexts: heapStats.number_of_native_contexts != null ? heapStats.number_of_native_contexts : 'N/A',
    number_of_detached_contexts: heapStats.number_of_detached_contexts != null ? heapStats.number_of_detached_contexts : 'N/A',
    total_global_handles_size: bytesToMB(heapStats.total_global_handles_size),
    used_global_handles_size: bytesToMB(heapStats.used_global_handles_size),
  };
  console.log(readableStats);
}
readableHeapStats()
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
