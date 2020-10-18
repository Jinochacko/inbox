import React, {Component} from 'react';
import { View, TextInput, Text, ImageBackground, CheckBox, StyleSheet } from 'react-native';
import styles from '../common/Styles';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SearchItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSelected: false,
            search: null
        }
    }

    search = (text) => {
        const {search} = this.props;
        search(text);
    }

    render(){
        const { isSelected, search } = this.state;
        return (<View style={[styles.mainWrap, styles.rowContent]}>
                    <View style={[styles.checkboxWrap, styles.alignCenter]}>
                        <CheckBox
                            value={isSelected}
                            style={styles.checkbox}
                            onValueChange={() => this.setState({isSelected: !isSelected})}
                        />
                    </View>
                    <View style={styles.searchInputWrap}>
                        <FontAwesome name="search" style={[styles.clear, styles.searchIcon]} />
                        <TextInput style={styles.searchInput} placeholder="Search" onChangeText={(text)=>this.search(text)} />
                        <Entypo name="circle-with-cross" style={styles.clear} />
                    </View>
                    <View style={[styles.searchMenu, styles.alignCenter]}>
                        <MaterialCommunityIcons name="microsoft-xbox-controller-menu" style={styles.searchMenuIcon} />
                    </View>
                </View>);
    }
}