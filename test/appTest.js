const assert = require('chai').assert;
const app = require('../app');

describe('App',function(){
    
    describe('sayHello()',function(){
             it('sayHello should return hello',function(){
        let result = app.sayHello();
         assert.equal(result,'hello');
        });
       
    });
    
    
    describe('isPrime()',function(){
        it('should return if number is prime',function(){
            let result = app.isPrime(2);
            assert.equal(result,true);
        });
        
    });
