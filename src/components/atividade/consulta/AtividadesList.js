import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

const AtividadesList = ({ lista, loading }) => (
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

        { !lista.length ? "Sem registro": ""}

        { loading ? <CircularProgress/> : null }
    </div>
);

AtividadesList.PropTypes = {
    lista: PropTypes.array,
    loading: PropTypes.bool
};

export default AtividadesList;