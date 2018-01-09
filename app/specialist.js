// @flow 

import * as React from 'react';
import { CoordinatorLayout, BottomSheetBehavior, FloatingActionButton } from 'react-native-bottom-sheet-behavior'
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style_movies'
import {
    Alert, AppRegistry, StyleSheet, Text, Animated,Image,
    TouchableNativeFeedback, TouchableWithoutFeedback, View, SectionList, Dimensions, FlatList, RefreshControl,
    StatusBar, ScrollView
} from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigator, } from 'react-navigation';
import {
    TabViewAnimated,
    TabBar,
    TabViewPagerExperimental,
} from 'react-native-tab-view';
// import * as GestureHandler from 'react-native-gesture-handler';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import NestedScrollView from 'react-native-nested-scroll-view'

import { Card, Spacer } from './common_components'


export default class Playground extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'First' },
            { key: '2', title: 'Second' },
            { key: '3', title: 'Third' },
        ],
        scrollY: new Animated.Value(0),
        bsHidden: true,
        bsState: null,
        curSp: null,
    };

    constructor(props) {
        super(props);

        this._onPressItem = this._onPressItem.bind(this)
        this._setBottomSheetState = this._setBottomSheetState.bind(this)
        this._onStateChange = this._onStateChange.bind(this)
        this.handleSlide = this.handleSlide.bind(this)
    }
    
    _navigatePage = (m: array<iSpecialist>) => {
        this.props.navigation.navigate('SpecialistDetails',{specialist: m})
    }

    _onPressItem = (m) => {
        // if (m) Alert.alert(m.title)
        // this.refs.bsMovieRated.state
        // this.refs.bsMovieTitle.state
        // this.refs.bsMovieReleaseDate.state
        // this.refs.bsMovieGenres.state
        this.setState({ curSp: m })

        this._setBottomSheetState()
    }

    _setBottomSheetState = () => {
        if (this.state.bsHidden) {
            this.refs.fab.show();
            this.refs.bottomSheet.setBottomSheetState(BottomSheetBehavior.STATE_COLLAPSED);
        } else {
            this.refs.fab.hide();
            this.refs.bottomSheet.setBottomSheetState(BottomSheetBehavior.STATE_HIDDEN);
        }

        // this.state.bsHidden = !this.state.bsHidden
        this.setState({ bsHidden: !this.state.bsHidden })
    }

    _handleIndexChange = index =>
        this.setState({
            index,
        });

    _renderHeader = props => (
        <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            labelStyle={styles.label}
        />
    );

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return (
                    <SpecialistList nav={this._navigatePage} onPressItem={this._onPressItem} />
                    // <ScrollView style={{ flex: 1 }}>
                    //     <View style={{ padding: 16, backgroundColor: 'blue' }}>
                    //     <View style={{ height: 600, backgroundColor: 'red' }} />
                    //     </View>
                    // </ScrollView>
                );
            case '2':
                return (
                    <View style={{ flex: 1, backgroundColor: 'red' }} />
                );
            case '3':
                return (
                    <View
                    />
                );
            default:
                return null;
        }
    };

    // _renderPager = props => <TabViewPagerExperimental {...props} GestureHandler={GestureHandler} />;

    handleSlide(e) {
        this.offset = e.nativeEvent.offset;

        Animated.event(
            [{ nativeEvent: { offset: this.state.scrollY } }, { useNativeDriver: true }]
        )(e, this.state)
    }

    _onStateChange(s) {
        this.state.bsState = s;
    }

    render() {
        const opacity = this.state.scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [0.4, 0.7],
        })

        let overlay = null
        if (!this.state.bsHidden)
            overlay = (
                <TouchableWithoutFeedback onPress={this._setBottomSheetState}>
                    <Animated.View ref='overlay' style={[styles.overlay, { opacity }]} />
                </TouchableWithoutFeedback>
            )

        return (
            <CoordinatorLayout style={{ flex: 1 }}>
                {/* <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" /> */}

                {/* <View style={{ paddingTop: 24, backgroundColor: 'red' }} /> */}
                {/* <View style={{ height: 24, }} /> */}

            <TabViewAnimated style={[styles.bsContent, { marginTop: 24 }]}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                // renderPager={this._renderPager}
                onIndexChange={this._handleIndexChange}
                initialLayout={{ height: 0, width: Dimensions.get('window').width, }}
                useNativeDriver
            /> 

                {/* <ScrollableTabView style={[ styles.bsContent, {backgroundColor: 'yellow' }]}>
                    <NestedScrollView tabLabel='Tab #1' style={{ flex: 1 }}>
                        <View style={{ padding: 16, backgroundColor: 'blue' }}>
                            <View style={{ height: 600, backgroundColor: 'red' }} />
                        </View>
                    </NestedScrollView>
                    <Text tabLabel='Tab #2'>favorite</Text>
                    <Text tabLabel='Tab #3'>project</Text>
                </ScrollableTabView> */}

                {overlay}

                <BottomSheetBehavior
                    ref='bottomSheet'
                    peekHeight={70}
                    elevation={4}
                    state={BottomSheetBehavior.STATE_HIDDEN}
                    hideable={true}
                    onSlide={this.handleSlide}
                    onStateChange={this._onStateChange}
                >

                    <View style={{ backgroundColor: '#3F51B5' }}>
                        <View style={{ padding: 16 }}>
                            <Text ref='bsMovieTitle' style={{ fontSize: 18, color: 'white' }}>{this.state.curSp ? this.state.curSp.name : 'Movie Title'}</Text>
                            <Text ref='bsMovieRated' style={{ fontSize: 14, color: 'white' }}>{this.state.curSp ? this.state.curSp.title : 'Movie Rated'}</Text>
                        </View>

                        <View style={{ height: 200, backgroundColor: '#7986CB' }}>
                            <Text ref='bsMovieReleaseDate' style={{ fontSize: 16, color: 'white' }}>{this.state.curSp ? this.state.curSp.skilled : 'release_date'}</Text>
                            <Text ref='bsMovieGenres' style={{ fontSize: 16, color: 'white' }}>{this.state.curSp ? this.state.curSp.brief : 'brief'}</Text>
                        </View>
                    </View>

                </BottomSheetBehavior>
                <FloatingActionButton autoAnchor={true}
                    hidden={true}
                    ref="fab"
                    iconColor='white'
                    backgroundColor='#E91E63'
                />
            </CoordinatorLayout>
        )
    }
}




