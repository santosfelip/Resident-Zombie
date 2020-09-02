import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom';

//components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//Function External
import {  getPeopleById, postUpdateInfected } from '../RegisterSurvivor/service'

//RadioGroup component
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({

    container: {
        display: 'block',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
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
  Label: {
    color: '#fff',
  }
}))


async function upDate(state, value){

  var message = 'Error';

  if(state.trim().length > 0 && value.trim().length > 0){
    const people = await getPeopleById(state);


    if(people){
      people.infected = value === "infected"? true : false;
        message = await postUpdateInfected(people);
    } else {
      message = 'No survivors found';
    }
  } else {
    message = 'Data Required';
  }

  alert(message);

}

const InfectedSurvivor = () => {
  const [state, setState]  = useState('');
  const [value, setValue] = useState('Infected');

  const classes = useStyles();
  const history = useHistory();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return(
      <div className={classes.container}>
        <h1>INFECTED SURVIVOR</h1>
        <h2>Enter the ID of Survivor</h2>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            placeholder="Enter your ID"
            onChange={(e) => setState(e.target.value)}
            className={classes.Field}
          />

        <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.Label}>check the box, please</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="infected" control={<Radio />} label="Infected" />
            <FormControlLabel value="Heal" control={<Radio />} label="Heal" />
          </RadioGroup>
        </FormControl>

        <button
            className={classes.btn2}
            onClick={() => upDate(state,value)}
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


export default InfectedSurvivor;
