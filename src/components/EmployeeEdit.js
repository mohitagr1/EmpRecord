import _ from 'lodash';
import React,{Component} from 'react';
import {Card,CardSection,Button,Confirm} from './commons';
import EmployeeForm from './EmployeeForm'
import {connect} from 'react-redux';
import {employeeUpdate,employeeSave} from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{

    state={showModel:false,};

    componentWillMount(){
        _.each(this.props.employee, (value,prop)=>{
            this.props.employeeUpdate({prop,value});
        })
    }
    onButtonPress(){
        const {name,phone,shift}=this.props;
        this.props.employeeSave({name,phone,shift, uid : this.props.employee.uid});
    }
    onTextPress(){
        const {phone,shift} = this.props;
        Communications.textWithoutEncoding(phone,`Your upcoming shift is on ${shift}`);
    }

    render(){
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                     <Button onPress={()=>this.setState({showModel: !this.state.showModel})}>
                        Fire Employee!
                    </Button>
                </CardSection>
                <Confirm 
                    visible={this.state.showModel}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}
const mapStateToProps =  (state) =>{
    const {name, phone, shift}=state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps,{employeeUpdate,employeeSave})(EmployeeEdit);