MainTitle = (m) => <Text style={styles.main_title}>{m.name}</Text>

SubTitle = (m) => m.title ? <Text style={styles.sub_title}>{m.title}</Text> : <View />

ReleaseDate = (m) => <Text style={styles.release_date}>{m.specialty}</Text>

Avatar = (m) => <Image source={m.img} style={{width: 60, height:60, borderRadius: 30}} />
class Specialist extends React.Component {
   
    render() {
        let m = this.props.item
    
        let main_title = m.name.trim()
        let sub_title = m.title.trim()

        return (
            <TouchableNativeFeedback onPress={() => this.props.onPress(m.id)}>
                <View style={{flex:1, flexDirection: 'row',margin: 0, marginBottom: 0, padding: 8, paddingBottom: 8, backgroundColor: 'transparent', }}>
                    <Avatar img={m.avatar} />
                    <View style={{flex:1,marginLeft:8,alignItems: 'flex-start', }}>
                    
                        <View style={{marginLeft:8, flexDirection: 'row',  }}>
                           
                            <MainTitle title={main_title} />
                            <SubTitle title={sub_title} />
                            
                        </View>
                        
                        <View style={{ marginTop: 8, marginLeft:5, flexDirection: 'row' }}>
                            <Icon name="today" size={12} color="#888" style={{ marginRight: 4 }} />
                            <ReleaseDate date={m.specialty} />
                        </View>
                        <View style={{ margin: 2 }} />
                   
                    </View>
                    <TouchableNativeFeedback onPress={() => this.props.onPressIcon(m.id)}>
                        <Icon name="more-horiz" size={14} color="#888" style={{ marginRight: 4, padding:6}} />
                    </TouchableNativeFeedback> 
                </View>
            </TouchableNativeFeedback>
        )
    }
}

