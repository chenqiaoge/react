import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Login from '../pages/login/login';
import Homes from '../pages/home/home-box';
// import Lists from '../pages/lists/list';
// import Detail from '../pages/lists/detail';

const getRouter = () => {
    return (
        <Router>
            <div>
                
                <Switch>
                    <Route exact  path="/" component={Login} />
                    <Route  path="/home" component={Homes} />
                    {/* <Route path="/home/list" component={Lists} />
                    <Route path="/home/list1" component={Detail}></Route> */}
                    
                </Switch>
            </div>
        </Router>
    )

}

export default getRouter;
