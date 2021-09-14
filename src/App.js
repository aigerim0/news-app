import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./views/Home";
import News from "./views/News";
import NewsDetails from "./views/NewsDetails";
import NotFount from "./views/NotFount";
import Registration from "./views/Registration";
import LogIn from "./views/LogIn";

function App() {
    return (
        <Router>
           <Switch>
               <Route exact path='/'> <Home/> </Route>
               <Route path='/news'> <News/> </Route>
               <Route path='/new/:id'> <NewsDetails/> </Route>
               <Route path='/login'><LogIn/></Route>
               <Route path='/registration'><Registration/></Route>
               <Route path='*'><NotFount/></Route>
           </Switch>
        </Router>

    );
}

export default App;
