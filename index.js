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
    header2.className = 'col-3 h1 bg-light'
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
                    if ((child.innerHTML === 'X' || child.innerHTML === 'O') || referee() === true){
                        console.log('already played')
                    } else if (counter % 2 === 0){
                        let X = document.createTextNode('X')
                        counter++
                        child.appendChild(X)
                        player1.className = 'col-3 h1 bg-light'
                        player2.className = 'col-3 h1 card bg-light'
                    } else {
                        let O = document.createTextNode('O')
                        counter++
                        child.appendChild(O)
                        player1.className = 'col-3 h1 card bg-light'
                        player2.className = 'col-3 h1 bg-light'
                    }
                })
                
            }
            
        }
}

function referee(){
    judge_array = [
        []
    ]
    const col1 = document.getElementById('row-0')
    const col2 = document.getElementById('row-1')
    const col3 = document.getElementById('row-2')
    return true
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