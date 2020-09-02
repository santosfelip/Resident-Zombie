import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';

export default function FormDialog({ items , setItems }) {
  const [open, setOpen] = useState(false);

  const[state, setState] = useState([
    {
      name: '',
      value: 0,
      quant: 0
    },{
      name: '',
      value: 0,
      quant: 0
    },{
      name: '',
      value: 0,
      quant: 0
    },{
      name: '',
      value: 0,
      quant: 0
    }]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeText =  (event, index) => {

    state[index].quant = Number(event.target.value);

  }

  const handleSave = () => {
    var items = [];
    var cont = 0;
      for(let i = 0; i < 4; i++) {
          if(state[i].value > 0 && state[i].quant > 0 && state[i].name.trim().length !== 0) {
            items.push(state[i]);
          } else {
            cont++;
          }
      }
      if(cont===4){
        alert('Data Required');
      } else {
        setItems(items);
        setState({},{},{},{});
        handleClose();
      }
      cont = 0;
  }

  const handleChange = (event, index ) => {
    //Salve the name of Item
    var name;
    switch(event.target.value) {
        case '14' :
            name = 'Fiji Water';
        break;
        case '12' :
            name = 'Campbell Soup';
        break;
        case '10':
            name = 'First Aid Pouch'
        break;
        case '8':
            name = 'AK47'
        break;
        default:
            name = ''
    }
    AddItem(name, Number(event.target.value), state[index].quant, index);
  };

  const AddItem = (name, value, quant, index) => {
    var newItem = state;

    newItem[index].name = name;
    newItem[index].value = value;
    newItem[index].quant = quant;

    setState(newItem);
  }

  function RenderSelect() {
    let selects = [];
    for(let i = 0; i < 4; i++) {
      selects.push(
        <div key={i}>
          <label>{`Item ${i+1}`}</label>
            <Select
              native
              renderValue={() => state[i].name}
              onChange={(e) => handleChange(e,i)}
              className='Select'
            >
              <option value={0} >Select Item</option>
              <option value={14}>Fiji Water</option>
              <option value={12}>Campbell Soup</option>
              <option value={10}>First Aid Pouch</option>
              <option value={8}>AK47</option>
            </Select>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={'Quantity '}
              type="number"
              fullWidth
              onChange={(e) => handleChangeText(e,i)}
            />
          </div>
      );
    }

    return selects;
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Register Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select Item and insert your quantity
          </DialogContentText>

          {RenderSelect()}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
