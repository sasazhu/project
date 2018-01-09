import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	Image,
	View,
    ScrollView,
	StatusBar,
	TouchableOpacity,
	Button,
	Alert,
	Switch,
} from 'react-native';
import {
    MKTextField
} from 'react-native-material-kit';
import { StackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/MaterialIcons';
const styles = StyleSheet.create({
    head: {
		flex:1.5,
		flexDirection:'row',
		alignItems:'flex-start',
		backgroundColor:'#39C183',
		justifyContent: 'space-around',
	},
    textfieldWithFloatingLabel:{
        height: 80,  // have to do it on iOS
        marginTop: 10,
    }
});


export default class ConsultScreen extends React.Component {
    //强制竖屏，不能横屏
    // componentWillMount() {
    //     Orientation.lockToPortrait();
    // }
	constructor(props) {
		super(props);
		this.state = { switchState: false }
	}
     onButtonPress(){
        Alert.alert('提交成功!');
    };
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name,
        headerTitleStyle:{
            color:'white',
        },
        headerTintColor: 'white',
        headerPressColorAndroid: 'white',
        headerStyle:{
            backgroundColor:'#2979FF',
            marginTop:20
        },
        headerRight: (<Icon.Button name='search' size={24} color='white' backgroundColor='transparent'/>)


    });
	render() {
        // const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
        //     .withPlaceholder('Number...')
        //     .withStyle(styles.textfieldWithFloatingLabel)
        //     .withTextInputStyle({flex: 1})
        //     .withFloatingLabelFont({
        //         fontSize: 10,
        //         fontStyle: 'italic',
        //         fontWeight: '200',

        //     })
        //     .build();

        return(
			<View style={{flex:1,backgroundColor:'#ffffff'}}>

                <StatusBar backgroundColor='#2962FF' />
				<ScrollView style={{flex:1, flexDirection:'column', padding: 10}}>
					<View style={{flex:2,marginBottom:20}}>
						<TextInput  underlineColorAndroid='transparent' multiline={true} style={{borderRadius: 10, borderWidth:1, borderColor:'#FF1744', height: 80, padding: 8}} placeholder='咨询主题' placeholderTextColor='#ccc'/>
                        {/* <TextfieldWithFloatingLabel /> */}
                    </View>
					<View style={{flex:4}}>
						<TextInput  underlineColorAndroid='transparent' multiline={true} style={{borderRadius: 10, borderWidth:1, borderColor:'#FF1744', height: 200, padding:8}} placeholder='详细描述所需咨询内容，包括症状、发病时间、部位、用药情况'  placeholderTextColor='#ccc' />
					</View>
					<View style={{flex:1, flexDirection:'row',marginBottom:20}}>

						<View style={{flex:8}}>
							<Switch 
								onValueChange={(value) => this.setState({switchState: !this.state.switchState})}
								value={this.state.switchState}
							/>
						</View>
						<View style={{flex:1, alignSelf:'flex-start', justifyContent:'center'}}>
							<Text style={{paddingTop:4}}>公开</Text>
						</View>
					</View>
				</ScrollView>
				
				<View style={{ padding:8,borderRadius:15,backgroundColor:'#FF1744',margin:10}}>
					<Button
						onPress={this.onButtonPress.bind(this)}
						title='提交咨询'
						color='#FF1744'
					/>
				</View>
			</View>
		);

	}
}
