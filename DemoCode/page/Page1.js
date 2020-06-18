import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

export  default class Page1 extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <ScrollView>
                <Text onPress={()=>{
                    navigation.navigate('Page2');
                }} >Some text</Text>
               
            </ScrollView>
        );
    }
}

