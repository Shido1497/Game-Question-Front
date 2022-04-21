import {pages} from '../controller/index'
let content = document.getElementById('root');


const router = async (route) => {
    console.log(route);
    content.innerHTML ='';
    
    if( sessionStorage.getItem("playerInformation"))
    {
        switch(route) {
            case '#/':{
               console.log('Ingreso');
                return content.appendChild(await pages.home()); 
            }
               
            default:
                {
                    console.log('404!!')
                    return content.appendChild(pages.notFound()); 
                }
        } 
    }
    else
    {
        content.appendChild(await pages.login()); 
    }
 
}

export {router};