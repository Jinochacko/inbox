import { StyleSheet, Platform, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    page: {flex: 1, backgroundColor: '#fff'},
    statusBar: {
      height: STATUSBAR_HEIGHT,
    },
    scrollView: {paddingTop: 15, paddingBottom: 15, backgroundColor: '#F6F7F8'},
    rowContent: {flex: 1, flexDirection: 'row', backgroundColor: '#fff'},
    mainWrap: { margin: 10, marginTop: 0, padding: 20, backgroundColor: '#fff', borderRadius: 5,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
    },
    lightShadow: {
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
    },
    imageStyle: {width: 75, height: 75},
    operatorWrap: {padding: 15, paddingRight: 0},
    operatorItem: {width: 80, height: 80, marginRight: 5, marginBottom: 5, marginLeft: 1, padding: 2},
    profileInfo: {flex: 5},
    alignCenter: {alignItems: 'center', justifyContent: 'center'},
    avatar: {borderRadius: 40, height: 40, width: 40, flex: 2},
    avatarWrap: {flex: 1},
    nameWrap: {flex: 3, marginLeft: 10},
    dateInfo: {flex: 2},
    textRight: {textAlign: 'right'},
    textBold:  {fontWeight: '700'},
    arrow: {flex: 1},
    clear: {position: 'absolute', top: 8, right: 8, fontSize: 20},
    searchIcon: {left: 8},
    searchInput: { borderRadius: 20, padding: 5, paddingLeft: 20, backgroundColor: '#fff', width: '100%'},
    searchInputWrap: {flex: 6},
    searchMenu: {flex: 2},
    listItemChevron: {fontSize: 28},
    fab: {position: 'absolute', bottom: 30, right: 30, width: 50, height: 50, borderRadius: 50, backgroundColor: "#3899b8", justifyContent: 'center'},
    fabIcon: {fontSize: 32, color: '#fff', alignSelf: 'center'},
    iconColor: {color: '#7a7a7a'},
    leftIcon: {fontSize: 30},
    rightIcon: {fontSize: 24},
    headerText: { color: '#3899b8', fontWeight: 'bold', fontSize: 18 },
    singleFlex: {flex: 1},
    container: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    tile: {width: '25%', borderColor: '#328ba8', borderRadius: 10, borderWidth: 1, padding: 15, margin: 10, alignItems: 'center'},
    tileIcon: {fontSize: 30, paddingBottom: 15, color: '#328ba8'},
    tileText: {color: '#328ba8'},
    header: {
        paddingTop: 0,
        height: 100,
    },
    searchContainer: {width: '100%'},
    activityIndicator: {position: 'absolute', top: 200, right: 200},
    searchMenuIcon: {fontSize: 32, color: '#3899b8'},
    notFound: {alignSelf: 'center', justifyContent: 'center'},
    planName: {flex: 1, color: "#2AACE2"},
    alignRight: {alignItems: 'flex-end', justifyContent: 'center'},
    pageContainer: {height: 300}
});

export default styles;