function getCards() {
    return Math.floor(math.random()*12);
}

function startGame() {
    dealerCards1 = getCards();
    dealerCards2 = getCards();
    dealerCardsTotal = dealerCards1 + dealerCards2

    let playerCards = getCards() + getCards();
    console.log("you have a total of " + dealerCardsTotal)
}

startGame();