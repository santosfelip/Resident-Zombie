import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import FormularioCadastro from '../Forms/FormularioCadastro';

import {getClientes, deleteCliente} from '../../infra/service';

export default function FormDialog({ data, setData }) {
  const [open, setOpen] = useState(false);

  const Deletar = async() => {
    const resp = await deleteCliente(data._id);

    if(resp === 'Sucess') {
      alert("Cliente Removido com sucesso!");
      window.location.reload();
    }else {
      alert("Erro ao remover Cliente!");
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Consultar
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <FormularioCadastro DataInicial={data} tituloBotao={'Alterar'} />

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={Deletar} color="primary">
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
