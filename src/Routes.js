import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AddStudent from './pages/Students/AddStudent';

import ViewStudent from './pages/Students/ViewStudents';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact component={Home} /> */}
                <Route path="/" exact component={AddStudent} />
                <Route path="/view-students" exact component={ViewStudent} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;