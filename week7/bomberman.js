"use strict";

/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

    function afterBump(grid) {
    let secondConfig = new Array(grid.length).fill("");
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
        if (
            grid[i][j] == "O" ||
            (i - 1 >= 0 && grid[i - 1][j] == "O") ||
            (i + 1 < grid.length && grid[i + 1][j] == "O") ||
            (j - 1 >= 0 && grid[i][j - 1] == "O") ||
            (j + 1 < grid[i].length && grid[i][j + 1] == "O")
        ) {
            secondConfig[i] += ".";
        } else {
            secondConfig[i] += "O";
        }
        }
    }
    return secondConfig;
    }

    function constructAllO(rowSize, colSize) {
    let grid = new Array(rowSize).fill("");
    for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < colSize; j++) {
        grid[i] += "O";
        }
    }
    return grid;
    }

    function bomberMan(n, grid) {
    // Write your code here
    if (n == 1) return grid;
    if (n % 2 == 0) return constructAllO(grid.length, grid[0].length);
    let grid3 = afterBump(grid);
    let grid5 = afterBump(grid3);
    if (Math.floor((n - 3) / 4) - (n - 3) / 4 == 0) {
        return grid3;
    }
    if (Math.floor((n - 5) / 4) - (n - 5) / 4 == 0) {
        return grid5;
    }
    }
console.log(
  bomberMan(5, [
    ".......",
    "...O.O.",
    "....O..",
    "..O....",
    "OO...OO",
    "OO.O...",
  ])
);

// console.log(
//   bomberMan(143, [
//     "OOOO.O.O...OOO.O.O........O.OOO.O.....OO..O..O...OOO....O.OOO....O...O....O..O.O.O.....OOOO.O...O....OO.O...........O.O..O.O..O...OO.OOO......O........O...O....O.O..O....O.......OOOO.O..........OO.O",
//   ])
// );
// (".........O.........OOOOOO.........OOO..........O.....OO.......OO...O...OO..........OOO........O...OO......OOOOOOOOO.............O........OOOO...OOOOOO...O...OO........OO...OOOOO........OOOOOOOO.....");
