import React, { Component } from 'react';
import {
    Alert, AppRegistry, StyleSheet, Text, Animated,
    TouchableNativeFeedback, TouchableWithoutFeedback, View, SectionList, Dimensions, FlatList, RefreshControl,
    StatusBar, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMD from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, } from 'react-navigation';
import { CoordinatorLayout, BottomSheetBehavior, FloatingActionButton } from 'react-native-bottom-sheet-behavior'
import {
    TabViewAnimated,
    TabBar,
    TabViewPagerExperimental,
} from 'react-native-tab-view';
// import * as GestureHandler from 'react-native-gesture-handler';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import NestedScrollView from 'react-native-nested-scroll-view'

import { Card, Spacer } from './common_components'
import MoviesList from './movies_list'

const { width, height } = Dimensions.get('window')

export default class Playground extends Component {
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
        curMovie: null,
    };

    constructor(props) {
        super(props);

        this._onPressItem = this._onPressItem.bind(this)
        this._setBottomSheetState = this._setBottomSheetState.bind(this)
        this._onStateChange = this._onStateChange.bind(this)
        this.handleSlide = this.handleSlide.bind(this)
    }

    _onPressItem = (m) => {
        // if (m) Alert.alert(m.title)
        // this.refs.bsMovieRated.state
        // this.refs.bsMovieTitle.state
        // this.refs.bsMovieReleaseDate.state
        // this.refs.bsMovieGenres.state
        this.setState({ curMovie: m })

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
                    <MoviesList onPressItem={this._onPressItem} />
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
                            <Text ref='bsMovieTitle' style={{ fontSize: 18, color: 'white' }}>{this.state.curMovie ? this.state.curMovie.title : 'Movie Title'}</Text>
                            <Text ref='bsMovieRated' style={{ fontSize: 14, color: 'white' }}>{this.state.curMovie ? this.state.curMovie.vote_average : 'Movie Rated'}</Text>
                        </View>

                        <View style={{ height: 200, backgroundColor: '#7986CB' }}>
                            <Text ref='bsMovieReleaseDate' style={{ fontSize: 16, color: 'white' }}>{this.state.curMovie ? this.state.curMovie.release_date : 'release_date'}</Text>
                            <Text ref='bsMovieGenres' style={{ fontSize: 16, color: 'white' }}>{this.state.curMovie ? this.state.curMovie.genres.map(g => g.name).join(', ') : 'genres'}</Text>
                        </View>
                    </View>

                </BottomSheetBehavior>
                <FloatingActionButton autoAnchor={true}
                    hidden={true}
                    ref="fab"
                    iconColor='white'
                />
            </CoordinatorLayout>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    bsContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: height - 24,
        width
    },
    tabbar: {
        backgroundColor: '#222',
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
    label: {
        color: '#fff',
        fontWeight: '400',
    },
    overlay: {
        position: 'absolute',
        top: -24,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
        backgroundColor: 'black',
    },
});
