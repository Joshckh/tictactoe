const player = (name,sign) => {
    return {name,sign}
}


const game = (() => {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    const clearBoard = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                board[i][j] = 0;
            }
        }
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

    const checkDraw = () => {
        let isDraw = true;
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === 0) {
                    isDraw = false;
                    break;
                }
            }
        }
    
        if (isDraw) {
            alert("It's a draw!");
            clearBoard();
            display.start()
        }
    };

    const checkWin = () => {

        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) {
                alert(`${board[i][0]} is the Winner`)
               clearBoard()
               display.start()
            }
        }

        for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0) {
                alert(`${board[0][i]} is the Winner`)
                clearBoard()
                display.start()
            }
        }

        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) {
            alert(`${board[0][0]} is the Winner`)
           clearBoard()
           display.start()
        }

        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0) {
            alert(`${board[0][2]} is the Winner`)
            clearBoard()
            display.start()
        }

        checkDraw();
       

        console.log(board);
    };

   


    return {
        placeX,
        placeO,
        checkWin,
        clearBoard,
        board,
    };
})();

const display = (() => {
    const tiles = document.querySelectorAll(".tile");
    let xTurn = true
    let botMatch = false
    

    const clickHandler = (e) => {
        const clickedTile = e.target; 
        const row = parseInt(clickedTile.dataset.row);
        const col = parseInt(clickedTile.dataset.col);

        if (botMatch === false){

            if (xTurn === true) {
                game.placeX(row, col);
                clickedTile.classList.add("xIcon");
                xTurn = false;
                game.checkWin();
            } else {
                game.placeO(row, col);
                clickedTile.classList.add("oIcon");
                xTurn = true;
                game.checkWin();
            }}
        else{

            game.placeX(row, col);
            clickedTile.classList.add("xIcon");
            game.checkWin();
            randomBotMove();
            game.checkWin();

        }
    };


    const start = () =>{
         xTurn = true;
        tiles.forEach((tile) => {
            tile.addEventListener("click", clickHandler,{once:true});
        });
        tiles.forEach((tile) => {
            tile.classList.remove("xIcon", "oIcon");
        });
    
    }
    
    const restart = () => {
        game.clearBoard();
        start();
    }

    const restarBtn = document.querySelector(".restartBtn")

    restarBtn.addEventListener("click",restart)

    
    const switchBot = () => {
        display.botMatch = !display.botMatch;
    }


    const randomBotMove = () => {
        let emptySpot = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) { // Fixed the loop to iterate through all columns
                if (game.board[i][j] === 0) {
                    emptySpot.push([i, j]); // Push an array [i, j] for empty spot
                }
            }
        }
    
        if (emptySpot.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptySpot.length);
            const [row, col] = emptySpot[randomIndex]; // Destructuring the array
            game.placeO(row, col);
            tiles[row * 3 + col].classList.add("oIcon");
        }
    };
    
    return {
        start,
        botMatch,
        switchBot,

    };
})();


display.start()


  

