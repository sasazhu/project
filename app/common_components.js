import * as React from 'react';
import {
    Alert, AppRegistry, StyleSheet, Text, StatusBar, 
    TouchableNativeFeedback, View, ScrollView
} from 'react-native';


export const Splitter = (props) => <View style={{ margin: props.height, }} />

export const Spacer = (props) => <View style={{ marginTop: props.size }} />

export const Card = (props) => {

    let title = null
    if (props.title) {
        if (typeof(props.title) === 'string') {
            title = (
                <View style={{ padding: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.title}</Text>
                </View>
            )
        }
        else
            title = props.title
    }
    return (

        <View style={{ borderRadius: 2, elevation: 2, backgroundColor: 'white', borderColor: '#ccc', borderWidth: 1, borderStyle: 'solid', }} >
            { title }
            <View style={{ height: 1, backgroundColor: '#ccc' }} />
            <View style={{ padding: 8 }}>
                {props.children}
            </View>
        </View>
    )
}
