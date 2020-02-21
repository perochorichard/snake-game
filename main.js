import Snake from './snake.js';
import Position from './position.js';

window.onload = function () {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let s = new Snake(21);

    let dimension = width < height ? width : height;
    dimension -= dimension * 0.3;
    $('#grid').append(createGrid(dimension, 21));

    $('#move').on('click', function () {
        
        s.move(new Position(0, 1));
    });
    $('#grow').on('click', function () {
        
        s.grow(new Position(0, 1));
    });
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

async function animate(id) {
    let intime = 100;
    let outtime = 1000;
    let unit = $('#' + id);
    let originalColor = unit.css('background-color');
    unit.css({
        "transform": "scale(1.2)",
        "transition": intime + 'ms',
        "background-color": "#54e375"
    });
    await sleep(intime);
    unit.css({
        "transform": "scale(1)",
        "transition": outtime + 'ms',
        "background-color": originalColor
    });
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}