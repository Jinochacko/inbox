import React, {Component} from 'react';
import { Image } from 'react-native';
import styles from '../common/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class OperatorItem extends Component {
    setOperator = (id) => {
        const { setOperator} = this.props;
        setOperator(id);
    };

    render(){
        const {item: {image, id}} = this.props;
        return (<TouchableOpacity onPress={()=>this.setOperator(id)} style={[styles.lightShadow, styles.operatorItem, styles.alignCenter]}>
                    <Image style={styles.imageStyle} source={{uri: image}} />
                </TouchableOpacity>);
    }
}