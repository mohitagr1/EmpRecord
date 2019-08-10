import React ,{Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions'
import {Card,CardSection,Button,Input,Spinner} from './commons';

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const {email,password}=this.props;
        this.props.loginUser({email,password});
    };
    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                    

                <CardSection>
                    <Input
                            secureTextEntry
                            label="Password"
                            placeHolder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                    />
                </CardSection>
                
                <Text style={Styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
                
            </Card>
        );
    }
}

const Styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};


const mapStateToProps=({auth})=>{
    const {email,password,error,loading}=auth;
    return{
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);