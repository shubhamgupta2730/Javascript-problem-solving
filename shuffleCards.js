//suits: Heart, Diamond, Club , Spade
//ranks: 2,3,4,5,6,7,8,9,10, jack, king, queen, Ace
//deck: ranks of each suits.
//shuffle deck: loop of rank inside suits, and iterating for each rank and then shuffling.

function shufflingDecks(){
  const suits = ['heart', 'spade', 'club', 'diamond'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10' , 'Ace', 'King', 'Queen', 'jack'];
  let deck= [];   //empty array of deck

  //iterating each suit with ranks; 
  for(let suit of suits){
    for(let rank of ranks){
      deck.push(`${rank} of ${suit}`);
    }
  }
  //shuffling the deck array: 
  // for(let i = deck.length-1;  i>0; i--){
  //   const j = Math.floor(Math.random()*i+1);
  //   [deck[i], deck[j]]= [deck[j], deck[i]];
  // }
  
  for(let i = 0; i<deck.length; i++){
    const j = Math.floor(Math.random()*deck.length);
    [deck[i], deck[j]]= [deck[j], deck[i]];
  }
  return deck;
 
}

console.log(shufflingDecks());