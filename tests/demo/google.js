module.exports = {
    'Test': function (client) {
        var google = client.page.google();

        google.navigate()
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .click('@submit');

        client.pause(20000).end();
    }
};