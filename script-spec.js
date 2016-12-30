/**
 * Created by yujiaguo on 12/30/16.
 */
describe('ProtractorExample', function () {

    var total = element(by.tagName('p'));
    var numberInputBox = element(by.css('[ng-model="newItem"]'));
    var changeTotalButton = element(by.css('.btn-default'));

    beforeEach(function () {
        browser.get('http://localhost:4444/wd/hub');
    });

    it('initially has a total', function () {
        expect(total.getText()).toEqual('6');
    });

    it('updates the `total` when a value is added', function () {
        numberInputBox.sendKeys(7);
        changeTotalButton.click();
        numberInputBox.clear();
        expect(total.getText()).toEqual('13');
        numberInputBox.sendKeys(7);
        changeTotalButton.click();
        expect(total.getText()).toEqual('20');
        numberInputBox.clear();
        numberInputBox.sendKeys(-700);
        changeTotalButton.click();
        expect(total.getText()).toEqual('-680');
    });

    it('does not update the `total` when an empty value is added', function () {
        numberInputBox.sendKeys('');
        changeTotalButton.click();
        expect(total.getText()).toEqual('6');
        numberInputBox.sendKeys('hi!');
        changeTotalButton.click();
        expect(total.getText()).toEqual('6');
    });

});