class SpecialistList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            ds: [],
        };

        this._onPressItem = this._onPressItem.bind(this)
    }

    componentDidMount() {
        this._onRefresh()
    }

    _onRefresh() {
        this.setState({ refreshing: false,ds:dataArr });

        // fetch('http://192.168.3.116:8000/tmdb_100_movies.json')
        //     .then((r) => r.text())
        //     .then((j) => {
        //         let ms = j.split('\n')
        //                 .filter(l => l.length > 0)
        //                 .map(l => JSON.parse(l))
        //                 .filter(m => m.vote_average >= 7)
        //                 .sort((m, n) => n.vote_average - m.vote_average)
        //         this.setState({ ds: ms });
        //     })
        //     .catch((e) => {
        //         this.setState({ ds:[] })
        //     })
        //     .finally(() => this.setState({ refreshing: false }));
    }

    _onPressItem = (id) => {
        const {navigation} = this.props
        let m = this.state.ds.filter(m => m.id == id)
        if (m.length > 0) m = m[0]
        // Alert.alert(`Movie ${id} tapped.`)
        // navigation.navigate('MovieDetail', { movie: m })

        this.props.onPressItem(m)
    }

    render() {
        return (
                <FlatList style={{ flex: 1, padding: 0, backgroundColor: 'transparent', }}
                    contentContainerStyle={{ backgroundColor: 'transparent', padding: 0 }}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                    data={this.state.ds}
                    keyExtractor={(item, idx) => `key_${item.id}_${item.index}`}
                    renderItem={({ item }) => <Specialist onPress={this.props.nav} item={item} onPressIcon={this._onPressItem} />}
                />
        )
    }
}
const dataArr = [
    {
        id: '1',
        name: "范医生",
        gender: '男',
        birth: '1987-02-02',
        phone: '12345679',
        email: '985652@qq.com',
        specialty: '医护健康',
        title: "主任医师",
        skilled: "擅长普外。。。。。",
        brief: 'This color palette comprises primary and accent colors that can be used for illustration or to develop your brand colors.',
        avatar: require('./resources/img/person_doctor.png'),
    },
    {
        id: '2',
        name: "陈医生",
        gender: '女',
        birth: '1988-02-02',
        phone: '12345679533',
        email: '985652@qq.com',
        specialty: '计算机网络',
        title: "主任医师",
        skilled: "擅长普外。。。。。",
        brief: 'They’ve been designed to work harmoniously with each other. The color palette starts with primary colors and fills in the spectrum to create a complete and usable palette for Android, Web, and iOS.',
        avatar: require('./resources/img/person_doctor.png'),
        liked: true,
    },
    {
        id: '3',
        name: "赵医生",
        gender: '女',
        birth: '1977-02-02',
        phone: '12345679845',
        email: '985652@qq.com',
        specialty: '消防安全',
        title: "主任医师",
        skilled: "擅长普外。。。。。",
        brief: 'Google suggests using the 500 colors as the primary colors in your app and the other colors as accents colors.',
        avatar: require('./resources/img/person_doctor.png'),
    },
    {
        id: '4',
        name: "钱医生",
        gender: '男',
        birth: '1988-02-02',
        phone: '12345679533',
        email: '985652@qq.com',
        specialty: '信息工程',
        title: "主任医师",
        skilled: "擅长普外。。。。。",
        brief: 'The Color Tool helps you create, share, and apply color palettes to your UI, as well as measure the accessibility level of any color combination.',
        avatar: require('./resources/img/person_doctor.png'),
        liked: true,
    },
    {
        id: '5',
        name: "李医生",
        gender: '女',
        birth: '1947-02-02',
        phone: '12345679845',
        email: '985652@qq.com',
        specialty: '土木建筑',
        title: "主任医师",
        skilled: "擅长普外。。。。。",
        brief: 'Color in Material Design is inspired by bold hues juxtaposed with muted environments, deep shadows, and bright highlights.',
        avatar: require('./resources/img/person_doctor.png'),
    },
    {
        id: '6',
        name: "刘医生",
        gender: '男',
        birth: '1967-02-02',
        phone: '1234466797414',
        email: '985363652@qq.com',
        specialty: '设备维护',
        title: "副主任医师",
        skilled: "擅长神内。。。。。",
        brief: 'Create color schemes that include darker and lighter variations of your primary and secondary colors.',
        avatar: require('./resources/img/person_doctor.png'),
        liked: true,
    },
]

