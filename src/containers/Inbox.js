import React, { Component, Fragment } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { Header, Avatar } from 'react-native-elements';

import Entypo from 'react-native-vector-icons/Entypo';
import ListItem from '../components/ListItem';
import SearchItem from '../components/SearchItem';
import { getInbox } from '../common/Actions';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from '../common/Styles';
import AnimateList from '../components/AnimateList';

const avatarPlaceholder = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg';
class Inbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: null
        }
    }

    componentDidMount(){
        const { getInbox } = this.props;
        getInbox();
    }

    renderItem = ({item, index}) => (
        <AnimateList
            index={index}
            renderContent={<ListItem
                item={item}
            />}
        />
        );
    
    getMessages = () => {
        const {messages} = this.props;
        const {search} = this.state;
        let messageList = messages;
        if(search){
            messageList = messages.filter(item=>(item.name.toLowerCase().includes(search.toLowerCase()) || item.message.toLowerCase().includes(search.toLowerCase())));
        }
        return messageList;
    }

    search = (text) => {
        this.setState({search: text});
    }

    render(){
        const {navigation, isFetching} = this.props;
        const messageList = this.getMessages();
        return (
            <View style={styles.page}>
                <Header 
                    statusBarProps={{ barStyle: 'light-content' }}
                    containerStyle={styles.header}
                    backgroundColor="#ccc"
                    leftComponent={<Entypo name="menu" onPress={()=>navigation.openDrawer()} style={[styles.iconColor,styles.leftIcon]} />}
                    centerComponent={{ text: 'Inbox'.toUpperCase(), style: styles.headerText }}
                    rightComponent={<Avatar rounded source={{ uri:  avatarPlaceholder}} />}
                />
                
                { isFetching ?
                    (<ActivityIndicator size="large" color="#3899b8" style={styles.activityIndicator} />): 
                    (<View style={styles.singleFlex}>
                        <Fragment>
                        <ScrollView>
                            <View style={styles.singleFlex}>
                                <SearchItem search={this.search} />
                            </View>
                            {messageList.length > 0 ?
                                (<FlatList data={messageList} keyExtractor={item=>'item'+item.id} renderItem={this.renderItem} />):
                                (<Text style={styles.notFound}>No item found</Text>)
                            }
                        </ScrollView>
                            <View style={styles.fab}>
                                <MaterialIcons name="add-box" style={styles.fabIcon} />
                            </View>
                        </Fragment>
                    </View>)
                }
            </View>
        );
    }
}
  
function bindActions(dispatch) {
    return {
        getInbox: () => dispatch(getInbox()),
    };
}
  
function mapStateToProps(state) {
    return {
        messages: state.appInbox.messages.data,
        isFetching: state.appInbox.messages.isFetching
    };
}

export default connect(
    mapStateToProps,
    bindActions,
)(Inbox);