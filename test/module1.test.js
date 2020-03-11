var test = require('unit.js');
var sinon = require('sinon');
const shoppinggame = require('../js/shoppinggame');


describe('Shopping Master game', function(){

    it('Should define the player object. @player-object', function(){

        test.assert(shoppinggame.player, "Have you defined and exported a `player` object?");
        test.assert(shoppinggame.name
            && shoppinggame.name == 'unknown', "Have you defined and exported a constant called `name` & initialised to a value of `unknown`?");
        test.assert(shoppinggame.score == 0, "Have you defined and exported a constant called `score` & initialised to a value of 0?");
        test.assert(shoppinggame.items == 0, "Have you defined and exported a constant called `items` & initialised to a value of 0?");
        test.assert(shoppinggame.player &&
             (shoppinggame.player.name == 'unknown' &&
             shoppinggame.player.score == 0 &&
             shoppinggame.player.items == 0)
             , "Have you added properties `name`, `score` & `items` to the player object?");
       
    });

    it('Should add methods to the player object. @player-object-methods', function(){

        test.assert(shoppinggame.player && 
            shoppinggame.player.getCurrentScore, "Have you added a method named `getCurrentScore` to the player object?");
        test.assert(shoppinggame.player.getCurrentScore() == shoppinggame.player.score, "Have you returned the player's score from the method?");
        
        test.assert(shoppinggame.player.addPoints, "Have you added a method named `addPoints` to the player object?");
        shoppinggame.player.addPoints(10);
        test.assert(shoppinggame.player.score == 10, "Have you added the points to the current score of the player?");

        test.assert(shoppinggame.player.deductPoints, "Have you added a method named `deductPoints` to the player object?");
        shoppinggame.player.deductPoints(10);
        test.assert(shoppinggame.player.score == 0, "Have you subtracted the points from the current score of the player?");
    });

    it('Should define the Product class. @Product-object', function(){
        test.assert(shoppinggame.Product, "Have you defined and exported a `Product` object?");
    });

   
});

