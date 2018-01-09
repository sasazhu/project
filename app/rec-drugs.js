import React from 'react';
import { StyleSheet, Text,
    View,Image,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    TouchableNativeFeedback
} from 'react-native';
import Orientation from 'react-native-orientation';

import { Card, Spacer } from './common_components'

import RandomTheme from './color_themes'

export default class Drugs extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }
    // static navigationOptions = ({ navigation }) => {
    //     theme = RandomTheme();
    //
    //     return ({
    //         // headerTitle: <CustomHeader title="Movie Details" subtitle={navigation.state.params.movie.title} />,
    //         headerStyle: { backgroundColor: theme[0] },
    //         headerTintColor: 'white',
    //         headerPressColorAndroid: 'white',
    //         title: '推荐药品',
    //     })
    // };
    render(){
        return(
            <View style={{flex:1}}>

                    <StatusBar backgroundColor='#D32F2F' />
                    <ScrollView style={{flex:1,padding:16}}>
                            <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('DrugScreen')}>
                                <View style={{flexDirection:'row',backgroundColor:'#eee',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                    <View style={{flex:2}}>
                                        <View style={{flex:1,justifyContent:'center'}}>
                                            <Image source={require('./resources/img/drugs.jpg')} style={{height:60,width:60}}/>
                                        </View>
                                    </View>

                                    <View style={{flex:5,flexDirection:'column'}}>
                                        <View style={{flex:1,justifyContent:'center'}}>
                                            <Text style={{fontSize:16}}>【药品名称】痔根断片</Text>
                                        </View>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Text>￥20</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>

                        {/*药品详情*/}
                        <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('DrugScreen')}>
                            <View style={{flexDirection:'row',backgroundColor:'#eee',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                <View style={{flex:2}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image source={require('./resources/img/drugs.jpg')} style={{height:60,width:60}}/>
                                    </View>
                                </View>

                                <View style={{flex:5,flexDirection:'column'}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Text style={{fontSize:16}}>【药品名称】痔根断片</Text>
                                    </View>
                                </View>
                                <View style={{flex:1,justifyContent:'center'}}>
                                    <Text>￥20</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        {/*药品详情*/}
                        <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('DrugScreen')}>
                            <View style={{flexDirection:'row',backgroundColor:'#eee',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                <View style={{flex:2}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image source={require('./resources/img/drugs.jpg')} style={{height:60,width:60}}/>
                                    </View>
                                </View>

                                <View style={{flex:5,flexDirection:'column'}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Text style={{fontSize:16}}>【药品名称】痔根断片</Text>
                                    </View>
                                </View>
                                <View style={{flex:1,justifyContent:'center'}}>
                                    <Text>￥20</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                    </ScrollView>
                {/*<View style={{flex:5}}>*/}
                    {/*<Text></Text>*/}
                {/*</View>*/}
            </View>
        );
    }
}