import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',// doesn't work with Android
        shadowOffset: { width: 0, height: 2},// doesn't work with Android
        shadowOpacity: 0.9,// doesn't work with Android
        elevation: 2,//shadow for Android
        position: 'relative'
    },
    textStyle: {
       fontSize: 20,
   }
});

export default Header;