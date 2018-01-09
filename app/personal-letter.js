import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,StatusBar,ScrollView,Navigator,TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';
export default class PerLetter extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }
    // static navigationOptions ={
    //     title:'江左书生',
    //     headerTitleStyle:{
    //         color:'white',
    //     },
    //     headerStyle:{
    //         backgroundColor:'#39C183'
    //     },
    //     headerRight:
    //         <TouchableOpacity style={{marginRight:20, flex:6,alignItems:'flex-end',marginTop:10}}>
    //             <Image source={require('./resources/img/search_white_24dp.png')}/>
    //         </TouchableOpacity>
    //
    // };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#ffffff'}}>
                <StatusBar backgroundColor='#303F9F' />
                <ScrollView style={{flex:1,flexDirection:'column',}}>
                    {/*接收*/}
                    <View style={{flexDirection:'row',alignItems:'center',margin:8}}>
                        <View style={{justifyContent:'flex-start'}}>
                            <Image style={{height:60,width:60,borderRadius:30,borderWidth:1}} source={require('./resources/img/person_doctor.png')} />
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Image source={require('./resources/img/arrow_left.png')} style={{width:25,height:25}} />
                        </View>
                        <View style={{height:'auto',width:'70%',borderRadius:10,backgroundColor:'#CDEFDF',marginLeft:-9}}>
                            <Text style={{textAlign:'left',padding:5}}>毕业于湘雅医科大学，湖南省心理医学会、行为医学委员会会员，心理健康咨询专家，从事内科临床四十余年，临床经验丰富。</Text>
                        </View>
                    </View>

                    {/*发送*/}
                    <View style={{flexDirection:'row',alignItems:'center',margin:8,justifyContent:'flex-end'}}>
                        <View style={{height:'auto',width:'70%',borderRadius:10,backgroundColor:'#96EDC3',marginRight:-9}}>
                            <Text style={{textAlign:'left',padding:5}}>毕业于湘雅医科大学，湖南省心理医学会、行为医学委员会会员，心理健康咨询专家，从事内科临床四十余年，临床经验丰富。</Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Image source={require('./resources/img/arrow_right.png')} style={{width:25,height:25}}/>
                        </View>
                        <View style={{justifyContent:'flex-end'}}>
                            <Image style={{height:60,width:60,borderRadius:30,borderWidth:1}} source={require('./resources/img/person_doctor.png')} />
                        </View>
                    </View>


                    <View style={{flexDirection:'row',alignItems:'center',margin:8,justifyContent:'flex-end'}}>
                        <View style={{height:'auto',width:'70%',borderRadius:10,backgroundColor:'#96EDC3',marginRight:-9}}>
                            <Text style={{textAlign:'left',padding:5}}>毕业于湘雅医科大学，湖南省心理医学会、行为医学委员会会员，心理健康咨询专家，从事内科临床四十余年，临床经验丰富。</Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Image source={require('./resources/img/arrow_right.png')} style={{width:25,height:25}}/>
                        </View>
                        <View style={{justifyContent:'flex-end'}}>
                            <Image style={{height:60,width:60,borderRadius:30,borderWidth:1}} source={require('./resources/img/person_doctor.png')} />
                        </View>
                    </View>


                    <View style={{flexDirection:'row',alignItems:'center',margin:8,justifyContent:'flex-end'}}>
                        <View style={{height:'auto',width:'70%',borderRadius:10,backgroundColor:'#96EDC3',marginRight:-9}}>
                            <Text style={{textAlign:'left',padding:5}}>毕业于湘雅医科大学，湖南省心理医学会、行为医学委员会会员，心理健康咨询专家，从事内科临床四十余年，临床经验丰富。</Text>
                        </View>
                        <View style={{justifyContent:'center'}}>
                            <Image source={require('./resources/img/arrow_right.png')} style={{width:25,height:25}}/>
                        </View>
                        <View style={{justifyContent:'flex-end'}}>
                            <Image style={{height:60,width:60,borderRadius:30,borderWidth:1}} source={require('./resources/img/person_doctor.png')} />
                        </View>
                    </View>

                </ScrollView>
                {/*固定底部的编辑发送*/}
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderTopWidth:1,borderColor:'#eee'}}>
                    <TouchableOpacity>
                        <Image source={require('./resources/img/keyboard.png')} style={{marginRight:10}}/>
                    </TouchableOpacity>

                    <View>
                        <TextInput
                            editable = {true}
                            multiline={true}
                            underlineColorAndroid='transparent'
                            style={{borderBottomWidth:1,borderColor:'#eee',width:250,marginBottom:10}}
                        />
                    </View>
                    <TouchableOpacity>
                        <Image source={require('./resources/img/add.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
