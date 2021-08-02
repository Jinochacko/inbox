import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../common/Styles';
import { getPlanType } from '../common/Actions';

export default class ListItem extends Component {

    render(){
        const {item: {name, image, plan_type, flexi_minutes, validity, data, price}} = this.props;
        const plan = getPlanType(plan_type);
        return (<View style={[styles.mainWrap, styles.rowContent]}>
                    <View style={styles.profileInfo}>
                        <View style={[styles.rowContent, styles.alignCenter]}>
                            <View style={[styles.alignCenter, styles.avatarWrap]}>
                                <View style={styles.avatarStyle}>
                                    <Avatar source={{uri: image}} />
                                </View>
                            </View>
                            <View style={styles.nameWrap}>
                                <Text style={[styles.textBold]}>{name}</Text>
                                <View style={[styles.rowContent]}>
                                    <Text style={styles.planName}>{plan.name}</Text>
                                    {flexi_minutes ? (<Text style={{flex: 1}}>Minutes: {flexi_minutes}</Text>) : null}
                                </View>
                                {validity ? (<Text>Validity: {validity} months</Text>) : null}
                            </View>
                        </View>
                    </View>
                    <View style={[styles.dateInfo, styles.alignRight]}>
                        {price ? (<Text style={[styles.textRight, styles.textBold]}>$ {price}</Text>) : null}
                        {data ? (<Text style={styles.textRight}>{data}/Day</Text>) : null}
                    </View>
                </View>);
    }
}