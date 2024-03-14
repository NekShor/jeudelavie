function fillRandom(){
    clearCells()
    var cells = document.querySelectorAll('.cell');
    for (var k = 0; k < cells.length; k++) {
        var i = cells[k].getAttribute('h');
        var j = cells[k].getAttribute('w');
    
        var pourcentage = document.getElementById('pourcentage').value;
        pourcentage = 100 - pourcentage;
        pourcentage = pourcentage / 100;
        var rand = Math.random();
        if(rand > pourcentage) {
            cells[k].classList.add('life');
            champ.push(i + ' ' + j);
        } else {
            cells[k].classList.remove('life');
        }
    
    }
}

function clearCells (){
    nombreTour = 0;
    var cells = document.querySelectorAll('.life');
    for (var k = 0; k < cells.length; k++) {
        cells[k].classList.remove('life');
    }
    champ = [];
}

function rotateForme(cells){
    var newCells = [];
    for (var i = 0; i < cells.length; i++) {
        var x = cells[i][0];
        var y = cells[i][1];
        newCells.push([y, -x]);
    }
    return newCells;
}


function addForme(i, j, previsualisation = false){
    if(previsualisation){
        var allTest = document.querySelectorAll('.previsualisation');
        for (var k = 0; k < allTest.length; k++) {
            allTest[k].classList.remove('previsualisation');
        }
    }
    i = parseInt(i);
    j = parseInt(j);
    
    var forme = json[document.getElementById('forme').value];
    rotate = rotate % 4;
    var cellsUsed = [];
    if(rotate < 0) rotate = 3;
    if(rotate === 0) {
        cellsUsed = forme.cells;
    }else if(rotate === 1) {
        cellsUsed = rotateForme(forme.cells);
    }else if(rotate === 2) {
        cellsUsed = rotateForme(rotateForme(forme.cells));
    }else if(rotate === 3) {
        cellsUsed = rotateForme(rotateForme(rotateForme(forme.cells)));
    }
    for (var k = 0; k < cellsUsed.length; k++) {
        var x = cellsUsed[k][0];
        var y = cellsUsed[k][1];
        var cell = document.querySelector('[w="' + (j + y) + '"][h="' + (i + x) + '"]');
        if(!previsualisation){
            if(!forme.reversed || !champ.includes((i + x) + ' ' + (j + y))){
                champ.push((i + x) + ' ' + (j + y));
                if(cell){
                    cell.classList.add('life');
                }
            }else{
                champ = champ.filter((v) => v !== (i + x) + ' ' + (j + y));
                if(cell){
                    cell.classList.remove('life');
                }
            }
        }else{
            if(cell){
                cell.classList.add('previsualisation');
            }
        }
    }
}


function createField (width, height){
    nombreTour = 0
    var conteiner = document.getElementById('conteiner');
    conteiner.innerHTML = '';

    for (var i = 0; i < height; i++) {
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.style.display = 'flex';
        row.style.justifyContent = 'center';

        for (var j = 0; j < width; j++) {
            var cell = document.createElement('button');
            cell.setAttribute('w', j);
            cell.setAttribute('h', i);
            cell.setAttribute('class', 'cell');
            cell.style.width = '10px';
            cell.style.height = '10px';
            cell.style.border = 'none';
            cell.style.display = 'flex';
            cell.style.justifyContent = 'center';
            cell.style.alignItems = 'center';
            cell.style.margin = '0';
            cell.style.padding = '0';
            cell.style.cursor = 'pointer';

            cell.addEventListener('click', function() {
                var i = this.getAttribute('h');
                var j = this.getAttribute('w');

                addForme(i, j);
            });

            cell.addEventListener('mouseover', function() {
                var i = this.getAttribute('h');
                var j = this.getAttribute('w');
                
                if (mouseDown) {
                    addForme(i, j);
                }else{
                    addForme(i, j, true);
                }

            });

            row.appendChild(cell);
        }
        conteiner.appendChild(row);
    }
}