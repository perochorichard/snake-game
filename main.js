import Snake from './snake.js';
import Position from './position.js';
let dir = new Position(1, 0);
window.onload = function () {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let s = new Snake();

    let dimension = width < height ? width : height;
    dimension -= dimension * 0.3;
    $('#grid').append(createGrid(dimension, 21));

    $('#move').on('click', function () {
        playGame();
    });

    $('#grow').on('click', function () {
        clear(s);
        s.grow(new Position(1, 0));
        display(s);
    });
}

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            dir = new Position(-1, 0);
            break;
        case 38: // up
            dir = new Position(0, -1);
            break;
        case 39: // right
            dir = new Position(1, 0);
            break;
        case 40: // down
            dir = new Position(0, 1);
            break;
        default: return;
    }
    e.preventDefault();
})

async function playGame() {
    let gameEnded = false;
    let snake = new Snake();
    let count = 0;
    while (!gameEnded) {
        await sleep(500).then(() => {
            clear(snake);
            snake.move(dir);
            display(snake);
        });
    }
}

async function display(snake) {
    for (let i = 0; i < snake.body.length; i++) {
        let pos = snake.body[i];
        $('#' + pos.y + '_' + pos.x).css('background-color', '#54e375');
    }
}
function clear(snake) {
    for (let i = 0; i < snake.body.length; i++) {
        let pos = snake.body[i];
        $('#' + pos.y + '_' + pos.x).css('background-color', '#808080');
    }
}

function createGrid(dimension, count) {
    let colors = ['#808080', '#5e5e5e'];
    let squaresize = dimension / count;
    let tbody = $('<tbody/>');

    let color = 0;

    for (let i = 0; i < count; i++) {
        let tr = $('<tr/>');
        for (let j = 0; j < count; j++) {
            let td = $('<td/>')
                .css({ "width": squaresize, "height": squaresize, "background-color": colors[color] })
                .attr('id', i + '_' + j);
            tr.append(td);
            color = color == 0 ? 1 : 0;
        }
        tbody.append(tr);
    }

    return tbody;
}
async function animate_in(pos) {
    let intime = 1000;
    let unit = $('#' + pos.y + '_' + pos.x);
    unit.css({
        "transform": "scale(1.2)",
        "transition": intime + 'ms',
        "background-color": "#54e375"
    });
    await sleep(intime);
}

async function animate_out(pos) {
    let outtime = 1000;
    let unit = $('#' + pos.y + '_' + pos.x);
    let originalColor = '#808080';
    unit.css({
        "transform": "scale(1)",
        "transition": outtime + 'ms',
        "background-color": originalColor
    });
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}