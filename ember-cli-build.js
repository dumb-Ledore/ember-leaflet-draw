'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    'ember-font-awesome': {
      'useLess': true
    },
    'SemanticUI': {
      'css': false
    },
    'lessOptions': {
      'paths': [
        'node_modules/semantic-ui/src',
        'app/styles'
      ]
    },
    snippetPaths: ['tests/dummy/app/snippets'],
    fingerprint: {
      // prepend: 'https://stevenheinrich.github.io/'
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
