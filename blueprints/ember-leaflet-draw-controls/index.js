'use strict';
module.exports = {
  description: 'add leaflet-draw assets to package.json',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addPackageToProject('leaflet-draw', '^1.0.4');
  }
};
