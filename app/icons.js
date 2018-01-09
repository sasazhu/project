import { Component } from 'react';
import {
    Alert, AppRegistry, StyleSheet, Text, StatusBar, 
    TouchableNativeFeedback, View, SectionList, Dimensions, FlatList, RefreshControl, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Card, Spacer } from './common_components'


export default class Icons extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#AA00FF" barStyle="light-content" />

                <ScrollView>
                    <View style={{ padding: 16, }}>
                        <Card title={
                            <Icon name='react' />
                        }>
                            <View>
                                <Text>see: https://github.com/oblador/react-native-vector-icons</Text>
                                <Text style={{ marginTop: 4 }}>1. Run: npm install react-native-vector-icons --save</Text>
                                <Text style={{ marginTop: 4 }}>2. Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:</Text>
                                <Text style={{ marginLeft: 16 }}>apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"</Text>
                                <Text style={{ marginTop: 4 }}>3. import icons in react-native .js file(s)</Text>
                                <Text style={{ marginLeft: 16 }}>import Icon from 'react-native-vector-icons/FontAwesome';</Text>
                                <Text style={{ marginTop: 4 }}>4. feel free to use it</Text>
                                <Text style={{ marginLeft: 16 }}>{'<Icon name="today" size={12} color="#888" style={{ marginRight: 4 }} />'}</Text>
                            </View>
                        </Card>

                        <Spacer size={8} />

                        <Card title="Styling">
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                                <Icon name="react" size={24} color="red" />
                                <Icon name="react" size={32} color="green" />
                                <Icon name="react" size={40} color="blue" />
                            </View>
                        </Card>

                        <Spacer size={8} />

                        <Card title="Icon.Button">
                            <View style={{ width: 156, alignSelf: 'center' }}>
                                <Icon.Button name='responsive' size={24} backgroundColor='#448AFF' borderRadius={4}>
                                    <View style={{ flexDirection: 'column', }}>
                                        <Text style={{ fontSize: 16, color: 'white', marginRight: 8 }}>Responsive</Text>
                                    </View>
                                </Icon.Button>
                            </View>
                        </Card>

                        <Spacer size={16} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 0,
            backgroundColor: 'transparent',
        },
    },
)
