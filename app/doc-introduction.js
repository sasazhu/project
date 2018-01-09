import React from 'react';
import { StyleSheet,StatusBar, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import Orientation from 'react-native-orientation';
export default class Doc_Screen extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#AA00FF' />
                <View style={{flex:8,padding:8}}>
                    <ScrollView style={{flex:1}}>
                        <Text>姓名：范儒龙</Text>
                        <Text>性别：男</Text>
                        <Text>科室：外科</Text>
                        <Text>职位：副主任医师</Text>
                        <Text>专家特长：毕业于中南大学湘雅医学院，从事外科临床工作46年，积累了丰富的专业知识和业务经验，曾在中南大学湘雅医院、上海长海医院深造学习外科微创手术</Text>
                        <Text>主治：腰椎间盘突出、骨质疏松症、骨关节炎、强直性脊椎炎、股骨头缺血坏死、前列腺增生、前列腺炎、男性不育症、包皮疾病、胆道疾患、阑尾炎、疝、痔疮、肛瘘、乳腺肿瘤、静脉曲张、慢性皮肤溃疡等疾病，操作精细、技术独特，疗效显著。</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}