
# multi-escape

  Escape one or more special characters.

## Examples

```js
var escape = require('multi-escape');

var str = '"Hello" World! (magic!)'

//\"Hello\" World! (magic!)
escape('"', str);

//\"Hello\" World\! \(magic\!)
escape(['"','!','('], str)

//etc
```

## License

  MIT
