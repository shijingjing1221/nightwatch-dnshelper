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
        labs.navigate();

        labs.expect.section('@app').to.be.visible;
        // labs.waitFor.section('@app').to.be.visible;

        var appSection = labs.section.app;
        appSection.expect.element('@main').to.be.visible;
        appSection.expect.element('@next').to.be.visible;

        appSection.click('@next');
        appSection.expect.element('@submitButton').to.be.visible;
        appSection.click('@submitButton');

        client.pause(200000).end();
    }
};