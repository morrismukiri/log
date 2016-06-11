# Log
Simple console logging tool

## Installation
```bash
npm install morrismukiri/log
```
## Usage example

```javascript
var log=require('log');
log.e('localeCompare(compareString)');//simple log

log.error('Lorem ipsum dolor sit amet, consectetur adipisicing elit,  aliqua.')
.info('some info');//All log methods can be Chained

log.i('more info');//alias for log.info()
log.s('well done');//alias for .success()
log.w('not complete though');//alias for .warning()
```
