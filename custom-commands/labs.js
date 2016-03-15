var labsCommands = {
    next: function () {
        // this.api.pause(1000);
        return this.waitForElementVisible('@submitButton', 10000)
            .click('@submitButton');
    },
    loading: function () {
        this.api.pause(1000);
        return this.waitForElementVisible('@main', 10000).waitForElementVisible('@submitButton', 10000);
    }
};

module.exports = {
    url: 'https://jshi.usersys.redhat.com:4443/labs/dnshelper',
    commands: [labsCommands],
    elements: {
        main: {
            selector: '.app-block.app-block-guided.ng-scope'
        },
        submitButton: {
            selector: 'button.submit'
        }
    }
    // sections: {
    //     app: {
    //         selector: '#dnshelper',
    //         elements: {
    //             main: {
    //                 selector: '.app-block.app-block-guided'
    //             },
    //             submitButton: {
    //                 selector: 'button.btn.btn-next.submit'
    //             }
    //         }
    //     }
    // }
};