import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom';

//components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//Function External
import {  getPeopleById, postUpdateLocation } from '../RegisterSurvivor/service'


const useStyles = makeStyles((theme) => ({

    container: {
        marginTop:  theme.spacing(4),
        padding: theme.spacing(4),
        textAlign: 'center',
        color: 'white',
        width: '95%',
        height: '90%',
        backgroundColor: '#242526',
    },
    Field: {
      background: "#fff",
      maxWidth: '400px',
      padding: theme.spacing(1),
      color: 'black',
      fontSize: '16px',
      margin: theme.spacing(2)
    },
    btn: {
        margin: theme.spacing(4),
        alignContent: 'center',
    },
    btn2: {
      marginTop: theme.spacing(4),
      alignContent: 'center',
  },
}))


async function upDate(state){

  var message = 'Error';

  if(state.id.trim().length > 0 && state.Longitude.trim().length > 0
     && state.Longitude.trim().length>0){
    const people = await getPeopleById(state.id);

    people.Surrogate = state.id;
    people.Longitude = state.Longitude;
    people.Latitude = state.Latitude;

    message = await postUpdateLocation(people);
  } else {
    message = 'Data Required';
  }

  alert(message);

}

const Location = () => {
    const [state, setState]  = useState({
      id: '',
      Latitude: '',
      Longitude: '',
    });

    const classes = useStyles();
    const history = useHistory();

    return(
        <div className={classes.container}>
          <h1>MY LOCATION</h1>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              type="text"
              fullWidth
              placeholder="Enter your ID"
              onChange={(e) => setState(
                {
                  ...state,
                  id: e.target.value,
                }
              )}
              className={classes.Field}
            />

          <TextField
              autoFocus
              margin="dense"
              id="name"
              type="number"
              fullWidth
              placeholder="Laitude"
              onChange={(e) => setState(
                {
                  ...state,
                  Latitude: e.target.value
                }
              )}
              className={classes.Field}
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              type="number"
              fullWidth
              placeholder="Laitude"
              onChange={(e) => setState(
                {
                  ...state,
                  Longitude: e.target.value,
                }
              )}
              className={classes.Field}
            />

          <button
              className={classes.btn2}
              onClick={() => upDate(state)}
          >
            Update
          </button>

          <button
              className={classes.btn}
              onClick={() => history.push('dashboard')}
          >
          Back
          </button>

        </div>
    )
}


export default Location;
