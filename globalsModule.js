var config = require("./config.json");
var fs = require('fs');
var regex = /dnshelper.*\.sh/;

module.exports = {
    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: true,

    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 300,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 5000,

    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: true,

    // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 10000,

    'default': {
        myGlobal: function () {
            return 'I\'m a method';
        }
    },

    'test_env': {
        beforeEach: function () {

        }
    },

    before: function (cb) {
        console.log('Deleting the previous dnshelper-*.sh files...');
        fs.readdir(config.script_folder, function (err, items) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.match(regex) != null) {
                    console.log("Deleting file:" + item);
                    fs.unlink(config.script_folder + "/" + item);
                }
            }
        });
        cb();
    },

    beforeEach: function (browser, cb) {
        cb();
    },

    after: function (cb) {
        cb();
    },

    afterEach: function (browser, cb) {
        cb();
    },

    reporter: function (results, cb) {
        //console.log(results);
        cb();
    }
};