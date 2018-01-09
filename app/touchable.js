import * as React from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, 
    TouchableNativeFeedback, View, Dimensions } from 'react-native';
import { MediaQueryStyleSheet, MediaQueryDebug } from "react-native-responsive";
import DAC from './DimensionAwareComponent'

const Example = (props) => {
	return (
		<MediaQueryDebug style={{ flex: 1 }} styleText={{ fontSize: 10 }}/>
	);
};

export default class Touchable extends DAC {
    // constructor (props) {
    //     super(props)
    // }
    
    _onPress() {
        Alert.alert('You tapped the button!')
    }

    _onLongPress() {
        Alert.alert('You long-pressed the button!')
    } 

    render() {
        this.state.renderCount ++;

        let {w, h, o} = this.state.dims
        let dim = `New dimensions ${w}x${h} (${o ? "portrait" : "landscape"}) @ ${this.state.renderCount}`
        console.log(dim)

        // MediaQueryStyleSheet.debug();

        return(
            <View style={o ? styles.container : styles.container$landscape}>
                <TouchableNativeFeedback onPress={this._onPress} 
                        background={TouchableNativeFeedback.Ripple('red', true)}>
                    <View style={o ? styles.button : styles.button$landscape}>
                        <Text style={styles.buttonText}>Touchable Without Feedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback 
                        onPress={this._onPress} 
                        onLongPress={this._onLongPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Support long press</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text>{dim}</Text>
                {/* <Example /> */}
           </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 40,
            alignItems: 'stretch',
        },

        button: {
            marginBottom: 20,
            alignItems: 'center',
            backgroundColor: 'blue',
            borderRadius: 4,
        },

        buttonText: {
            padding: 20,
            color: 'white',
        },

        container$landscape: {
            padding: 40,
            alignItems: 'stretch',
            flexDirection: "row",
            flexWrap: 'wrap',
        },

        button$landscape: {
            marginRight: 20,
            marginBottom: 20,
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 4,
        },

    },
    // {
    //     "@media (min-device-width: 440) and (max-device-height: 440)": {
    //         container: {
    //             flexDirection: "row"
    //         },

    //         button: {
    //             marginBottom: 20,
    //             alignItems: 'center',
    //             backgroundColor: 'red',
    //             borderRadius: 4,
    //         },
    //     }
    // }
)
