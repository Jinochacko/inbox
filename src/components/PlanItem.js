import React, {Component} from 'react';
import { Image, Text } from 'react-native';
import styles from '../common/Styles';
import { getPlanType } from '../common/Actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PlanItem extends Component {
    setPlan = (item) => {
        const { setPlan} = this.props;
        setPlan(item);
    };

    render(){
        const {item} = this.props;
        const plan = getPlanType(item);
        return (<TouchableOpacity onPress={()=>this.setPlan(item)} style={[styles.lightShadow, styles.alignCenter, {padding: 20, paddingTop: 10, paddingBottom: 10, marginRight: 8, margin: 2, backgroundColor: '#000', flexDirection: 'row'}]}>
                    <Image style={{width: 20, height: 15}} source={{uri: plan.image}} />
                    <Text style={{color: '#fff', marginLeft: 5}}>{plan.name}</Text>
                </TouchableOpacity>);
    }
}