window.onload = function () {
    let grid = $('#grid');

    let width = window.innerWidth;
    let height = window.innerHeight;

    let dimension = width < height ? width : height;
    dimension -= dimension * 0.3;
    $('#grid').append(this.createGrid(dimension, 21));

    $('#animate').on('click', function () {
        animate();
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

async function animate() {
    $('#5_6').css({
        "transform": "scale(1.2)",
        "transition": "0.5s",
        "background-color": "#54e375"
    });
    await new Promise(resolve => setTimeout(resolve, 500));
    $('#5_6').css({
        "transform": "scale(1)",
        "transition": "3s",
        "background-color": "#5e5e5e"
    });
}
