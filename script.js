function cavalryPPL() {
    let balance = document.getElementById("balance").value;
    balance = Number(balance);
    let divider;

if (balance <= 1000 ) {
    return balance / 6;
} else if (balance <= 2000) {
    return balance / 12;
} else if (balance <= 4000) {
return balance / 18;
} else {
    return balance / 24;
}
}