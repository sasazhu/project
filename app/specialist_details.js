import React, { Component } from 'react';
import {
    StyleSheet, Text, Image,
    TouchableNativeFeedback, View, Button, FlatList, RefreshControl,
    StatusBar, ScrollView, ToolbarAndroid,TouchableOpacity,Alert
} from 'react-native';
import {
    AppBarLayout,
    CoordinatorLayout,
    CollapsingToolbarLayout,
    CollapsingParallax,
} from 'react-native-collapsing-toolbar'
// import {
//     CoordinatorLayout,
//     ScrollingAppBarLayout,
//     ToolbarAndroid,
//     BackdropBottomSheet,
//     BottomSheetBehavior,
//     MergedAppBarLayout,
//     FloatingActionButton,
// } from 'react-native-bottom-sheet-behavior'
import NestedScrollView from 'react-native-nested-scroll-view'
import Orientation from 'react-native-orientation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import IconC from 'react-native-vector-icons/MaterialCommunityIcons'

import IconF from "react-native-vector-icons/FontAwesome";

import RandomTheme from './color_themes'
import { Card, Spacer } from './common_components'


export default class SpecialistDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        theme = RandomTheme();

        return ({
            // headerTitle: <CustomHeader title="Movie Details" subtitle={navigation.state.params.movie.title} />,
            headerStyle: { backgroundColor: theme[0] },
            headerTintColor: 'white'
        })
    };

    state = {
        icons: [null, null, null],
        iconLoaded: false,
        iconToggle: false,
        // scrollY: new Animated.Value(0),
        // theme: RandomTheme()
    };



    componentDidMount() {
        // this locks the view to Portrait Mode
        Orientation.lockToPortrait();
        
        // Load icon from react-native-vector-icons manually
        let p1 = Icon.getImageSource('account-circle', 96, '#ddd').then((source) => this.state.icons[0] = source);
        let p2 = Icon.getImageSource('lightbulb-outline', 24, '#ddd').then((source) => this.state.icons[1] = source);
        let p3 = Icon.getImageSource('favorite-border', 24, '#ddd').then((source) => this.state.icons[2] = source);
        let p4 = IconF.getImageSource('question-circle-o', 24, '#ddd').then((source) => this.state.icons[3] = source);
        let p5 = Icon.getImageSource('person-add', 24, '#ddd').then((source) => this.state.icons[4] = source);
        let p6 = Icon.getImageSource('favorite', 24, 'red').then((source) => this.state.icons[5] = source);



        Promise.all([p1, p2, p3,p4,p5]).then(r => this.setState({ iconLoaded: true }))
    }

    componentWillUnmount() {
        Orientation.unlockAllOrientations()
    }
    
    render() {
        const HEADER_HEIGHT = 200;
        var m = this.props.navigation.state.params.specialist;
        // Alert.alert(m)
        // let attentionTog = this.state.iconToggle ? 'icons[2]' : 'icons[5]'
        const { icons, iconLoaded } = this.state;

        return iconLoaded && (
            <View style={{ paddingBottom: 450 }}>
                <StatusBar translucent backgroundColor={theme[1]} />
                <View style={{ height: 24 }} />
                <CoordinatorLayout>
                    <AppBarLayout style={{ height: HEADER_HEIGHT, backgroundColor: theme[0] }}>
                        <CollapsingToolbarLayout
                            title={m.name}
                            contentScrimColor={theme[0]}
                            expandedTitleColor='white'
                            expandedTitleGravity='BOTTOM'
                            collapsedTitleTextColor='white'
                            scrimAnimationDuration={500}
                            expandedTitleMarginStart={22}
                            expandedTitleMarginBottom={22}
                            scrollFlags={
                                AppBarLayout.SCROLL_FLAG_SCROLL
                                | AppBarLayout.SCROLL_FLAG_EXIT_UNTIL_COLLAPSED
                                | AppBarLayout.SCROLL_FLAG_SNAP
                            }>
                            <CollapsingParallax parallaxMultiplier={0.6}>
                                <View collapsable={false} style={{ height: HEADER_HEIGHT, flexDirection: 'row', alignItems: 'flex-start', padding: 16 }}>
                                    {/* <Icon name="account-circle" size={96} color="#ddd" /> */}
                                    {/* <Image source={icons[0]} /> */}

                                    <View style={{ flex: 1, alignSelf: 'center' }}>
                                        {/*粉丝*/}
                                        <View style={{ marginTop: 4, flexDirection: 'row',margin:8, alignItems: 'center' }}>
                                            <View >
                                                <Image source={require('./resources/img/person_doctor.png')} style={{width:80, height:80, borderWidth:1, borderRadius:50}}/>
                                            </View>


                                        </View>

                                        {/*职称*/}
                                        <View style={{ flexDirection: 'row', alignItems: 'baseline', }}>

                                            <Text style={{ marginLeft: 8, color: 'white',marginBottom:20 }}>{m.title}</Text>
                                        </View>


                                    </View>
                                    <View style={{ flex: 1, alignSelf: 'center' }}>
                                        <Text style={{ marginLeft: 8, color: 'white',marginBottom:10 }}>age:40</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'baseline', }}>
                                            <IconF name='phone' size={20} color='#fff'/>
                                            <Text style={{ marginLeft: 8, color: 'white',marginBottom:10 }}>12345648487</Text>

                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'baseline', }}>
                                            <Icon name='email' size={20} color='#fff'/>
                                            <Text style={{ marginLeft: 8, color: 'white',marginBottom:10 }}>456456456@qq.com</Text>

                                        </View>

                                    </View>

                                    {/* <Icon.Button name="star-border" size={24} color="#ccc" backgroundColor='transparent' style={{ alignSelf: "flex-start" }} /> */}
                                </View>
                            </CollapsingParallax>
                            <ToolbarAndroid titleColor='white' subtitleColor='white' actions={[{ icon: icons[2], title: '关注', show: 'always',showWithText:true, },
                                                                                               { icon: icons[3], title: '咨询', show: 'always',showWithText:true, },
                                                                                               { icon: icons[4], title: '粉丝', show: 'always',showWithText:true,} ]}
                                            onActionSelected = { this.navigateTo.bind(this)}
                            />
                        </CollapsingToolbarLayout>
                    </AppBarLayout>

                    <NestedScrollView>
                        <View style={{ padding: 16 }}>
                            <Card title="服务">
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Drugs')}>
                                        <View style={styles.touchable} >
                                            <IconC name="pill" size={48} color="#F44336" backgroundColor='transparent' />
                                            <Text>推荐药品</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback  onPress={() => this.props.navigation.navigate('Hospital')}>
                                        <View style={styles.touchable}>
                                            <IconC name="hospital" size={48} color="#3F51B5" backgroundColor='transparent' />
                                            <Text>专科医院</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('SpecialistScreen')}>
                                        <View style={styles.touchable} >
                                            <Icon name="assignment-ind" size={48} color="#673AB7" backgroundColor='transparent' />
                                            <Text>专科医生</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </Card>

                            <Spacer size={16} />

                            <Card title="最新动态">

                                <TouchableNativeFeedback  onPress={() => this.props.navigation.navigate('Texts')}>
                                    <View style={{justifyContent:'center',marginBottom:10}} onPress={() => this.props.navigation.navigate('Texts')}>
                                        <Text> 08月29日 17:36</Text>
                                        <Text style={{paddingLeft:20}}>发布文章：教您体温、脉搏、呼吸、血压的正常值是多少？</Text>
                                    </View>
                                </TouchableNativeFeedback>

                                <TouchableNativeFeedback  onPress={() => this.props.navigation.navigate('Texts')}>
                                    <View style={{justifyContent:'center'}}>
                                        <Text> 08月29日 17:36</Text>
                                        <Text style={{paddingLeft:20}}>发布文章：教您体温、脉搏、呼吸、血压的正常值是多少？</Text>
                                    </View>
                                </TouchableNativeFeedback>

                            </Card>

                            <Spacer size={16} />

                            <Card title="交流互动">

                                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Texts')}>
                                    <View style={{paddingLeft:10,justifyContent:'center'}} >
                                        <Text>08月29日 17:36</Text>
                                        <Text style={{fontSize:14}}>体温、脉搏、呼吸、血压的正常值是多少？</Text>
                                        <Text>正常体温是...脉博是...呼吸是...</Text>
                                    </View>
                                </TouchableNativeFeedback>

                            </Card>

                            <Spacer size={16} />

                            <Card title="文章推荐">
                                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Health')}>
                                    <View style={{paddingLeft:10,justifyContent:'center'}} >
                                        <Text>08月29日 17:36</Text>
                                        <Text style={{fontSize:16,fontWeight:'bold'}}>健康的意义</Text>
                                        <Text >什么是健康？影响健康的因素？健康教育的概念？</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </Card>

                            {/* <Spacer size={24} /> */}
                        </View>
                    </NestedScrollView>

                    {/* <FloatingActionButton autoAnchor ref="fab" icon='favorite-border' iconColor='white' backgroundColor='#9C27B0' /> */}
                </CoordinatorLayout>
            </View>
        );

    }
    navigateTo(position){
        if(position === 1){
             this.props.navigation.navigate('ConsultScreen',{name: this.props.navigation.state.params.specialist.name})
        }else if(position === 2){
            this.props.navigation.navigate('Fans')
        }else{
            this.setState({
                iconToggle: !this.state.iconToggle
            })
        }

    }
}


const styles = StyleSheet.create({
    touchable: {
        padding: 4,
        alignItems: 'center',
    }
})