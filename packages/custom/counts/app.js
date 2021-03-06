'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Counts = new Module('counts');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Counts.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Counts.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Counts.menus.add({
    title: 'counts example page',
    link: 'counts example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Counts.aggregateAsset('css', 'counts.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Counts.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Counts.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Counts.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Counts;
});
