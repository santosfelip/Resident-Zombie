import React, {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Model from '../Model/Model';

import { getClientes } from '../../infra/service';

import './style.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTables() {

  const classes = useStyles();
  const [state, setState] = useState([{}]);
  const [data, setData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      const resp = await getClientes();

        setState(resp.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="right">CPF/CNPJ</StyledTableCell>
              <StyledTableCell align="right">Telefone</StyledTableCell>
              <StyledTableCell align="right">CEP</StyledTableCell>
              <StyledTableCell align="right">Logradouro</StyledTableCell>
              <StyledTableCell align="right">Número</StyledTableCell>
              <StyledTableCell align="right">Bairro</StyledTableCell>
              <StyledTableCell align="right">E-mail</StyledTableCell>
              <StyledTableCell align="right">Cidade</StyledTableCell>
              <StyledTableCell align="right">Estado</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.nome}
                </StyledTableCell>
                <StyledTableCell align="right">{row.identificacao}</StyledTableCell>
                <StyledTableCell align="right">{row.telefone}</StyledTableCell>
                <StyledTableCell align="right">{row.cep}</StyledTableCell>
                <StyledTableCell align="right">{row.logradouro}</StyledTableCell>
                <StyledTableCell align="right">{row.numero}</StyledTableCell>
                <StyledTableCell align="right">{row.bairro}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.cidade}</StyledTableCell>
                <StyledTableCell align="right">{row.estado}</StyledTableCell>
                <StyledTableCell align="right">
                    <Model data={row} setData={setData} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
