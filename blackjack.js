// When u click deal, it gives 2 cards 2 player and dealer.

var dealerHand = [];
var playerHand = [];

$(document).ready(function(){
    // When u click the deal-button, it gives two cards to each player.
    var deck = newDeck();
    var cardsnum = 52;
    $('.deal-button').click(function(){
        deal(deck, playerHand);
        deal(deck, dealerHand);
        console.log(dealerHand);
        console.log(playerHand);
    });

    $('.hit-button').click(function(){
        deal(deck, playerHand);
        console.log(dealerHand);
    });

});


// pop

function deal (cards, hand) {
 var newCard = cards.pop();
 var newCard2 = cards.pop();
 var newCard3 = cards.pop();
 var newCard4 = cards.pop();

 var imgUrl = getTheCardImageUrl(newCard);
 var imgUrl2 = getTheCardImageUrl(newCard2);
 var imgUrl3 = getTheCardImageUrl(newCard3);
 var imgUrl4 = getTheCardImageUrl(newCard4);

 // tern
 var tern= 0;

if(tern%2 == 0){
    if(hand == playerHand){
        $('#player-hand').append('<img src="' + imgUrl+ '"/>');
        $('#player-hand').append('<img src="' + imgUrl2+ '"/>');
        playerHand.push(newCard);
        playerHand.push(newCard2);
     }
    else{
        $('#dealer-hand').append('<img src="' + imgUrl3+ '"/>');
        $('#dealer-hand').append('<img src="' + imgUrl4+ '"/>');
        dealerHand.push(newCard3);
        dealerHand.push(newCard4);
    }
}
 }


// Make a deck
function newDeck(){
    // Define a empty array to push the values in.
    var deck = [];
    var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
    // The first 4loop is 4 using to loop through 13 types of cards.
    // The second 4loop is 4 looping through 4 type of marks.
    for(var i=1; i<=13; i++){
        for(var j=0;j<=3;j++){
            // Nest the key and the value to the empty array 'deck'.
            deck.push({'point':i, 'suit':suits[j]});
        }
    }
    return deck;
}


// When u call the fun, it shows random number.
// function getRandomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// The URL swiches depending on the card.point number
function getTheCardImageUrl(card) {
    var card_number = card.point;
    // Define three names as array 0, 1, 2
    var other_three = ['jack','queen','king'];
    // If the number is between 2-10
    if(card.point>=2 && card.point<=10){
        return 'images/' + card_number + '_of_' + card.suit + '.png';
    }
    if(card.point>=11 && card.point<=13){
        // other_three - 11 = 0 == 'jack'
        return 'images/' + other_three[card.point-11] + '_of_' + card.suit + '.png';
    }
    if(card.point == 1){
        return 'images/ace_of' + card.suit + '.png';
    }
}
