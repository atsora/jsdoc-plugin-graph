/**
 * @module jsdoc-plugin-graph
 */
'use strict';

var logger = require('jsdoc/util/logger');

exports.defineTags = function (dictionary) {
  dictionary.defineTag('g', {
    keepsWhitespace: true,
    removesIndent: true
  });
}
