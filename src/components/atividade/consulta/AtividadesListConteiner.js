import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listaAtividades, enviarArquivo } from '../actions';
import { reduxForm, reset as resetForm } from 'redux-form';
import AtividadesList from './AtividadesList';
import TextField from 'material-ui/TextField';

const formName = 'ProjetoUploadForm';

class AtividadesListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalPermissaoOpen: "false",
            selectedFile: null,
        };
    }

    handlePesquisar(event) {
        // if (event.target.value) {
        this.props.listaAtividades(event.target.value);
        // }
    }

    onDrop(files) {
        console.log(files);
        this.setState({ selectedFile: files[0] });
    }

    onSubmit() {
        this.props.enviarArquivo(this.state.selectedFile).then(() => {
            console.log("Enviou arquivo");
        }).catch((error) => {
            console.log(error);
        });
        console.log("aqui");
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
                    loading={this.props.loading}
                    onDrop={this.onDrop.bind(this)}
                    onSubmit={this.onSubmit.bind(this)} />
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
    enviarArquivo: PropTypes.func.isRequired
};

const form = reduxForm({
    form: formName
});

export default connect(
    mapStateToProps,
    {
        listaAtividades,
        enviarArquivo
    }
)(form(AtividadesListContainer));