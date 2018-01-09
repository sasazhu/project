import React from 'react';
import { StyleSheet, Text, View,Image,StatusBar,TouchableOpacity,ScrollView,Navigator,TouchableNativeFeedback} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';
import { Card, Spacer } from './common_components'
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Fans extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }
    //导航头
    static navigationOptions ={
        title:'粉丝',
        headerTitleStyle:{
            color:'white',
        },
        headerStyle:{
            backgroundColor:'#39C183'
        },
        headerRight:
            <TouchableOpacity style={{marginRight:20, flex:6,alignItems:'flex-end',marginTop:10}}>
                <Image source={require('./resources/img/search_white_24dp.png')}/>
            </TouchableOpacity>

    };
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#ffffff'}}>
                <View style={{flex:8}}>
                    <StatusBar backgroundColor='#512DA8' />
                    <ScrollView style={{flex:1,padding:16}}>

                        {/*粉丝信息*/}
                        <Card>
                            <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Doc_Screen')}>
                                <View style={{flexDirection:'row',paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                    <View style={{flex:2,paddingLeft:15}}>
                                        <View style={{flex:1,}}>
                                            <Image source={require('./resources/img/person_doctor.png')} style={{height:70,width:70,borderRadius:35}}/>
                                        </View>
                                    </View>

                                    <View style={{flex:5,flexDirection:'column'}}>
                                        <View style={{flex:3,flexDirection:'row'}}>
                                            <View style={{flex:6,justifyContent:'center',}}>
                                                <Text style={{fontSize:18}}>江左书生</Text>
                                            </View>
                                        </View>
                                        <View style={{flex:2,marginTop:5}}>
                                            <Text>某某某生产部经理，爱好运动，喜欢健身</Text>
                                        </View>
                                        <View style={{flex:2,flexDirection:'row'}}>
                                            <TouchableNativeFeedback  onPress={() =>this.props.navigation.navigate('PerLetter')}>
                                                <View style={{margin:8}}>
                                                    <IconC name='wechat' color='#39C183' size={25}/>
                                                </View>
                                            </TouchableNativeFeedback>
                                            <TouchableNativeFeedback onPress={() =>this.props.navigation.navigate('HealthDocument')}>
                                                <View style={{margin:8}}>
                                                    <IconC name='file-document-box' color='#2979FF' size={25}/>
                                                </View>
                                            </TouchableNativeFeedback>
                                            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Attention')}>
                                                <View style={{margin:8}}>
                                                    <Icon name='person-add' color='#FF1744' size={25}/>
                                                </View>
                                            </TouchableNativeFeedback>

                                        </View>
                                    </View>

                                </View>
                            </TouchableNativeFeedback>
                        </Card>
                        <Spacer size={16} />
                        <Card>
                            <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Doc_Screen')}>
                                <View style={{flexDirection:'row',paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                    <View style={{flex:2,paddingLeft:15}}>
                                        <View style={{flex:1,}}>
                                            <Image source={require('./resources/img/person_doctor.png')} style={{height:70,width:70,borderRadius:35}}/>
                                        </View>
                                    </View>

                                    <View style={{flex:5,flexDirection:'column'}}>
                                        <View style={{flex:3,flexDirection:'row'}}>
                                            <View style={{flex:6,justifyContent:'center',}}>
                                                <Text style={{fontSize:18}}>江左书生</Text>
                                            </View>
                                        </View>
                                        <View style={{flex:2,marginTop:5}}>
                                            <Text>某某某生产部经理，爱好运动，喜欢健身</Text>
                                        </View>
                                        <View style={{flex:2,flexDirection:'row'}}>
                                            <TouchableNativeFeedback  onPress={() =>this.props.navigation.navigate('PerLetter')}>
                                                <View style={{margin:8}}>
                                                    <IconC name='wechat' color='#39C183' size={25}/>
                                                </View>
                                            </TouchableNativeFeedback>
                                            <TouchableNativeFeedback onPress={() =>this.props.navigation.navigate('HealthDocument')}>
                                                <View style={{margin:8}}>
                                                    <IconC name='file-document-box' color='#2979FF' size={25}/>
                                                </View>
                                            </TouchableNativeFeedback>
                                            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Attention')}>
                                                <View style={{margin:8}}>
                                                    <Icon name='person-add' color='#FF1744' size={25}/>
                                                </View>
                                            </TouchableNativeFeedback>

                                        </View>
                                    </View>

                                </View>
                            </TouchableNativeFeedback>
                        </Card>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
