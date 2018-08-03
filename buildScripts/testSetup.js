 // This file isn't transpailed so must use ComonJS or ES5

 // Register Babel to transpile before our tests run
 require('babel-register')();

 // Disable webpack feature that Mocha's doesn't understand
require.extensions['.css'] = function() {}; // ie. if seeing "import './index.css';" treating it as empty function
