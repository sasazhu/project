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
    Dimensions
} from 'react-native';
import Echarts from 'native-echarts';
import Orientation from 'react-native-orientation';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

var styles = StyleSheet.create({
    head: {
        flexDirection:'row',
        alignItems:'flex-start',
        backgroundColor:'#39C181',
        justifyContent: 'space-around',
        paddingTop:28,
        paddingBottom:10,
    },
    container: {
        flex : 1,
        padding : 5,
        flexDirection: 'row',
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        backgroundColor: '#ffffff',
    },
//左侧商品图
    goodImg : {
        width : 110,
        height : 130,
        marginRight: 15
    },
//右侧商品信息
    goodInfo : {
        flex : 1,
        flexDirection : 'column'
    },
    goodTit : {
        fontSize : 16,
        height : 26,
        fontWeight : '600',
        color : '#666',
        textAlign: 'left',
        marginTop: 5,
        marginRight: 10,
    },
// 价格
    goodRow : {
        flexDirection : 'row',
        alignItems: 'center',
        marginTop : 0,
        marginBottom : 5
    },
    nPrice : {
        fontSize : 13,
        marginRight : 2,
        color : '#777'
    },
    yen :{
        fontSize : 13
    },
    oPrice : {
        fontSize : 12,
        color : '#b0b0b0'
    },
// 购买及按钮
    goodExtra : {
        flexDirection :'row',
        alignItems: 'center',
        justifyContent : 'flex-end'
    },
    goodSold : {
        color : '#b0b0b0'
    },
    goodBtnWarp : {
        borderWidth : 1,
        padding : 5,
        borderColor : '#3164ce',
        borderRadius : 3
    },
    goodBtn : {
        color : '#3164ce'
    },
    infoItem: {
        minWidth:80,
        marginRight:16,
        marginBottom:8,
        marginLeft:16
    },
    tabItem: {
        paddingBottom:0,
        paddingTop:5,

        flexDirection:'column',
        marginTop:5,
        flex:1,
    },
    mustIcon: {
        alignSelf: 'center',
        width:32,
        height:32
    },
    mustText:{
        color:'#39c183',
    }

});

