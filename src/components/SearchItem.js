import React, {Component} from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../common/Styles';

import Entypo from 'react-native-vector-icons/Entypo';

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
        return (
                    <View style={styles.searchContainer}>
                        <View style={{flexDirection: 'row', width: '100%', marginBottom: 10}}>
                            <Text style={{width: '95%', color: '#fff', fontSize: 18}}>Search Result</Text>
                            <Entypo name="dots-three-vertical" style={{justifyContent: 'flex-end', color: '#fff', fontSize: 24}} />
                        </View>
                        <TextInput style={styles.searchInput} placeholder="Search" onChangeText={(text)=>this.search(text)} />
                    </View>
                );
    }
}