import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,StatusBar,ScrollView,Navigator,TouchableNativeFeedback} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';
export default class Hospital extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'#ffffff'}}>

                {/*医院详情*/}
                <View style={{flex:8}}>
                    <StatusBar backgroundColor='#7B1FA2' />
                    <ScrollView style={{flex:1,padding:16}}>
                        <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Hos_introduction')}>
                            <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                <View style={{flex:2,paddingLeft:15}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image source={require('./resources/img/hospital.jpg')} style={{height:60,width:60}}/>
                                    </View>
                                </View>

                                <View style={{flex:5,flexDirection:'column'}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Text style={{fontSize:16,color:'#000'}}>中南大学湘雅医院</Text>
                                        <Text style={{fontSize:14,color:'#656565'}}>湖南长沙市湘雅路37号</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Hos_introduction')}>
                            <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                <View style={{flex:2,paddingLeft:15}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image source={require('./resources/img/hospital.jpg')} style={{height:60,width:60}}/>
                                    </View>
                                </View>

                                <View style={{flex:5,flexDirection:'column'}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Text style={{fontSize:16,color:'#000'}}>中南大学湘雅医院</Text>
                                        <Text style={{fontSize:14,color:'#656565'}}>湖南长沙市湘雅路37号</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback style={{flex:2,flexDirection:'row'}} onPress={()=>this.props.navigation.navigate('Hos_introduction')}>
                            <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius: 2, elevation: 2,paddingTop:10,marginBottom:10,paddingBottom:7}}>
                                <View style={{flex:2,paddingLeft:15}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Image source={require('./resources/img/hospital.jpg')} style={{height:60,width:60}}/>
                                    </View>
                                </View>

                                <View style={{flex:5,flexDirection:'column'}}>
                                    <View style={{flex:1,justifyContent:'center'}}>
                                        <Text style={{fontSize:16,color:'#000'}}>中南大学湘雅医院</Text>
                                        <Text style={{fontSize:14,color:'#656565'}}>湖南长沙市湘雅路37号</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableNativeFeedback>
                    </ScrollView>
                </View>
                {/*<View style={{flex:8}}>*/}
                    {/*<Text></Text>*/}
                {/*</View>*/}
            </View>
        );
    }
}
// export const ModalStack = StackNavigator({
//     Hospital: {
//         screen:Hospital,
//     },
//     Texts: {
//         screen:HosText,
//     },
// },{
//     headerMode:'none',
// });
// export default class App extends React.Component{
//     render(){
//         return(
//             <ModalStack />
//         );
//     }
//
// }
