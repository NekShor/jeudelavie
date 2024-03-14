var nombreTour = 0;
var champ = [];
var pause = true;
var delay = 50;
var rotate = 0;
var mouseDown = false;

document.addEventListener('DOMContentLoaded', function() {
    interval();
    
    document.getElementById('submit').addEventListener('click', function (){createField(document.getElementById('width').value, document.getElementById('height').value)});
    document.getElementById('delay').addEventListener('change', function() {delay = this.value;});
    document.getElementById('rotate').addEventListener('click', function() {rotate++;});
    document.getElementById('clear').addEventListener('click', clearCells);
    document.getElementById('random').addEventListener('click', fillRandom);    
    document.getElementById('start').addEventListener('click', startAndPause);
    createField(document.getElementById('width').value, document.getElementById('height').value)
});
document.addEventListener('mousedown', function() {mouseDown = true;});
document.addEventListener('mouseup', function() {mouseDown = false;});



function selectCellConcerned(){
    var cellConcerne = [];
    for (var i = 0; i < champ.length; i++) {
        var x = champ[i].split(' ')[0];
        x = parseInt(x);
        var y = champ[i].split(' ')[1];
        y = parseInt(y);
        cellConcerne.push(x + ' ' + y);
        cellConcerne.push((x - 1) + ' ' + (y - 1));
        cellConcerne.push((x - 1) + ' ' + y);
        cellConcerne.push((x - 1) + ' ' + (y + 1));
        cellConcerne.push(x + ' ' + (y - 1));
        cellConcerne.push(x + ' ' + (y + 1));
        cellConcerne.push((x + 1) + ' ' + (y - 1));
        cellConcerne.push((x + 1) + ' ' + y);
        cellConcerne.push((x + 1) + ' ' + (y + 1));

    }
    cellConcerne = cellConcerne.filter((v, i, a) => a.indexOf(v) === i);
    return cellConcerne;
}

async function tour(){
    var timestamp = Date.now();
    var cellConcerne = selectCellConcerned();
    var newChamp = [];

    for (var i = 0; i < cellConcerne.length; i++) {
        var x = cellConcerne[i].split(' ')[0];
        x = parseInt(x);
        var y = cellConcerne[i].split(' ')[1];
        y = parseInt(y);
        var count = 0;

        var cellTL = champ.includes((x - 1) + ' ' + (y - 1)) ? 1 : 0 ;
        var cellT = champ.includes((x - 1) + ' ' + y) ? 1 : 0 ;
        var cellTR = champ.includes((x - 1) + ' ' + (y + 1)) ? 1 : 0 ;
        var cellL = champ.includes(x + ' ' + (y - 1)) ? 1 : 0 ;
        var cellR = champ.includes(x + ' ' + (y + 1)) ? 1 : 0 ;
        var cellBL = champ.includes((x + 1) + ' ' + (y - 1)) ? 1 : 0;
        var cellB = champ.includes((x + 1) + ' ' + y) ? 1 : 0;
        var cellBR = champ.includes((x + 1) + ' ' + (y + 1)) ? 1 : 0 ;

        count = cellTL + cellT + cellTR + cellL + cellR + cellBL + cellB + cellBR;
        var S = count;
        var E = champ.includes(x + ' ' + y) ? 1 : 0;

        var nextState = (S === 3) || (E === 1 && S === 2);
        if(nextState) {
            newChamp.push(x + ' ' + y);
        }

        var cell = document.querySelector('[w="' + y + '"][h="' + x + '"]');
        if(cell){
            if(nextState) {
                cell.classList.add('life');
            } else {
                cell.classList.remove('life');
            }
        }

    }
    champ = newChamp;

    var time = Date.now() - timestamp;
    nombreTour++
    console.log({'nombre cellules' : champ.length, 'temps tour' : time, 'tour' : nombreTour})
    return;
}   

function startAndPause() {
    pause = !pause;

    if(pause) {
        start.innerHTML = 'Start';
    } else {
        start.innerHTML = 'Pause';
    }
}

async function interval(){
    while(true){
        await delayWait(delay);
        if(pause) continue;
        await tour();
    }
}
async function delayWait(time){
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

