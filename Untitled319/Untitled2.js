var fs = FileSystemSync( "TEST");
var rootFolder = fs.path;
var theFile = File( rootFolder+ "test.txt");
var theFileContents = theFile.toString();
theFileContents