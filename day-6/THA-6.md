Event Loop
JavaScript - A Single threaded, Non-Blocking, Concurrent language

Callbacks -

In synchronous programming, code is written and executed line by line and this is normal for all the other development environments.
But if some function call in the code is taking very long time to return the data, then this causes the whole program to ‘block’ - otherwise known as sitting still and waiting -until it loads the data.
Node.js being an asynchronous platform doesn’t wait around for things like file I/O to finish - Node.js uses callbacks.
A callback is a function called when the given task is completed; this prevents blocking, and allows other code to run in the meantime.
Callbacks are the foundation of Node.js. Callbacks give us an interface with which to say - “When you are done doing that, do all this”. This allows to have as many I/O operations as the OS can handle happening at the same time.
Async CRUD operations -
Commands -
(creates a variable with file system access, similar to import statement in JS)

> var fs = require(‘fs’);
Create a folder on your system using node in Async -

> fs.mkdirFile(‘folder_name’, (err) => {
	if(err) {
		console.log(err);
	}
});
Note - Add the err checking function always to avoid errors and also Node.js requires to run the command successfully.
Read Operation i.e. reading the contents of the file in async-

> fs.writeFile(‘folder_name/filename', “string to write", (err) => {
... if (err) {
..... console.log(err);
..... }
... });
Update Operation i.e. append to file without removing the previous contents of the file in async-

> fs.appendFile(‘folder_name/filename', "Append operation in Async", (err) => {
... if (err) {
..... console.log(err);
..... }
... });
Delete Operation i.e. delete the file or directory in Async- // Remove file

> fs.rm(‘folder_name/filename', (err) => {
... if (err){
..... console.log(err);
..... }
... });
// Remove folder

> fs.rmdir('AsyncFloder', (err) => {
... if (err) {
..... console.log(err);
..... }
... });
// Rename Folder -

> fs.rename('testFolder', 'newTestFolder', (err) => {
... if (err) {
..... console.log(err);
..... }
... });
// Rename File -

> fs.rename('Filename', 'newFilename', (err) => {
... if (err) {
..... console.log(err);
..... }
... });