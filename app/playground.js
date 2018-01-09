import React, { Component } from 'react';
import {
    Alert, AppRegistry, StyleSheet, Text,
    TouchableNativeFeedback, View, SectionList, Dimensions, FlatList, RefreshControl,
    StatusBar, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMD from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, } from 'react-navigation';
import { CoordinatorLayout, BottomSheetBehavior, FloatingActionButton } from 'react-native-bottom-sheet-behavior'

import { Card, Spacer } from './common_components'


export default class Playground extends Component {
    render() {
        return (
            <CoordinatorLayout style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'transparent' }}></View>
                <BottomSheetBehavior
                    ref='bottomSheet'
                    peekHeight={70}
                    hideable={false}
                    state={BottomSheetBehavior.STATE_COLLAPSED}>
                    <View style={{ backgroundColor: '#4389f2' }}>
                        <View style={{ padding: 26 }}>
                            <Text>BottomSheetBehavior!</Text>
                        </View>
                        <View style={{ height: 200, backgroundColor: '#fff' }} />
                    </View>
                </BottomSheetBehavior>
                <FloatingActionButton autoAnchor ref="fab" />
            </CoordinatorLayout>
        )
    }
}