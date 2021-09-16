import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./views/Home";
import News from "./views/News";
import NewsDetails from "./views/NewsDetails";
import NotFount from "./views/NotFount";
import Registration from "./views/Registration";
import LogIn from "./views/LogIn";
import Layout from "./Layout";
import Claim from "./views/Claim";

function App() {
    return (
        <Router>
       <Layout>
           <Switch>
               <Route exact path='/'> <Home/> </Route>
               <Route exact path='/news'> <News/> </Route>
               <Route path='/news/:id'> <NewsDetails/> </Route>
               <Route path='/login'><LogIn/></Route>
               <Route path='/claim'><Claim/></Route>
               <Route path='/registration'><Registration/></Route>
               <Route path='*'><NotFount/></Route>
           </Switch>
       </Layout>
        </Router>

    );
}

export default App;
