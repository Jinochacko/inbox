import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../common/Styles';

export default class OrderOrder extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return (
            <View style={[styles.pageContainer, styles.alignCenter]}>
                <Text>Order</Text>
            </View>
        );
    }
}