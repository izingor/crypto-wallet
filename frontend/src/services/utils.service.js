

const changeColor = (change, isString) => {
    const parsedChange = parseFloat(change);
    if (parsedChange > 0) {
        return isString ? '#109f00' : { color: '#109f00' };
    } else {
        return isString ? '#FF0000' : { color: '#FF0000' };
    }
};

function coinWalletFraction(coinAmount, coinValue, walletValue) {
    return ((coinAmount * coinValue) / walletValue) * 100;
}




export const utilsService = {
    changeColor,
    coinWalletFraction,
};