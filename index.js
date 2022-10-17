//Montana Code School Week 11 Project
//Patrick Warner - 10/2022

//using some jquery for practice. Just a simple button that hides itself and presents the tic tac toe board when clicked
$('.btn-dark').on('click', () => {
    $('.btn').hide();
    ticTacToeBuilder();
})

//the building function for the tic tac toe board. builds divs with columns in it
//also has a reset button at the bottom of it
function ticTacToeBuilder(){
    const table = document.getElementById('tic-tac-toe')
    const div = document.createElement("div")
    const playerx = document.createTextNode('Player X')
    const playero = document.createTextNode('Player O')
    div.className = "row text-center justify-content-center"
    table.appendChild(div)
    const header1 = document.createElement('div')
    const header2 = document.createElement('div')
    header1.className = 'col-3 h1 card bg-light'
    header2.className = 'col-3 h1'
    header1.setAttribute('id', 'player1')
    header2.setAttribute('id', 'player2')
    header1.appendChild(playerx)
    header2.appendChild(playero)
    const parent_div = document.querySelector(".row.text-center.justify-content-center")
    parent_div.appendChild(header1)
    parent_div.appendChild(header2)

    //two for loops that run 3 times to build 3x3 tic tac toe board
    for(let i = 0; i <3; i++){
        const row = document.createElement('div')
        row.className = "row game--container text-center justify-content-center"
        row.setAttribute('id', `row-${i}`)
        table.appendChild(row)
        const row_div = document.getElementById(`row-${i}`)
        for(let ii = 0; ii <3; ii++){
            const div_cols = document.createElement('div')
            div_cols.className = 'cell border bg-light'
            div_cols.setAttribute('id', `col-${i}-${ii}`)
            row_div.appendChild(div_cols)
            }
            
        }

    //reset button
    const br = document.createElement('br')
    const btn_div = document.createElement('div')
    btn_div.className = 'text-center justify-content-center'
    const button = document.createElement('button')
    button.className = 'btn btn-light'
    const reset = document.createTextNode('Reset')
    button.appendChild(reset)
    button.setAttribute('id', 'reset-button')
    table.appendChild(br)
    table.appendChild(br)
    table.appendChild(br)
    table.appendChild(btn_div)
    btn_div.appendChild(button)

    //
    player();
    resetButton();
}

//reset button which clears the html child elements in the table and then runs tic tac toe builder again to make a new board
function resetButton(){
    let btn = document.getElementById('reset-button')
    btn.addEventListener('click', () => {
        while(document.getElementById('tic-tac-toe').firstChild){
            document.getElementById('tic-tac-toe').removeChild(document.getElementById('tic-tac-toe').firstChild)
        }
        ticTacToeBuilder();
        
    })
}

//function that uses nested for loops to create click events on each div in the tic tac toe table
//when clicked, it makes sure the game is not already over (decided by referee function) and makes sure you haven't played in a square
//it then uses a counter and modulus to play an X or an O, and has the referee function execute each time to make sure someone hasn't won
function player(){
    let counter = 0;
    let rows = document.querySelectorAll('.game--container')
    for (let row of rows){
        let children = row.children
            for (let child of children){
                let player1 = document.getElementById('player1')
                let player2 = document.getElementById('player2')
                    document.getElementById(`${child.id}`).addEventListener('click', () => {
                        if(document.getElementsByClassName('alert').length < 1){
                            if ((child.innerHTML === 'X' || child.innerHTML === 'O')){
                                console.log('already played')
                                referee();
                            } else if (counter % 2 === 0){
                                    let X = document.createTextNode('X')
                                    counter++
                                    child.appendChild(X)
                                    player1.className = 'col-3 h1'
                                    player2.className = 'col-3 h1 card bg-light'
                                    referee();
    
                            } else {
                                    let O = document.createTextNode('O')
                                    counter++
                                    child.appendChild(O)
                                    player1.className = 'col-3 h1 card bg-light'
                                    player2.className = 'col-3 h1'
                                    referee();
                                
                                }
                        } else {
                            console.log('cannot play, game is over')
                        }
                       
                    })
            }
            
    }
}

//this function creates the bootstrap alert for a winner
//if the alert is already created it does nothing
function endGame(winner){
    if(document.getElementsByClassName('alert').length < 1){
    if (winner === 'tie'){
        const alert = document.createElement('div')
        alert.className = 'alert alert-primary text-center'
        alert.setAttribute('role', 'alert')
        console.log('game finished')
        const win_phrase = document.createTextNode(`Tie game, click reset to play again.`)
        alert.appendChild(win_phrase)
        document.getElementById('tic-tac-toe').appendChild(alert)
    } else{
        const alert = document.createElement('div')
        alert.className = 'alert alert-success text-center'
        alert.setAttribute('role', 'alert')
        console.log('game finished')
        const win_phrase = document.createTextNode(`${winner} wins!`)
        alert.appendChild(win_phrase)
        document.getElementById('tic-tac-toe').appendChild(alert)
    }
    } else {
        console.log('tie or win already happened!')
    }
    
}

//series of if statements to assess the winner by seeing if the innerHTMl matches on three adjacent boxes
//looks at all possible win combinations, have the function executed after each click so the game will stop if someone wins
function referee(){
    const col1 = document.getElementById('col-0-0')?.innerHTML
    const col2 = document.getElementById('col-0-1')?.innerHTML
    const col3 = document.getElementById('col-0-2')?.innerHTML
    const col4 = document.getElementById('col-1-0')?.innerHTML
    const col5 = document.getElementById('col-1-1')?.innerHTML
    const col6 = document.getElementById('col-1-2')?.innerHTML
    const col7 = document.getElementById('col-2-0')?.innerHTML
    const col8 = document.getElementById('col-2-1')?.innerHTML
    const col9 = document.getElementById('col-2-2')?.innerHTML

    const col_array = [col1,col2,col3,col4,col5,col6,col7,col8,col9]

    if ((col1 === col2 && col2 === col3) && (col1 === 'X' || col1 === 'O')){
        endGame(col1)
        return col1
    } else if ((col4 === col5 && col5 === col6) && (col4 === 'X' || col4 === 'O')){
        endGame(col4)
        return col4
    } else if ((col7 === col8 && col8 === col9) && (col7 === 'X' || col7 === 'O')){
        endGame(col7)
        return col7
    } else if ((col1 === col4 && col4 === col7) && (col4 === 'X' || col4 === 'O')){
        endGame(col1)
        return col1
    } else if ((col2 === col5 && col5 === col8) && (col2 === 'X' || col2 === 'O')){
        endGame(col2)
        return col2
    } else if ((col3 === col6 && col6 === col9) && (col3 === 'X' || col3 === 'O')){
        endGame(col3)
        return col3
    } else if ((col1 === col5 && col5 === col9) && (col1 === 'X' || col1 === 'O')){
        endGame(col1)
        return col1
    }else if ((col3 === col5 && col5 === col7) && (col3 === 'X' || col3 === 'O')){
        endGame(col3)
        return col3
    } else if (col_array.includes('') === false){
        endGame('tie')
        return 'tie'
    }else{
        //console.group('no trigger')
        return false
    }
}
