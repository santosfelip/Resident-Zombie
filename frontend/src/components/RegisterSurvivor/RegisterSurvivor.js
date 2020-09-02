import React from 'react';
import { useHistory } from 'react-router-dom';

//Components
import { makeStyles } from '@material-ui/core/styles';
import RegisterSurvivorForm from '../Forms/RegisterForm';

const useStyles = makeStyles((theme) => ({

    container: {
        marginTop:  theme.spacing(4),
        padding: theme.spacing(4),
        marging: 'auto',
        textAlign: 'center',
        color: 'white',
        width: '95%',
        height: '90%',
        backgroundColor: '#242526',
    },
    btn: {
        margin: theme.spacing(4),
        alignContent: 'center',
    },
}))

const RegisterSurvivor = () => {
    const classes = useStyles();
    const history = useHistory();

    return(
        <div className={classes.container}>
          <h1>REGISTER NEW SURVIVOR</h1>
          <RegisterSurvivorForm />
          <button
              className={classes.btn}
              onClick={() => history.push('dashboard')}
          >
          Back
          </button>
        </div>
    )
}


export default RegisterSurvivor;