export default class HealthDocument extends React.Component {
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }
    // static navigationOptions ={
    //     title:'健康档案',
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
    constructor(props) {
        super(props);
        this.state = {
            apple:[2, 4, 7, 2, 2, 7, 13, 16],
            organ: [6, 9, 9, 2, 8, 7, 17, 18],
            back_grd1:'#39c183',
            back_grd2:'#ccc',
            back_grd3:'#ccc',

        }
    }


    change1(){
       this.setState({
           back_grd1:'#39c183',
           back_grd2:'#ccc',
           back_grd3:'#ccc',
         });
    }
    change2(){
        this.setState({
            back_grd2:'#39c183',
            back_grd1:'#ccc',
            back_grd3:'#ccc',
        });
    }
    change3(){
        this.setState({
            back_grd3:'#39c183',
            back_grd2:'#ccc',
            back_grd1:'#ccc',
        });
    }

    render() {
        // var {height, width} = Dimensions.get('window');
        const option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['苹果', '橘子']
            },
            toolbox: {
                show: true,
                showTitle: true,
                feature: {
                    dataView: { show: true, readOnly: false }


                }
            },
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    lte: 5,
                    color: 'red'
                }, {
                    gt: 5,
                    lte: 15,
                    color: '#096'
                }, {
                    gt: 15,
                    color: 'red'
                }],
                ourOfRange: {
                    color: 'red'
                }
            },
            xAxis: [{
                boundaryGap: true,
                type: 'category',
                name: '时间',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
            }],
            yAxis: [{
                type: 'value',
                name: '销量(kg)'
            }],
            series: [{
                name: '苹果',
                type: 'line',
                data: this.state.apple,
                markLine: {
                    silent: true,
                    data: [{
                        name: '心跳过缓',
                        yAxis: 5
                    }, {
                        name: '心动过速',
                        yAxis: 15
                    }]
                }
            },
                {
                    name: '橘子',
                    type: 'line',
                    data: this.state.organ,
                    markLine: {
                        silent: true,
                        data: [{
                            name: '心跳过缓',
                            yAxis: 5

                        }, {
                            name: '心动过速',
                            yAxis: 15

                        }]
                    }
                }
            ]
        };


        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <StatusBar backgroundColor='#D50000' />
                <ScrollView>
                <View style={{flexDirection:'row',marginLeft:8,marginRight:8,marginTop:8,paddingBottom:8,borderBottomWidth:1,borderColor:'#ccc'}}>
                    <View style={{alignSelf:'center',marginRight:5}}>
                        <Image source={require('./resources/img/person_doctor.png')} style={{borderRadius:38, height:70,width:65}} />
                    </View>
                    <View style={{flex:1}}>

                        <Text style={{paddingRight:10, lineHeight:22,color:"#000"}}>
                            简介：某企业生产部经理，爱好健身、登山.
                        </Text>
                    </View>
                    <View style={{alignSelf:'center',alignItems: 'center',justifyContent : 'flex-end'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PersonTable')} style={{padding : 5}}>
                            <Image source={require('./resources/img/go.png')} style={{width:20, height:20}} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:8,borderBottomWidth:8,borderColor:'#eee'}}>

                    <View style={styles.infoItem}>
                        <Text style={{color:'#000'}}>姓名：张三</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={{color:'#000'}}>性别：男</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={{color:'#000'}}>年龄：25</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={{color:'#000'}}>血型：o</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={{color:'#000'}}>身高：175</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={{color:'#000'}}>体重：140</Text>
                    </View>
                </View>

                <View style={{height:800}}>
                    <ScrollableTabView
                        initialPage={0}
                        renderTabBar={() => <DefaultTabBar />}
                        tabBarUnderlineStyle={{backgroundColor:'#39c183'}}
                        tabBarActiveTextColor='#39c183'
                        tabBarTextStyle={{fontSize: 14, fontWeight:'bold',margin:0, padding:0}}
                        tabBarInactiveTextColor='#999'
                        scrollWithoutAnimation={true}>
                        {/*安全宝tab选项卡*/}
                        <View style={{ flexDirection:'column', borderBottomWidth:1, borderColor:'#ccc'}} tabLabel='安全宝'>
                            <View style={{flexDirection:'row',height:200}}>
                                <View style={{flex:2, alignSelf:'flex-start', flexDirection:'column'}}>
                                    <View style={{minHeight:80,alignSelf:'center', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                                        <Image source={require('./resources/img/blue_tooth.png')} style={styles.mustIcon} />
                                        <Text style={styles.mustText}>已连接</Text>
                                    </View>
                                    <View style={{minHeight:80,alignSelf:'center', justifyContent:'center', flexDirection:'column'}}>
                                        <Image source={require('./resources/img/battery-charging.png')} style={styles.mustIcon} />
                                        <Text style={styles.mustText}>电量</Text>
                                    </View>
                                </View>
                                <View style={{flex:3, marginTop:20}} >
                                    <View style={{width:120, height:120,borderWidth:1,borderColor:'#39c183', flexDirection:'column', alignSelf:'center', justifyContent:'center', alignItems:'center',borderRadius:120, borderStyle:'solid'}} onPress={this.onClose}>
                                        <Text style={{height:56, fontSize:16, color:'#39c183', lineHeight:56}}>--</Text>
                                        <Text style={{height:56, fontSize:16, color:'#39c183', lineHeight:56}}>BPM</Text>
                                    </View>
                                </View>
                                <View style={{flex:2, alignSelf:'flex-start', flexDirection:'column'}}>
                                    <View style={{minHeight:80,alignSelf:'center', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                                        <Image source={require('./resources/img/temperature.png')} style={styles.mustIcon} />
                                        <Text style={styles.mustText}>温度</Text>
                                    </View>
                                    <View style={{minHeight:80,alignSelf:'center', justifyContent:'center', flexDirection:'column'}}>
                                        <Image source={require('./resources/img/heartbeat-fill.png')} style={styles.mustIcon} />
                                        <Text style={styles.mustText}>心率水平</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{height:400}}>
                                {/*<ScrollView style={{flex:1}}>*/}
                                    <Echarts option={option}/>
                                {/*</ScrollView>*/}
                            </View>
                            <View style={{height:1000}}>
                                {/*体征分析*/}
                                <View style={{flexDirection:'column',paddingLeft:8,paddingRight:8,paddingBottom:8,borderTopWidth:8,borderColor:'#eee',marginTop:10}}>
                                    <Text style={{fontSize:16,fontWeight:'bold',lineHeight:28,color:"#000"}}>体征分析</Text>
                                    <Text style={{fontSize:14,lineHeight:18,color:'#656565'}}>体温36.8℃,脉搏每分钟76次,呼吸每分钟17次,均处于正常范围内,血压</Text>
                                </View>
                                {/*健康建议*/}
                                <View style={{flexDirection:'column',marginLeft:8,marginRight:8,paddingBottom:8}}>
                                    <Text style={{fontSize:16,fontWeight:'bold',color:"#000"}}>健康建议</Text>
                                    <Text style={{fontSize:14,lineHeight:18,color:'#656565'}}>体温36.8℃,脉搏每分钟76次,呼吸每分钟17次,均处于正常范围内,血压</Text>
                                </View>
                            </View>
                        </View>

                        {/*体检记录tab选项卡*/}
                        <View  tabLabel='体检记录'>
                            <View style={{flexDirection:'row', flexWrap: 'wrap',paddingBottom:0, paddingTop:5, marginTop:5,height:300}}>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                            </View>
                            <View>
                                {/*体征分析*/}
                                <View style={{flexDirection:'column',paddingLeft:8,paddingRight:8,paddingBottom:8,borderTopWidth:8,borderColor:'#eee',marginTop:10}}>
                                    <Text style={{fontSize:16,fontWeight:'bold',lineHeight:28,color:"#000"}}>体征分析</Text>
                                    <Text style={{fontSize:14,lineHeight:18,color:'#656565'}}>体温36.8℃,脉搏每分钟76次,呼吸每分钟17次,均处于正常范围内,血压</Text>
                                </View>
                                {/*健康建议*/}
                                <View style={{flexDirection:'column',marginLeft:8,marginRight:8,paddingBottom:8}}>
                                    <Text style={{fontSize:16,fontWeight:'bold',color:"#000"}}>健康建议</Text>
                                    <Text style={{fontSize:14,lineHeight:18,color:'#656565'}}>体温36.8℃,脉搏每分钟76次,呼吸每分钟17次,均处于正常范围内,血压</Text>
                                </View>
                            </View>
                        </View>
                        {/*就诊记录tab选项卡*/}
                        <View  tabLabel='就诊记录'>
                            <View style={{flexDirection:'row', flexWrap: 'wrap',paddingBottom:0, paddingTop:5, marginTop:5,height:300}}>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                                <View style={{margin:8}}>
                                    <Image source={require('./resources/img/timg.jpg')} style={{width:100, height:120}} />
                                </View>
                            </View>
                            <View>
                                {/*体征分析*/}
                                <View style={{flexDirection:'column',paddingLeft:8,paddingRight:8,paddingBottom:8,borderTopWidth:8,borderColor:'#eee',marginTop:10}}>
                                    <Text style={{fontSize:16,fontWeight:'bold',lineHeight:28,color:"#000"}}>体征分析</Text>
                                    <Text style={{fontSize:14,lineHeight:18,color:'#656565'}}>体温36.8℃,脉搏每分钟76次,呼吸每分钟17次,均处于正常范围内,血压</Text>
                                </View>
                                {/*健康建议*/}
                                <View style={{flexDirection:'column',marginLeft:8,marginRight:8,paddingBottom:8}}>
                                    <Text style={{fontSize:16,fontWeight:'bold',color:"#000"}}>健康建议</Text>
                                    <Text style={{fontSize:14,lineHeight:18,color:'#656565'}}>体温36.8℃,脉搏每分钟76次,呼吸每分钟17次,均处于正常范围内,血压</Text>
                                </View>
                            </View>
                        </View>
                        {/*健康模型tab选项卡*/}
                        <View tabLabel='健康模型' style={{height:600}}>
                            <View  style={{flexDirection:'row',paddingBottom:0, paddingTop:5, justifyContent:'space-between', marginTop:5,}}>
                                {/*左边数据显示*/}
                                <View style={{flexDirection:'column',flex:3,marginTop:8,marginBottom:8,height:200}}>
                                    <View style={{justifyContent:'center',alignSelf:'center',flex:1}}>
                                        <Image source={require('./resources/img/sit.png')} style={{width:46,height:46,alignSelf:'center'}} />
                                        <Text style={{alignSelf:'center',color:'#39c183'}}>人体安静状态体征数据</Text>
                                    </View>
                                    <View style={{flexDirection:'row',flex:1}}>
                                        <View style={{justifyContent:'flex-end',alignSelf:'flex-end',flex:1,flexDirection:'column'}}>
                                            <Image source={require('./resources/img/heart.png')} style={{width:20,height:20,alignSelf:'center'}} />
                                            <Text style={{alignSelf:'center',color:'#39c183'}}>心率数值</Text>
                                        </View>
                                        <View style={{justifyContent:'center',alignSelf:'flex-end',flex:1,flexDirection:'column'}}>
                                            <Image source={require('./resources/img/press.png')} style={{width:20,height:20,alignSelf:'center'}} />
                                            <Text style={{alignSelf:'center',color:'#39c183'}}>血压数值</Text>
                                        </View>
                                    </View>
                                    <View style={{alignSelf:'flex-end',flexDirection:'row',flex:1}}>
                                        <View style={{justifyContent:'center',alignSelf:'flex-end',flex:1,flexDirection:'column'}}>
                                            <Image source={require('./resources/img/temp.png')} style={{width:20,height:20,alignSelf:'center'}} />
                                            <Text style={{alignSelf:'center',color:'#39c183'}}>体温数值</Text>
                                        </View>
                                        <View style={{justifyContent:'center',alignSelf:'flex-end',flex:1,flexDirection:'column'}}>
                                            <Image source={require('./resources/img/blood.png')} style={{width:20,height:20,alignSelf:'center'}} />
                                            <Text style={{alignSelf:'center',color:'#39c183'}}>血氧数值</Text>
                                        </View>
                                    </View>
                                </View>
                                {/*右边的状态显示*/}
                                <View style={{flex:1,flexDirection:'column'}}>
                                    <TouchableOpacity style={{justifyContent:'center',alignSelf:'center',flex:1,flexDirection:'column'}}
                                                      onPress={this.change1.bind(this)}>
                                        {/*<Image source={require('./resources/img/sit.png')} style={{width:20,height:20,alignSelf:'center'}} />*/}
                                        <Text style={{alignSelf:'center',color:this.state.back_grd1}}>安静状态</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{justifyContent:'center',alignSelf:'center',flex:1,flexDirection:'column'}}
                                                      onPress={this.change2.bind(this)}>
                                        {/*<Image source={require('./resources/img/run_green.png')} style={{width:20,height:20,alignSelf:'center'}} />*/}
                                        <Text style={{alignSelf:'center',color:this.state.back_grd2}}>运动状态</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.change3.bind(this)} style={{justifyContent:'center',alignSelf:'center',flex:1,flexDirection:'column'}}>
                                        {/*<Image source={require('./resources/img/sleep_green.png')} style={{width:20,height:20,alignSelf:'center'}} />*/}
                                        <Text style={{alignSelf:'center',color:this.state.back_grd3}}>睡眠状态</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/*体征分析*/}
                            <View style={{flexDirection:'column',paddingLeft:8,paddingRight:8,paddingBottom:8,borderTopWidth:8,borderColor:'#eee'}}>
                                <Text style={{fontSize:16,fontWeight:'bold',lineHeight:28,color:"#000"}}>体征分析</Text>
                                <Text style={{fontSize:14,lineHeight:18,color:'#656565'}}>体温36.8℃,脉搏每分钟76次,呼吸每分钟17次,均处于正常范围内,血压</Text>
                            </View>
                            {/*健康建议*/}
                            <View style={{flexDirection:'column',marginLeft:8,marginRight:8,paddingBottom:8}}>
                                <Text style={{fontSize:16,fontWeight:'bold',color:"#000"}}>健康建议</Text>
                                <Text style={{fontSize:14,lineHeight:18,color:'#656565'}}>体温36.8℃,脉搏每分钟76次,呼吸每分钟17次,均处于正常范围内,血压</Text>
                            </View>
                        </View>
                    </ScrollableTabView>
                </View>
                </ScrollView>
            </View>
        );
    }
}