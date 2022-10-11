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
    $('#tic-tac-toe').after('<br><br><div class="container text-center"><button class="btn btn-light">Reset</button></div>')
}

function player(){
    let counter = 0;
}


ticTacToeBuilder();


//counter that shows whose turn it is