import React,{Component} from 'react';
import {Card,CardSection,Button} from './commons';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../actions/EmployeeAction'
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{
    onButtonPress(){
        const {name,phone,shift}=this.props;
        this.props.employeeCreate({name,phone,shift});
    }

    render(){
        return(
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Submit
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps =  (state) =>{
    const {name, phone, shift}=state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);