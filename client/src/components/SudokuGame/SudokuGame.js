

const board = [
    [9,0,0,0,4,0,0,1,0],
    [0,0,0,0,0,0,0,0,0],
    [3,0,0,0,0,0,0,5,0],
    [0,0,0,0,3,0,0,0,0],
    [0,0,0,0,0,0,0,7,0],
    [2,0,0,0,0,0,0,8,0],
    [0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0],
];

function isValidPlace(grid, row, col, number){
    for(let space = 0; space <9; space++){   //iterate through rows
        if(grid[space][col] ===number){      //if number exists in same column
            return false;                     //return false
        }
    }

    for(let space = 0; space <9; space++){   //iterate through cols
        if(grid[row][space] ===number){          //if number exists in same row
            return false;                     //return false
        }
    }

    let localBoxRow = row - (row %3);  //row number minus row number remainder 3
    let localBoxCol = col - (col %3);
    for(let box1 = localBoxRow; box1 < localBoxRow +3; box1++){     //nested loop
        for(let box2 = localBoxCol; box2 < localBoxCol +3; box2++){
            if (grid[box1][box2] === number){  //if number already exists in row/col/localbox then 
                return false;                   //false
            }    
        }
    }
    return true;
}

//function to solve the puzzle
function solve(grid){
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            if(grid[row][col]===0){         //check for empty space
                for(let guess =1; guess <10; guess++) {    //then make a guess for 1 and keep going up
                    if(isValidPlace(grid, row, col, guess)){  //check the guess for that space
                        grid[row][col]= guess; //enter guess in next space at row/col
                        if(solve(grid)) {
                            return true;

                        } 
                        grid[row][col] = 0;   //if cannot enter number put no entry in
                    

                    }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve(board)
   console.log(board)

