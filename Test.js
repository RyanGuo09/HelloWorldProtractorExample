describe('ProtractorExample', function () {

    it('the dom initially has a greeting', function () {
        browser.get('http://localhost:4444/wd/hub');
        expect(element(by.id('greeting')).getText()).toEqual('Hello, World!');
    });

});