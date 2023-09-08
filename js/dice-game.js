function rollDice() {
    let goldCoin = 0;
    for(i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert("Value is " + roll);
        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        }
        else if (roll < 5) {
            continue;
        }
        else {
            alert("Congratulations, you win " + roll + " gold coins!");
        }
        goldCoin += roll;
    }
    alert("You have " + goldCoin + " coins");
}