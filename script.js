let turn = 'X';
let gameover =  false;
const changeTurn = ()=>{
    return turn === "X"?"O" : "X"
}
const win = ()=>{
    let text = document.getElementsByClassName('text');
  let king = [  
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  king.forEach(e => {
    if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) && (text[e[0]].innerText !=="")){
        document.querySelector('.info').innerText = text[e[0]].innerText + " WIN"
        gameover = true;
    }
  })
}
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element =>{
    let text = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(text.innerText === ''){
            text.innerText = turn;
            turn = changeTurn();
            win();
            if (!gameover){document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;}
        }
        })
    })
    let reset = document.querySelector(".reset");
    reset.addEventListener('click', () => {
        let text = document.querySelectorAll('.text');
        Array.from(text).forEach(element =>{
            element.innerText = ""
        });
        turn ='X';
        gameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    })