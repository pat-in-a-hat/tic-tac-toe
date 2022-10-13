//Montana Code School Week 11 Project

/*$('.btn-dark').on('click', () => {
    $('.btn').hide();
    ticTacToeBuilder();
})

$('.btn-light').on('click', () => {
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
    header1.className = 'col h1 card bg-light'
    header2.className = 'col h1 card bg-secondary'
    header1.appendChild(playerx)
    header2.appendChild(playero)
    const parent_div = document.querySelector(".row.text-center.justify-content-center")
    parent_div.appendChild(header1)
    parent_div.appendChild(header2)

    for(let i = 0; i <3; i++){
        const row = document.createElement('div')
        row.className = "row row-cols-2 row-cols-lg-5 g-2 g-lg-3 text-center justify-content-center"
        row.setAttribute('id', `row-${i}`)
        table.appendChild(row)
        const row_div = document.getElementById(`row-${i}`)
        for(let ii = 0; ii <3; ii++){
            const div_cols = document.createElement('div')
            div_cols.className = 'col'
            div_cols.setAttribute('id', `col-${i}-${ii}`)
            row_div.appendChild(div_cols)
            const row_col = document.getElementById(`col-${i}-${ii}`)
            const div_cards = document.createElement('div')
            div_cards.className = 'p-3 border bg-light'
            const test = document.createTextNode('test')
            div_cards.appendChild(test)
            row_col.appendChild(div_cards)
            }
            //div_cards.setAttribute('style', "width: 80px height: 80px")
            
        }

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
}


ticTacToeBuilder();


//counter that shows whose turn it is

//check to make sure it hasn't been clicked yet
//index of arrays for correct combinations then compare to array of selected