import React from 'react';
import { useHistory } from 'react-router-dom';

//Components
import { makeStyles } from '@material-ui/core/styles';
import RegisterSurvivorForm from '../Forms/FormularioCadastro';

const useStyles = makeStyles((theme) => ({

    btn: {
        margin: theme.spacing(4),
    },
}))

const Cadastro = () => {
    const classes = useStyles();
    const history = useHistory();

    return(
        <>
          <RegisterSurvivorForm />
          <button
              className={classes.btn}
              onClick={() => history.push('dashboard')}
          >
          Voltar
          </button>
        </>
    )
}


export default Cadastro;
