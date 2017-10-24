import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from "material-ui/RaisedButton";
import Dropzone from "react-dropzone";

const AtividadesList = ({ lista, loading, onDrop, handleSubmit, onSubmit }) => (
    <div>
        <Table selectable={true}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>
                        ID
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Nome
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Código
                    </TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={true}>
                {lista && lista.map(item =>
                    <TableRow key={item.id}>
                        <TableRowColumn>{item.id}</TableRowColumn>
                        <TableRowColumn>{item.nome}</TableRowColumn>
                        <TableRowColumn>{item.operacao.codigo}</TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>

        <form onSubmit={(e) => e.preventDefault()}>
            <Dropzone multiple={false}
                onDrop={onDrop}
                accept=".xls, .xlsx"
                style={{}} >
                <div>
                    <RaisedButton fullWidth={true} label="Selecionar XLSX" />
                </div>
            </Dropzone>

            <RaisedButton
                label="Enviar"
                primary={true}
                type="submit"
                onClick={handleSubmit((values) => onSubmit(values))} />
        </form>

        {!lista.length ? "Sem registro" : ""}

        {loading ? <CircularProgress /> : null}
    </div>
);

AtividadesList.PropTypes = {
    lista: PropTypes.array,
    loading: PropTypes.bool,
    onDrop: PropTypes.func,
    onSubmit: PropTypes.func
};

export default AtividadesList;