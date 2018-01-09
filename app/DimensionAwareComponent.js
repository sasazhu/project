import { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

// export function DimensionDebug = (props) => {
// 		<Text style={{ flex: 1 }} styleText={{ fontSize: 10 }}/>
// }

export default class DimensionAwareComponent extends Component {
    constructor (props) {
        super(props)

        let {width, height} = Dimensions.get("window")
        let mode = height > width ? true : false //"portrait" : "landscape"

        this.state = { renderCount: 0, dims: { w: width, h: height, o: mode } }
    }

    handler = (newDims) => {
        console.debug('dimension changed')

        let {width, height} = newDims.window
        let mode = height > width ? true : false //"portrait" : "landscape"
        
        this.setState({dims: { w: width, h: height, o: mode }})
    }

    componentWillMount() {
        Dimensions.addEventListener("change", this.handler);
    }

    componentWillUnmount() {
      Dimensions.removeEventListener("change", this.handler);
    }

    // render() {
    //     this.state.renderCount ++

    //     return super.render()
    // }
}
