const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];

/**
 * Write your code below!
 */
function indexOfRepeatedValue(array) {
    let firstIndex;
    first_loop: for(let i = 0; i < array.length - 1; i++) {
        for(let j = i + 1; j < array.length; j ++) {
            if(array[i] === array[j]) {
                firstIndex = i;
                break first_loop;
            }
        }
    }
    console.log(firstIndex);
    return firstIndex;
}

indexOfRepeatedValue(numbers);