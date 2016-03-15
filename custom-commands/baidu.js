var googleCommands = {
    submit: function () {
        this.api.pause(1000);
        return this.waitForElementVisible('@submitButton', 1000)
            .click('@submitButton')
            .waitForElementNotPresent('@submitButton');
    }
};

module.exports = {
    url: 'http://www.baidu.com',
    commands: [googleCommands],
    elements: {
        searchBar: {
            selector: 'input.s_ipt'
        },
        submitButton: {
            selector: 'input.bg.s_btn'
        }
    }
};