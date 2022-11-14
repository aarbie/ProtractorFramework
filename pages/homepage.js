let homepage = function(){

//allure serve /Users/rajib/Desktop/Projects\ /ProtractorDemo/allure-results 

    let firstNumber_input =  element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);

    }

    this.enterSecondNumber = function(secondno){
        secondNumber_input.sendKeys(secondno);
        
    }

    this.clickGo= function(){
        goButton.click();
    }

    this.verifyResult= function(){
        let output = element(by.cssContainingText('.ng-binding', '6'));
       expect(output.getText()).toEqual('6');
    }

    this.sleep= function(amount){
        browser.sleep(amount);
    }
}

module.exports= new homepage();



