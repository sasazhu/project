import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create(
    {
       
        bsContent: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: height - 24,
            width
        },
        tabbar: {
            backgroundColor: '#222',
        },
        indicator: {
            backgroundColor: '#ffeb3b',
        },
        label: {
            color: '#fff',
            fontWeight: '400',
        },
        overlay: {
            position: 'absolute',
            top: -24,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            backgroundColor: 'black',
        },
        container: {
            flex: 1,
            padding: 0,
            alignItems: 'stretch',
            backgroundColor: 'transparent',
        },

        main_title: {
            fontSize: 18,
            color: '#444',
        },

        sub_title: {
            fontSize: 14,
            color: '#666',
            marginTop:3,
            marginLeft:8

        },

        release_date: {
            fontSize: 12,
            color: '#888',
        },

        rate: {
            fontSize: 12,
            color: '#666',
        },

        genres: {
            flexDirection: 'row',
        },

        genre: {
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 12,
            marginRight: 4,
            backgroundColor: '#88f',
            color: 'white',
            fontSize: 12,
        }
    },
)
