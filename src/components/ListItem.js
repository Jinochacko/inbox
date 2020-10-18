import React, {Component} from 'react';
import { View, Text, CheckBox } from 'react-native';
import { Avatar } from 'react-native-elements'
import styles from '../common/Styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const avatarDefault = 'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png';

const AvatarItem = ({url, isAlert}) => {
    if (isAlert){
        return (<View style={styles.avatarStyle}><Avatar rounded icon={{ name: 'warning' }} /></View>);
    } else {
        return (<View style={styles.avatarStyle}><Avatar rounded source={{uri: url ? url : avatarDefault}} /></View>)
    }
}

export default class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSelected: false
        }
    }

    render(){
        const { isSelected } = this.state;
        const {item: {name, date, time, avatar, isAlert, message}} = this.props;
        return (<View style={[styles.mainWrap, styles.rowContent]}>
                    <View style={[styles.checkboxWrap, styles.alignCenter]}>
                        <CheckBox
                            value={isSelected}
                            style={styles.checkbox}
                            onValueChange={() => this.setState({isSelected: !isSelected})}
                        />
                    </View>
                    <View style={styles.profileInfo}>
                        <View style={[styles.rowContent, styles.alignCenter]}>
                            <View style={styles.alignCenter}>
                                <AvatarItem url={avatar} isAlert={isAlert} />
                            </View>
                            <View style={styles.nameWrap}>
                                <Text style={[styles.textBold]}>{name}</Text>
                                <Text>{message}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.dateInfo, styles.alignCenter]}>
                        <Text style={[styles.textRight, styles.textBold]}>{date}</Text>
                        <Text style={styles.textRight}>1{time}</Text>
                    </View>
                    <View style={[styles.arrow, styles.alignCenter]}>
                        <EvilIcons name="chevron-right" style={styles.listItemChevron} />
                    </View>
                </View>);
    }
}