import * as React from 'react';
import {
    Alert, AppRegistry, StyleSheet, Text, Animated,
    TouchableNativeFeedback, TouchableWithoutFeedback, View, SectionList, Dimensions, FlatList, RefreshControl,
    StatusBar, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMD from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, } from 'react-navigation';
import { CoordinatorLayout, BottomSheetBehavior, FloatingActionButton } from 'react-native-bottom-sheet-behavior'

import ScrollableTabView from 'react-native-scrollable-tab-view'

export default (props) => (
        <ScrollableTabView>
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
        </ScrollableTabView>
    )
