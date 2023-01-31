/**
 * @module jsdoc-plugin-graph
 */
'use strict';

exports.defineTags = function (dictionary) {
  dictionary.defineTag('graph', {
    mustHaveValue: true,
    onTagged: function (doclet, tag) {
      doclet.graphs = doclet.graphs || [];
      doclet.graphs.push (tag.value);
    }
  });
}
