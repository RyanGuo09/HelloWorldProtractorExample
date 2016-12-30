// Protractor configuration
// Generated on Wed Dec 30 2016 10:23:11 GMT-0500 (EST)

exports.config = {

    //The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    //Specify the name of the specs files.
    specs: ['script_spec.js'],

    //Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    }
};
