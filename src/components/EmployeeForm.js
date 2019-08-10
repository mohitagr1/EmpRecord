import React ,{Component} from 'react';
import {View,Picker} from 'react-native';
import {CardSection,Input} from './commons'
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component{
    render(){
        return(
        <View>
            <CardSection>
                    <Input
                    label="Name"
                    placeHolder="MyName"
                    value={this.props.name}
                    onChangeText={value => this.props.employeeUpdate({prop:'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Phone No."
                    placeHolder="0000-0000"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate({prop:'phone', value})}
                    />
                </CardSection>
                
                <CardSection style={{flexDireaction:'column'}}>
                    <Picker
                        style={{flex:1}}
                         selectedValue={this.props.shift}
                         onValueChange={value=>this.props.employeeUpdate({prop:'shift',value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                    </Picker>
                </CardSection>
        </View>
        );
    }
}

const mapStateToProps =  (state) =>{
    const {name, phone, shift}=state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);