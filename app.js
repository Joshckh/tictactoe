const gameBoard = (() => {
    let board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]

    const clearBoard = () => {
        board = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    }

    const placeX = (x, y) => {
        if (board[x][y] === 0) {
            board[x][y] = "X";
        } else {
            console.log("Invalid move for X.");

  const placeO = (x, y) => {
        if (board[x][y] === 0) {
            board[x][y] = "O";
        } else {
            console.log("Invalid move for O.");

    return{
        clearBoard,
        placeX,
        placeO,
    }
})()