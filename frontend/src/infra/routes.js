import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

//Components
import App from '../App'
import RegisterSurvivor from '../components/RegisterSurvivor/RegisterSurvivor'
import Infectedsurvivor from '../components/InfectedSurvivor/Infectedsurvivor'
import Location from '../components/Location/Location'
import Reports from '../components/Reports/Reports'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/registerSurvivor' component={RegisterSurvivor} />
            <Route path='/locationEdit' component={Location} />
            <Route path='/infectedSurvivor' component={Infectedsurvivor} />
            <Route path='/reports' component={Reports} />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
)
