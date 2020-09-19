import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

//Components
import App from '../App'
import Cadastro from '../components/Cadastro/Cadastro'
import Consulta from '../components/Consulta/Consulta'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/cadastroCliente' component={Cadastro} />
            <Route path='/consultaCliente' component={Consulta} />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
)
