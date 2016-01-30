escapeRegex = require('escape-regexp');

/**
 * Escape one or more special characters in `str`.
 *
 * @param {String|Array} chars
 * @param {String} str
 * @return {String}
 */

module.exports = function(chars, str) {
  if(Array.isArray(chars)) {
    for(var i = 0; i < chars.length; i++) {
      chars[i] = escapeRegex(chars[i]);
    }
    return str.replace(new RegExp('('+chars.join('|')+')', 'gmi'), '\\$1');
  }
  return str.replace(new RegExp(chars, 'gmi'), '\\'+chars);
}
