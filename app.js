const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [
    "", "", "", "", "", "", "", "", ""
]

let go = "circle"
infoDisplay.textContent = "Circle goes first"


// function to add the cells from the array startCells
function createBoard(){
    startCells.forEach((_cell,index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index // add an index in the id of each element 
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
}

createBoard()

// Add the circle in the cells 
 
 function addGo(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "It is now " + go + "'s turn"
    e.target.removeEventListener("click",addGo)
    checkScore()
 }

 // Function to set the winning combos based on the id cells
 function checkScore(){
    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    console.log(allSquares[4])

    // Assigning every pawns ID to every cells ID in the winning Combos array 
    winningCombos.forEach(array=> {
        const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circle'))

            // Conditions if one of the players win

            if(circleWins){
                infoDisplay.textContent = "Circle wins !"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return 
            }
    })


    winningCombos.forEach(array => {
        const crossWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('cross'))

            // Conditions if one of the players win

            if(crossWins){
                infoDisplay.textContent = "Cross wins !"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return 
            }
    })

 }