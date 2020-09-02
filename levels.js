import Brick from './brick.js';

export const buildLevel = (game, level) => {
    const bricks = [];

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if (brick === 1) {
                const position = {
                    x: brickIndex*80,
                    y: 250 + rowIndex*25
                }
                bricks.push(new Brick(game, position))
            }
        })
    })
    return bricks;
}

export const level1 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // [0,0,0,1,0,0,0,0,0]
]
export const level2 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0 , 1]
]