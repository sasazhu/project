import React from 'react';
import { StyleSheet,StatusBar, Text, View,Image,TouchableOpacity,ScrollView,Navigator,TouchableNativeFeedback} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';

import { Card, Spacer } from './common_components'

import IconC from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Attention extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }
     constructor(){
         super();
         this.state={
             toggle:false
         }

     }
     togglecolor(){
         this.setState({
             toggle:!this.state.toggle
         })
     }
    render(){
         let color =this.state.toggle ? 'favorite-border' : 'favorite';
        return(
            <View style={{flex:1, backgroundColor:'#ffffff'}}>
                <StatusBar backgroundColor='#304FFE' />
                <View style={{flex:8}}>
                    <ScrollView style={{flex:1,padding:16}}>
                        {/*我关注的专家*/}

                        <Card>
                            <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}}>
                                <View style={{flexDirection:'row',paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                    <View style={{flex:2,paddingLeft:10}}>
                                        <View style={{flex:1,}}>
                                            <Image source={require('./resources/img/person_doctor.png')} style={{height:70,width:70,borderRadius:35}}/>
                                        </View>
                                    </View>

                                    <View style={{flex:5,flexDirection:'column'}}>
                                        <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                                            <Text style={{fontSize:18}}>范医生</Text>
                                            <Text style={{fontSize:14,marginLeft:5,color:'#989898'}}>主任医师、教授</Text>
                                        </View>
                                        <View style={{flex:2}}>
                                            <Text style={{fontSize:14,color:'#656565',lineHeight:22}}>湘雅医院主任医师湘雅医院主任医师湘雅医院主任医师</Text>
                                        </View>
                                        <View style={{flex:2,flexDirection:'row'}}>

                                            <TouchableNativeFeedback onPress={this.togglecolor.bind(this)}>
                                                <View style={{margin:5}}>
                                                    <Icon name={color} color='#FF1744' size={30}/>
                                                </View>
                                            </TouchableNativeFeedback>
                                            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Fans')}>
                                                <View style={{margin:5,flexDirection:'row',marginLeft:30,justifyContent:'center', alignItems:'center'}}>
                                                    <Icon name='person-add' color='#3D5AFE' size={30}/>
                                                    <Text style={{marginLeft:10}}>5005</Text>
                                                </View>
                                            </TouchableNativeFeedback>

                                        </View>
                                    </View>

                                </View>
                            </TouchableNativeFeedback>
                        </Card>
                        <Spacer size={16} />
                        <Card>
                            <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}}>
                                <View style={{flexDirection:'row',paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                    <View style={{flex:2,paddingLeft:10}}>
                                        <View style={{flex:1,}}>
                                            <Image source={require('./resources/img/person_doctor.png')} style={{height:70,width:70,borderRadius:35}}/>
                                        </View>
                                    </View>

                                    <View style={{flex:5,flexDirection:'column'}}>
                                        <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                                            <Text style={{fontSize:18}}>范医生</Text>
                                            <Text style={{fontSize:14,marginLeft:5,color:'#989898'}}>主任医师、教授</Text>
                                        </View>
                                        <View style={{flex:2}}>
                                            <Text style={{fontSize:14,color:'#656565',lineHeight:22}}>湘雅医院主任医师湘雅医院主任医师湘雅医院主任医师</Text>
                                        </View>
                                        <View style={{flex:2,flexDirection:'row'}}>

                                            <TouchableNativeFeedback onPress={this.togglecolor.bind(this)}>
                                                <View style={{margin:5}}>
                                                    <Icon name={color} color='#FF1744' size={30}/>
                                                </View>
                                            </TouchableNativeFeedback>
                                            <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Fans')}>
                                                <View style={{margin:5,flexDirection:'row',marginLeft:30,justifyContent:'center', alignItems:'center'}}>
                                                    <Icon name='person-add' color='#3D5AFE' size={30}/>
                                                    <Text style={{marginLeft:10}}>5005</Text>
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
