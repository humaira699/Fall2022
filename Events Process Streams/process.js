process.stdin.once('data', function(data) {
	process.stdout.write('Hello ' + data);
	process.stdin.pause();
});
//.emit()
process.stdout.write('What is your name? ');
process.stdin.resume();
