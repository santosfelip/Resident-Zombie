import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

//Imported Components
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Icon
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FolderSharedIcon from '@material-ui/icons/FolderShared';



const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width: theme.spacing(23),
        height: theme.spacing(28),
        margin: theme.spacing(1),
        backgroundColor: '#FFFFFF',
        '&:hover': {
            cursor: 'pointer',
            width: theme.spacing(25),
            height: theme.spacing(30),
            transition: 'all 0.4s ease',
        },

        [theme.breakpoints.down('sm')]:{
          width: theme.spacing(15),
          height: theme.spacing(20),
          margin: theme.spacing(1),
          '&:hover': {
            cursor: 'pointer',
            width: theme.spacing(18),
            height: theme.spacing(23),
            transition: 'all 0.4s ease',
        },
        }
    },
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        color: '#18191A',
        [theme.breakpoints.down('sm')]:{
          marginTop: theme.spacing(8),
          fontSize: '24px',
        }
    },
    Icon: {
        marginTop: theme.spacing(3),
        fontSize: theme.spacing(10),
        color: '#18191A',
        [theme.breakpoints.down('sm')]:{
          marginTop: theme.spacing(2),
          fontSize: theme.spacing(5),
        }
    },
    Subtitle: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        color: '#18191A',
        [theme.breakpoints.down('sm')]:{
          marginTop: theme.spacing(2),
          fontSize: '14px',
        }
    }
}))

const Dashboard = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Sistema Cadastro de Clientes</h1>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item >
                    <Paper
                        className={classes.paper}
                        elevation={5}
                        onClick={() => history.push('cadastroCliente')}
                    >
                        <AccountCircleIcon className={classes.Icon}/>
                        <h2 className={classes.Subtitle}>Cadastrar Cliente</h2>
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper
                        className={classes.paper}
                        elevation={5}
                        onClick={() => history.push('consultaCliente')}
                    >
                        <FolderSharedIcon className={classes.Icon}/>
                        <h2 className={classes.Subtitle}>Consultar Clientes</h2>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}


export default Dashboard;
