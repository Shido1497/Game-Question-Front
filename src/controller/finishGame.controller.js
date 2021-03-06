import view from '../views/home/components/finishGame.html'

export  default async (options) =>{
    debugger;
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    await loadFinishGameInfoAsync(options, divElement);
    sessionStorage.removeItem("MatchPoints");
    sessionStorage.removeItem("RoundData");
    sessionStorage.removeItem("Match");

    const btnPlayAgain = divElement.querySelector('#btnPlayAgain');


    await btnPlayAgain.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log("entro al boton");
        setTimeout("location.reload(true);",0);
    });

    return divElement;
}

const loadFinishGameInfoAsync = async (options, divElement) =>{
    console.log("loadFinishGameInfoAsync");
    var info = JSON.parse(options);
    const questionElement= divElement.querySelector('#gameInfo');
    questionElement.innerHTML +=` <a>${info.statusDescription}</a>`;


    const anwerElement= divElement.querySelector('#points');
    anwerElement.innerHTML = ` <a>${info.totalPoints}</a>`;


}