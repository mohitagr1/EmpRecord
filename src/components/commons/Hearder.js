import React from 'react';
import {Text,View} from 'react-native';

const Hearder = (props) => {
    const {textStyle,viewStyle} = styles
    return(
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        //shadowColor:'#000',
        //shadowOffset:{width:0,height:20},
        //shadowOpacity:0.9,
        elevation:4,
        //position:'relative'
    },
    textStyle:{
        fontSize:20
    }
}

export {Hearder};
//AppRegistry.registerComponent('src',()=>Hearder);