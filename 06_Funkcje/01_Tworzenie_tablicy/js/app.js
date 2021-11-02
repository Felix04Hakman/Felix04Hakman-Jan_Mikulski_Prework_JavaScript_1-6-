
function createArray(rows) {
        let new_array = [ ];
        for(let i = 0; i < rows; i++) {
            new_array[i] = i + 1;
        }
        return new_array;
    }

let array = createArray(5);
console.log(array);
