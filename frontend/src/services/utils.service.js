

const changeColor = (change, isString) => {
    const parsedChange = parseFloat(change);
    if (parsedChange > 0) {
        return isString ? '#49FF00' : { color: '#49FF00' };
    } else {
        return isString ? '#FF0000' : { color: '#FF0000' };
    }
};




export const utilsService = {
    changeColor
};