import React from 'react';
import { useHistory } from 'react-router-dom';

//Components
import { makeStyles } from '@material-ui/core/styles';
import Tabela from '../Tabela/Tabela'


const useStyles = makeStyles((theme) => ({

    btn: {
        margin: theme.spacing(4),
    },
}))

const Consulta = () => {
    const classes = useStyles();
    const history = useHistory();

    return(
        <div>
          <h1>Clientes Cadastrados</h1>
          <Tabela />
          <button
              className={classes.btn}
              onClick={() => history.push('dashboard')}
          >
          Voltar
          </button>
        </div>
    )
}


export default Consulta;
