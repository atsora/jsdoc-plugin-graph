/**
 * @module jsdoc-plugin-graph
 */
'use strict';

exports.defineTags = function (dictionary) {
  dictionary.defineTag('g', {
    keepsWhitespace: true,
    removesIndent: true
  });
}
