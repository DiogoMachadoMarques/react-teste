import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
    height: 300,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

class LoginForm extends React.Component {
    
    state = {
        data: {},
        loading: false,
        error: {}
    };

    onChange = e => {
        console.log(e.target.value);
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value}
        })
    }

    render() {
        const { data } = this.state;

        return (            
            <Paper style={style}>
                <form>
                    <TextField                                  
                        value={data.email}
                        type="text"
                        onChange={this.onChange}/>

                    <TextField 
                        type="password"
                        value={data.password}
                        onChange={this.onChange}
                        floatingLabelText="Email"/>

                    <RaisedButton>
                        Botão
                    </RaisedButton>

                </form>
            </Paper>
        );
    }

}

export default LoginForm;