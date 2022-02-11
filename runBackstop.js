console.log('Starting')
const originalWrite = console.log;
process.stdout.write('hi')
console.log = function () {
  originalWrite(...arguments);
}
console.log('Hi there')
process.stdout.write('writing')
console.log = originalWrite
console.log('Restored')
