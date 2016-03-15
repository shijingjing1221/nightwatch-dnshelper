var config = require("../../config.json");
var fs = require('fs');
var regex = /dnshelper.*\.sh/;
var rhel7_1 = config.rhel7_1,
    rhel7_2 = config.rhel7_2;

var pause_time = config.pause_time,
    timeput = config.timeout;

module.exports = {
    before: function (browser) {
        console.log('Start nofrorwader ...');
    },

    after: function (browser) {
        console.log('Closing down...');
    },

    'Caching only dnshelper, without forwareder': function (client) {
        var labs = client.page.labs();
        labs.navigate().loading();
        labs.next().loading();
        labs.click('.radio input[value="cacheonly"]');
        labs.next().loading();
        labs.click('input[value="true"]');
        labs.setValue('input[name="followerIP"]', config.forwarder);
        labs.next().loading();
        labs.click('input[value="true"]');
        labs.next().loading();
        labs.click('.content .row button.download[type="submit"]');

        client.pause(20000).end();
    }
};