import React,{Component} from 'react';
import {View, Image, Text,TouchableOpacity,ScrollView,StatusBar,StyleSheet,TextInput,KeyboardAvoidingView,Switch, Modal,Button,Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';
export default class PersonTable extends Component{
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }
    constructor(props) {
        super(props);
        this.state = {
            switchState: false ,//switch按钮初始值
            animationType: 'none',//none slide fade
            modalVisible: false,//模态场景是否可见
            transparent: true,//是否透明显示
        }
    }
    onButtonPress(){
        Alert.alert('已保存!');
    };
    _setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    render(){

        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : 'red',
        };
        let innerContainerTransparentStyle = this.state.transparent
            ? { backgroundColor: '#fff', padding: 20 }
            : null;

        return(
            <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>
                <StatusBar backgroundColor='#00796B' />
                {/*点击图片弹出弹出框*/}
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._setModalVisible(false) } }
                    onShow={this.startShow}
                >
                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <Image style={{height:'90%',width:'100%'}} source={require('./resources/img/timg.jpg')}/>

                            <Text
                                onPress={this._setModalVisible.bind(this,false)}
                                style={{fontSize:20,marginTop:10}}>
                                关闭
                            </Text>
                        </View>
                    </View>
                </Modal>
                <View style={{flex:9}}>
                    <ScrollView style={{flex:1,marginRight:16,marginLeft:16}} >
                        {/*头像*/}
                        <View style={{flex:1.5,justifyContent:'center',alignItems:'flex-end',flexDirection:'row',margin:5}}>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image style={{height:60,width:60,borderRadius:30,borderWidth:1}} source={require('./resources/img/person_doctor.png')}/>
                            </View>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Camera')} >
                                <Image style={{height:20,width:20}} source={require('./resources/img/ic_camera_gray_24dp.png')}/>
                            </TouchableOpacity>
                        </View>
                        {/*表格*/}
                        <View style={{flex:2}}>
                            <View style={{flexDirection:'column',marginTop:8,flex:1}}>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <View style={styles.infoItem}>
                                        <Text style={{color:'#000',fontSize:16,marginRight:30}}>姓名：张三</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text style={{color:'#000',fontSize:16}}>昵称：三三三</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection:'row'}}>
                                    <View style={styles.infoItem}>
                                        <Text style={{color:'#000',fontSize:16,marginRight:30}}>性别：男</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text style={{color:'#000',fontSize:16}}>出生年月：1987-02-02</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={styles.infoItem}>
                                        <Text style={{color:'#000',fontSize:16,marginRight:30}}>身高：175</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text style={{color:'#000',fontSize:16}}>体重：140</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={styles.infoItem}>
                                        <Text style={{color:'#000',fontSize:16,marginRight:30}}>年龄：35</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text style={{color:'#000',fontSize:16}}>血型：O型</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/*个人简介*/}
                        <View style={{flex:2,marginTop:5}}>
                            <Text style={{fontSize:16,color:'#000',marginTop:8,marginBottom:8}}>个人简介</Text>
                            <TextInput
                                editable = {true}
                                multiline={true}
                                placeholder='请输入文字'
                                placeholderTextColor='#ccc'
                                    underlineColorAndroid='transparent'
                                style={{borderWidth:1,borderColor:'#FF1744',borderRadius:10,height:100}}
                            />
                        </View>
                        {/*体检记录*/}
                        <View style={{flex:2,marginTop:5}}>
                            <Text style={{fontSize:16,color:'#000',marginTop:8,marginBottom:8}}>体检记录</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between', flexWrap: 'wrap'}}>
                                <TouchableOpacity  onPress={this._setModalVisible.bind(this, true) } style={{height:80,width:60}}  >
                                    <Image style={{height:80,width:60}} source={require('./resources/img/timg.jpg')}/>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={this._setModalVisible.bind(this, true) } style={{height:80,width:60}}  >
                                    <Image style={{height:80,width:60}} source={require('./resources/img/timg.jpg')}/>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={this._setModalVisible.bind(this, true) } style={{height:80,width:60}}  >
                                    <Image style={{height:80,width:60}} source={require('./resources/img/timg.jpg')}/>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={this._setModalVisible.bind(this, true) } style={{height:80,width:60}}  >
                                    <Image style={{height:80,width:60}} source={require('./resources/img/timg.jpg')}/>
                                </TouchableOpacity>

                            </View>

                        </View>
                        {/*就诊记录*/}
                        <View style={{flex:2,marginTop:5}}>
                            <Text style={{fontSize:16,color:'#000',marginTop:8,marginBottom:8}}>就诊记录</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between', flexWrap: 'wrap'}}>
                                <TouchableOpacity  onPress={this._setModalVisible.bind(this, true) } style={{height:80,width:60}}  >
                                    <Image style={{height:80,width:60}} source={require('./resources/img/timg.jpg')}/>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={this._setModalVisible.bind(this, true) } style={{height:80,width:60}}  >
                                    <Image style={{height:80,width:60}} source={require('./resources/img/timg.jpg')}/>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={this._setModalVisible.bind(this, true) } style={{height:80,width:60}}  >
                                    <Image style={{height:80,width:60}} source={require('./resources/img/timg.jpg')}/>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={this._setModalVisible.bind(this, true) } style={{height:80,width:60}}  >
                                    <Image style={{height:80,width:60}} source={require('./resources/img/timg.jpg')}/>
                                </TouchableOpacity>

                            </View>

                        </View>
                        {/*是否公开健康档案*/}
                        <View style={{flex:1,flexDirection:'row',marginTop:5}}>
                            <View style={{flex:1, alignSelf:'flex-start', justifyContent:'center'}}>
                                <Text style={{fontSize:16,color:'#000',marginTop:8,marginBottom:8}}>是否公开健康</Text>
                            </View>
                            {/*switch按钮*/}
                            <View style={{marginTop:8}}>
                                <Switch
                                    onValueChange={(value) => this.setState({switchState: !this.state.switchState})}
                                    value={this.state.switchState}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                {/*保存按钮*/}

                <View style={{ padding:8,borderRadius:15,backgroundColor:'#FF1744',margin:10}}>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        title='保存'
                        color='#FF1744'
                    />
                </View>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    title: { flex: 1, },
    row: { height: 28,},
    text: { textAlign: 'center' },
    consultBtn:{
        flex:1,
        justifyContent:'center',
        width:100,
        backgroundColor:'#39c183',
        alignItems:'center',
        borderRadius:20,
        flexDirection:'row'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    infoItem: {
        minWidth:80,
        flex:1,
        marginBottom:8,

    },

});