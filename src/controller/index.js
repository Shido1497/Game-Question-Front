import Home from './home.controller';
import NotFound from './404.controller';
import Login from './login.controller';

const pages = {
   home: Home,
   notFound: NotFound,
   login: Login
} 

export {pages};