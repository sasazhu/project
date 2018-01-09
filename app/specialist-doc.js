
import React, { Component } from 'react';
import {
	StyleSheet,
	AppRegistry,
	Text,
	TextInput,
	Image,
	View,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	Button,
	Alert,
    TouchableNativeFeedback
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';
export default class SpecialistScreen extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }

	render() {
		return(

            <View style={{flex:1, backgroundColor:'#ffffff'}}>
                {/*医生详情*/}
                <View style={{flex:8}}>
                    <StatusBar backgroundColor='#C2185B' />
                    <ScrollView style={{flex:1,padding:16}}>
                        <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Doc_Screen')}>
                            <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                <View style={{flex:2,paddingLeft:15}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image source={require('./resources/img/person_doctor.png')} style={{height:60,width:60,borderRadius:30}}/>
                                    </View>
                                </View>

                                <View style={{flex:5,flexDirection:'column'}}>
                                    <View style={{flex:3,flexDirection:'row'}}>
                                        <View style={{flex:3,justifyContent:'center'}}>
                                            <Text style={{fontSize:20,textAlign:'center'}}>刘医生</Text>
                                        </View>
                                        <View style={{flex:6,justifyContent:'center',}}>
                                            <Text style={{color:'#989898'}}>主任医师</Text>
                                        </View>
                                    </View>
                                    <View style={{flex:2}}>
                                        <Text style={{fontSize:12}}>擅长：擅长于普内，神经内科常见疾病及心身疾病的诊疗</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Doc_Screen')}>
                            <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                <View style={{flex:2,paddingLeft:15}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image source={require('./resources/img/person_doctor.png')} style={{height:60,width:60,borderRadius:30}}/>
                                    </View>
                                </View>

                                <View style={{flex:5,flexDirection:'column'}}>
                                    <View style={{flex:3,flexDirection:'row'}}>
                                        <View style={{flex:3,justifyContent:'center'}}>
                                            <Text style={{fontSize:20,textAlign:'center'}}>刘医生</Text>
                                        </View>
                                        <View style={{flex:6,justifyContent:'center',}}>
                                            <Text style={{color:'#989898'}}>主任医师</Text>
                                        </View>
                                    </View>
                                    <View style={{flex:2}}>
                                        <Text style={{fontSize:12}}>擅长：擅长于普内，神经内科常见疾病及心身疾病的诊疗</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Doc_Screen')}>
                            <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                <View style={{flex:2,paddingLeft:15}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image source={require('./resources/img/person_doctor.png')} style={{height:60,width:60,borderRadius:30}}/>
                                    </View>
                                </View>

                                <View style={{flex:5,flexDirection:'column'}}>
                                    <View style={{flex:3,flexDirection:'row'}}>
                                        <View style={{flex:3,justifyContent:'center'}}>
                                            <Text style={{fontSize:20,textAlign:'center'}}>刘医生</Text>
                                        </View>
                                        <View style={{flex:6,justifyContent:'center',}}>
                                            <Text style={{color:'#989898'}}>主任医师</Text>
                                        </View>
                                    </View>
                                    <View style={{flex:2}}>
                                        <Text style={{fontSize:12}}>擅长：擅长于普内，神经内科常见疾病及心身疾病的诊疗</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableNativeFeedback>

                    </ScrollView>
                </View>
                {/*<View style={{flex:5}}>*/}
                {/*<Text></Text>*/}
                {/*</View>*/}
            </View>
		);	
	}
}	
					

