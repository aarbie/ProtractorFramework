let homepage = require('../pages/homepage')
describe('demo calculator tests', function() {

    it('addition test', function() {


        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('4');
        homepage.clickGo();
        homepage.verifyResult();
        homepage.sleep('4000')
      
    
        
    });

    it('subtraction test', function() {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('4');
        homepage.clickGo1();
        homepage.verifyResult();
        homepage.sleep('4000')
        
    });
    
    
});