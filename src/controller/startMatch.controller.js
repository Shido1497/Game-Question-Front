import view from '../views/home/components/startMatch.html'
import {httpClient} from './services/http.service'

export default async () =>{
    console.log('match')
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const btnStartMatch = divElement.querySelector('#btnStartMatch');

    await btnStartMatch.addEventListener('click', async (e) => {
     e.preventDefault();
     const data =  { playerId: 1};
     const match = await httpClient.post('https://localhost:5001/api/Match/CreateMatch',data);

     sessionStorage.setItem("Match", match);
     setTimeout("location.reload(true);",0);
    });

    return divElement;
}