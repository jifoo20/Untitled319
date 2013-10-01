
var fs = FileSystemSync( "THEMES_CUSTOM");
var rootFolder = fs.path;

rootFolder += '\n2-'+FileSystemSync( "THEMES_CUSTOM").path;

rootFolder += '\n3-'+FileSystemSync( "WIDGETS_CUSTOM").path;

rootFolder += '\n4-'+FileSystemSync( "WALIB").path;

rootFolder += '\n5-'+FileSystemSync( "WEB_COMPONENTS").path;

rootFolder

//N.B, probleme : USER_HOME_DIRECTORY  isnot defined
