// module.exports = {
//     'Demo test Google': function (browser) {
//         browser
//             .url('http://www.baidu.com')
//             .waitForElementVisible('body', 1000)
//             .setValue('input.s_ipt', 'nightwatch 1')
//             .waitForElementVisible('input.bg.s_btn', 1000)
//             .click('input.bg.s_btn')
//             .pause(1000)
//             // .assert.containsText('#main', 'Night Watch')
//             // .end();
//     }
// };

// module.exports = {
//     'Test': function (client) {
//         var google = client.page.google();
//         google.setValue('@searchBar', 'nightwatch')
//             .submit();
//
//         client.end();
//     }
// };

module.exports = {
    'Test': function (client) {
        var baidu = client.page.baidu();

        baidu.navigate()
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .click('@submit');

        client.end();
    }
};