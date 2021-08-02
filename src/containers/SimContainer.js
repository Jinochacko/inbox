import React, { Component, Fragment } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';

import ListItem from '../components/ListItem';
import OperatorItem from '../components/OperatorItem';
import PlanItem from '../components/PlanItem';
import SearchItem from '../components/SearchItem';
import { getSimList } from '../common/Actions';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../common/Styles';
import AnimateList from '../components/AnimateList';
import { Touchable } from 'react-native';

class SimContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: null,
            plan: null,
            operator: null
        }
    }

    componentDidMount(){
        const { getSimList } = this.props;
        getSimList({search: null, operator: null, type: null});
    }

    clearFilter = () => {
        this.setState({
            search: null,
            plan: null,
            operator: null
        });
        const { getSimList } = this.props;
        getSimList({search: null, operator: null, type: null});
    }

    renderPlans = ({item, index}) => (
        <AnimateList
            index={index}
            direction="y"
            renderContent={<PlanItem
                item={item}
                setPlan={this.setPlan}
            />}
        />
        );

    renderOperator = ({item, index}) => (
        <AnimateList
            index={index}
            direction="y"
            renderContent={<OperatorItem
                item={item}
                setOperator={this.setOperator}
            />}
        />
        );

    renderItem = ({item, index}) => (
        <AnimateList
            index={index}
            direction="x"
            renderContent={<ListItem
                item={item}
            />}
        />
        );
    
    getFilteredSimList = () => {
        const { getSimList } = this.props;
        const { plan, operator, search } = this.state;
        getSimList({search: search, operator: operator, type: plan});
    }

    search = (text) => {
        this.setState({search: text}, this.getFilteredSimList());
    }

    setOperator = (id) => {
        this.setState({operator: id}, this.getFilteredSimList());
    }

    setPlan = (plan) => {
        this.setState({plan: plan}, this.getFilteredSimList());
    }

    render(){
        const {isFetching, simList } = this.props;
        const { plan, operator, search } = this.state;
        
        return (
            <View style={styles.page}>
                <Header 
                    statusBarProps={{ barStyle: 'light-content' }}
                    containerStyle={styles.header}
                    backgroundColor="#2AACE2"
                    leftContainerStyle={{flex: 0}}
                    centerComponent={<SearchItem search={this.search} />}
                    rightContainerStyle={{flex: 0}}
                />
                
                { isFetching ?
                    (<ActivityIndicator size="large" color="#3899b8" style={styles.activityIndicator} />): 
                    (<View style={styles.singleFlex}>
                        {(plan != null || operator != null || search != null) &&
                            <TouchableOpacity onPress={()=>this.clearFilter()}><Text style={{backgroundColor: '#ebebeb', margin: 15, borderRadius: 5, padding: 5, width: '25%', textAlign: 'center'}}>Clear Filter</Text></TouchableOpacity>
                        }
                        <Fragment>
                            {(simList.data && simList.data.plans && simList.data.plans.length > 0) &&
                                (
                                    <View style={styles.operatorWrap}>
                                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={simList.data.plans} keyExtractor={item=>'plans'+item} renderItem={this.renderPlans} />
                                    </View>
                                )
                            }
                            {(simList.data && simList.data.operators && simList.data.operators.length > 0) &&
                                (
                                    <View style={styles.operatorWrap}>
                                        <Text style={{fontSize: 16, fontWeight: '700', marginBottom: 10}}>Operators</Text>
                                        <FlatList horizontal showsHorizontalScrollIndicator={false} data={simList.data.operators} keyExtractor={item=>'operators'+item.id} renderItem={this.renderOperator} />
                                    </View>
                                )
                            }
                            <ScrollView style={styles.scrollView}>
                                {(simList.data && simList.data.data && simList.data.data.length > 0) ?
                                    (<FlatList data={simList.data.data} keyExtractor={item=>'item'+item.id} renderItem={this.renderItem} />):
                                    (<Text style={styles.notFound}>No item found</Text>)
                                }
                            </ScrollView>
                        </Fragment>
                    </View>)
                }
            </View>
        );
    }
}
  
function bindActions(dispatch) {
    return {
        getSimList: (obj) => dispatch(getSimList(obj)),
    };
}
  
function mapStateToProps(state) {
    return {
        num: state.sim.num,
        simList: state.sim.simList,
        isFetching: state.sim.simList.isFetching
    };
}

export default connect(
    mapStateToProps,
    bindActions,
)(SimContainer);