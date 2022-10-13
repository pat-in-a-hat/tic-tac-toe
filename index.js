//Montana Code School Week 11 Project

$('.btn-dark').on('click', () => {
    $('.btn').hide();
    ticTacToeBuilder();
})

/*$('.btn-light').on('click', () => {
    $('#tic-tac-toe').remove();
    ticTacToeBuilder();
})*/

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
            /*const row_col = document.getElementById(`col-${i}-${ii}`)
            const div_cards = document.createElement('div')
            div_cards.className = 'cell border bg-light'
            const test = document.createTextNode('ii')
            div_cards.appendChild(test)
            row_col.appendChild(div_cards)*/
            }
            //div_cards.setAttribute('style', "width: 80px height: 80px")
            
        }

    const br = document.createElement('br')
    const btn_div = document.createElement('div')
    btn_div.className = 'text-center justify-content-center'
    const button = document.createElement('button')
    button.className = 'btn btn-light'
    const reset = document.createTextNode('Reset')
    button.appendChild(reset)
    table.appendChild(br)
    table.appendChild(br)
    table.appendChild(br)
    table.appendChild(btn_div)
    btn_div.appendChild(button)

    player();

}


   
    /*
    $('#tic-tac-toe').prepend('<div class="row text-center justify-content-center" id="players"></div>')
    $('#players').append('<div class="col"><h1>Player X</h1></div>')
    $('#players').append('<div class="col"><h1>Player O</h1></div>')
    for(let i = 0; i <3; i++){
        $('#tic-tac-toe').append(`<div class="row gx-5 justify-content-center" id='row-${i}'></div>`)
        for(let ii = 0; ii <3; ii++){
            $(`#row-${i}`).append(`<div class="col-3 border"></div>`)
        }
    }
    $('.border').append('<div class="card "></div>')
    $('#tic-tac-toe').after('<br><br><div class="container text-center"><button class="btn btn-light">Reset</button></div>')*/

function player(){
    let counter = 0;
    let rows = document.querySelectorAll('.game--container')
    for (let row of rows){
        let children = row.children
            for (let child of children){
                let player1 = document.getElementById('player1')
                let player2 = document.getElementById('player2')
                document.getElementById(`${child.id}`).addEventListener('click', () => {
                    if (referee() === 'X' || referee() === 'O'){
                        document.getElementById(`tic-tac-toe`).removeEventListener('click', () => {
                            console.log(referee)
                            console.log('game finished!')
                        })
                        console.log('game finished')
                        const winner = document.createElement('h1')
                        if (referee() === 'X'){
                            const win_phrase = document.createTextNode(`X Wins!`)
                            winner.appendChild(win_phrase)
                        } else{
                            const win_phrase = document.createTextNode(`O Wins!`)
                            winner.appendChild(win_phrase)
                        }
                        winner.className = 'text-center justify-content-center'
                        document.getElementById('tic-tac-toe').appendChild(winner)
                    } else if ((child.innerHTML === 'X' || child.innerHTML === 'O')){
                        console.log('already played')
                    } else if (counter % 2 === 0){
                        let X = document.createTextNode('X')
                        counter++
                        child.appendChild(X)
                        player1.className = 'col-3 h1'
                        player2.className = 'col-3 h1 card bg-light'
                    } else {
                        let O = document.createTextNode('O')
                        counter++
                        child.appendChild(O)
                        player1.className = 'col-3 h1 card bg-light'
                        player2.className = 'col-3 h1'
                    }
                })
                
            }
            
        }
}

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


    if (col1 === col2 && col2 === col3){
        return col1
    } else if (col4 === col5 && col5 === col6){
        return col4
    } else if (col7 === col8 && col8 === col9){
        return col7
    } else if (col1 === col4 && col4 === col7){
        return col1
    } else if (col2 === col5 && col5 === col8){
        return col2
    } else if (col3 === col6 && col6 === col9){
        return col3
    } else if (col1 === col5 && col5 === col9){
        return col1
    }else if (col3 === col5 && col5 === col7){
        return col3
    } else{
        return false
    }
}



function reset(){
    $('.btn-light').on('click', () => {
        while(document.getElementById('tic-tac-toe').firstChild){
            document.getElementById('tic-tac-toe').removeChild(document.getElementById('tic-tac-toe').firstChild)
        }
    })
    ticTacToeBuilder();
}

//counter that shows whose turn it is

//check to make sure it hasn't been clicked yet
//index of arrays for correct combinations then compare to array of selected