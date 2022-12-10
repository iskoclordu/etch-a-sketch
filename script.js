let n='';
function empty(div) {
    div.innerHTML = ""; 
}

function createRow(n){
  
}

function createNewGrid(n=16){
    if (isNaN(n)||n<1||n>100){
    n=prompt('Please enter an integer between 1 and 100');
    }
    else {
        const containerGrid=document.querySelector('.container-grid');
        empty(containerGrid);


        for(i=0;i<n;i++){
            const containerGrid=document.querySelector('.container-grid');
            const rowContainer=document.createElement('div');
            containerGrid.appendChild(rowContainer);
            rowContainer.classList.add(`column`);
            rowContainer.setAttribute('id',`${i}`);

            for(j=0;j<n;j++){
                const nodelist=document.querySelectorAll('.column');
                const minor=document.createElement('div');
                nodelist[i].appendChild(minor);
                minor.classList.add('row');
                minor.setAttribute('id',`${j}`);
            }
        }
    }

}

const newGame=document.querySelector('#new-game');
newGame.addEventListener('click',()=>{
    n=prompt('Enter the grid size. (Between 1 and 100)');
    createNewGrid(n);
});




let penColor='';

const black=document.querySelector('#black');
black.addEventListener('click',()=>{
    penColor='#000000';
});

const pink=document.querySelector('#pink');
pink.addEventListener('click',()=>{
    penColor='#ffc0cb';
});

const red=document.querySelector('#red');
red.addEventListener('click',()=>{
    penColor='#ff0000';
});

const blue=document.querySelector('#blue');
blue.addEventListener('click',()=>{
    penColor='#0000ff';
});

const green=document.querySelector('#green');
green.addEventListener('click',()=>{
    penColor='#00ff00';
});

const brown=document.querySelector('#brown');
brown.addEventListener('click',()=>{
    penColor='#8d470e';
});

const yellow=document.querySelector('#yellow');
yellow.addEventListener('click',()=>{
    penColor='rgb(255, 207, 51)';
});

const rainbow=document.querySelector('#rainbow');
rainbow.addEventListener('click',()=>{
    penColor='random';
});

const eraser=document.querySelector('#eraser');
eraser.addEventListener('click', ()=>{
    penColor='';
});



createNewGrid(16);

let drawingActive=false;

function draw() {
    const pixel=document.querySelector('.container-grid');

    pixel.addEventListener('mousedown',()=>{
        drawingActive=true
    });

    pixel.addEventListener('mouseup',()=>{
        if (drawingActive){
            drawingActive=false;
        }
    });


    
    pixel.addEventListener('mousemove',(e)=>{
        if (drawingActive){
            if(penColor==='random'){
                let r=Math.floor(Math.random()*255);
                let g=Math.floor(Math.random()*255);
                let b=Math.floor(Math.random()*255);
                let randomColor='rgb'+`(${r}, ${g}, ${b})`;
                e.target.setAttribute('style',`background:${randomColor}`);
            }
            else{
                e.target.setAttribute('style',`background:${penColor}`);
            }
        }

    });
}

draw();



