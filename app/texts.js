import React from 'react';
import { StyleSheet, Text,StatusBar, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import Orientation from 'react-native-orientation';
export default class TextsScreen extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#455A64' />
                {/*<View style={{flex:1,backgroundColor:'mediumspringgreen', flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>*/}
                    {/*<TouchableOpacity style={{marginLeft:20, flex:1}}>*/}
                        {/*<Image source={require('./resources/img/jiantou2.png')}/>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<View style={{marginLeft:20, flex:3}}>*/}
                        {/*<Text style={{color:'#ffffff', fontSize:18}}>动态</Text>*/}
                    {/*</View>*/}
                    {/*<TouchableOpacity style={{marginRight:20, flex:6,alignItems:'flex-end'}}>*/}
                        {/*<Image source={require('./resources/img/search_white_24dp.png')}/>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
                <View style={{flex:8,padding:8}}>
                    <ScrollView style={{flex:1}}>
                        <Text style={{color:'red',fontSize:16}}>体温、脉搏、呼吸、血压的正常值是多少？</Text>
                        <Text style={{color:'red'}}> 体温：T (Temperature)</Text>
                        <Text> 正常值：
                            口腔温度 正常 36.2~37.2℃
                            腋下温度 正常 36~37℃，
                            肛测温度 正常 36.5~37.7℃</Text>

                        <Text style={{color:'red'}}> 血压：BP (Blood pressue)</Text>
                        <Text> 正常值：
                            成人血压：
                            收缩压（SBP）小于140，大于90mmHg；
                            舒张压（DBP）小于90，大于60mmHg；
                            收缩压≥140mmHg和（或）舒张压≥90mmHg，为高血压；
                            收缩压＜90mmHg和（或）舒张压＜60mmHg，为低血压。</Text>

                        <Text style={{color:'red'}}> 脉搏：P（Pulse)</Text>
                        <Text>成人正常值 60-100次/分
                            新生儿平均为120～140次／分。
                            1岁120次／分，
                            3岁110次／分，
                            5岁100次／分，
                            7岁90次／分，
                            8岁后80次／分。</Text>

                        <Text style={{color:'red'}}> 呼吸：R（Respiration)</Text>
                        <Text> 成人正常值：16~20次/分，呼吸与脉搏比例为1：4；
                            新生儿：40-45次/分钟；
                            婴儿：30次/分钟；
                            幼儿：1－3岁：每分钟30～25 次；4-7岁：22次；8-14岁：20次/分钟。</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}