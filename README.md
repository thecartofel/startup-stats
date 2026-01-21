# startup-stats
startup-stats is a package that sends Discord bot statistics to the console when it starts
## Usage
Connect the library as 
```
const startupStats = require('startup-stats')
```
Use the startupStats function in the ready event
```
client.on('ready', () => {
    startupStats();
});
```
## Links
[npmjs.com](https://www.npmjs.com/package/startup-stats)