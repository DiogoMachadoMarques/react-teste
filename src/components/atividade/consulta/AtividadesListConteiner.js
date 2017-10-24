import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listaAtividades } from '../actions';
import AtividadesList from './AtividadesList';
import TextField from 'material-ui/TextField';

class AtividadesListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalPermissaoOpen: "false",
        };
    }

    handlePesquisar(event) {
        // if (event.target.value) {
            this.props.listaAtividades(event.target.value);
        // }
    }

    componentWillMount() {
        //this.props.listaAtividades(1);
    }

    render() {

        return (
            <div>
                <TextField
                    hintText="Informe a operação"
                    onChange={this.handlePesquisar.bind(this)}
                />

                <AtividadesList {...this.props}
                    lista={this.props.lista}
                    loading={this.props.loading} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    lista: state.atividades.lista ? state.atividades.lista : [],
    loading: state.atividades.loading,
});

AtividadesListContainer.propTypes = {
    listaAtividades: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    {
        listaAtividades,
    }
)(AtividadesListContainer);