const gameBoard = (() => {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    const clearBoard = () => {
        board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    };

    const placeX = (x, y) => {
        if (board[x][y] === 0) {
            board[x][y] = "X";
        } else {
            console.log("Invalid move for X.");
        }
    };

    const placeO = (x, y) => {
        if (board[x][y] === 0) {
            board[x][y] = "O";
        } else {
            console.log("Invalid move for O.");
        }
    };

    const checkWin = () => {

        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) {
               
            }
        }

        for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0) {
                
            }
        }

        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) {
       
        }

        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0) {
           
        }

        return ;
    };

        const checkDraw = () =>{

        }

        const startGame = () =>{
            
        }

    return {
        board,
        clearBoard,
        placeX,
        placeO,
        checkWin,
    };
})();
