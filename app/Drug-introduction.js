import React from 'react';
import { StyleSheet, Text,StatusBar, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import Orientation from 'react-native-orientation';
export default class DrugScreen extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#C51162' />
                <View style={{flex:8,padding:8}}>
                    <ScrollView style={{flex:1}}>
                        <Text style={{color:'red',fontSize:16,textAlign:'center'}}>药品介绍:痔根断片。</Text>
                        <Text>【成份】:胶原蛋白(部分水解蛋白)、芦丁、狭叶番泻果实干浸膏。</Text>

                        <Text>【性状】:本品为糖衣片，除去糖衣后，呈棕褐色、味甜、豆香。</Text>

                        <Text>【功能主治】:用于痔疮及其相关症状，如瘙痒、灼痛。规格:基片量，O、265g。</Text>

                        <Text>【用法用量】:口服，一次2片，一日三次，疗程不少于14天，如需长期服用，应不少于6个月，但每连服14天后可间隔1个月再服。</Text>
                        <Text>【不良反应】:有时会出现轻度腹泻。禁忌:完全性机械性肠梗阻，绞窄性肠梗阻，脱肛患者及孕妇忌服。</Text>

                        <Text>【注意事项】:哺乳期妇女应在医生指导下服用。贮藏:密闭、置阴凉干澡处。包装:铝箔，4板20片。</Text>

                        <Text>【有效期】:36个月。</Text>
                        <Text>【批准文号】:注册证号:z20090011。</Text>
                        <Text>【生产企业】:德国汉堡爱活大药厂。</Text>


                    </ScrollView>
                </View>
            </View>
        );
    }
}