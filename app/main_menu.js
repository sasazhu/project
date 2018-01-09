// @flow

import * as React from 'react';
import {
    Alert, AppRegistry, StyleSheet, Text,
    TouchableNativeFeedback, View, SectionList, Dimensions, FlatList, RefreshControl,
    StatusBar, ScrollView, TouchableOpacity, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFW from 'react-native-vector-icons/FontAwesome';
import IconMD from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, } from 'react-navigation';

import { Card, Spacer } from './common_components'

import Movies from './movies'
import MovieDetail from './movie_details'
import IconDemo from './icons'
import Specialists from './specialist'
import SpecialistDetails from './specialist_details'
import Drugs from './rec-drugs';
import Hospital from './hospital';
import SpecialistScreen from './specialist-doc';
import TextsScreen from './texts';
import Health from './text-health';
import ConsultScreen from './consult-details';
import Fans from './doc-fans';
import HealthDocument from './health-document';
import PerLetter from './personal-letter';
import PersonTable from './personalData';
import DrugScreen from './Drug-introduction';
import Doc_Screen from './doc-introduction';
import Hos_introduction from './hospital-introducion';
import Attention from './attention';

import DimensionAwareComponent from './DimensionAwareComponent'

// import Playground from './playground'
// import Playground from './collapsing-toolbar'
import Playground from './playground2'
// import Playground from './playground3'

import Images from './images'


interface ICell {
    title: string,
    icon: string,
    iconColor: string,
    name: string
}

interface ISection {
    title: string,
    cell: Array<ICell>,
}

const menus: Array<ISection> = [
    {
        title: '企业资源', cell: [
            { name:'Specialists',title: '医护资源', icon: 'hospital', iconColor: '#A5D6A7' },
            { name:'medicine',title: '设备生产服务', icon: 'developer-board', iconColor: '#81D4FA' },
            { name:'medicine',title: '安全服务', icon: 'security', iconColor: '#A5D6A7' },
        ]
    },
    {
        title: '平台资源', cell: [
            { name:'medicine', title: '消防资源', icon: 'fire', iconColor: '#FF8A65' },
            { name:'medicine',title: '设计资源', icon: 'ruler', iconColor: '#A5D6A7' },
            { name:'medicine',title: '制造商', icon: 'chemical-weapon', iconColor: '#81D4FA' },
            { name:'medicine',title: '培训资源', icon: 'account-key', iconColor: '#A5D6A7' },
            { name:'medicine',title: '供应商', icon: 'truck', iconColor: '#FF8A65' },
            { name:'medicine',title: '管理资源', icon: 'earth', iconColor: '#A5D6A7' },
            { name:'medicine',title: '工程设施资源', icon: 'projector', iconColor: '#81D4FA' },
            { name:'medicine',title: '装备资源', icon: 'security', iconColor: '#A5D6A7' },
        ]
    },
    {
        title: '其他资源', cell: [
            { name:'medicine',title: '公共网络资源', icon: 'access-point-network', iconColor: '#A5D6A7' },
            { name:'medicine',title: '技术服务', icon: 'camera-iris', iconColor: '#81D4FA' },
            { name:'medicine',title: '物流和交通资源', icon: 'car-pickup', iconColor: '#A5D6A7' },
            { name:'medicine',title: '第三方公共资源', icon: 'earth', iconColor: '#FF8A65' },
            { name:'medicine',title: '保险公司', icon: 'home-map-marker', iconColor: '#FF8A65' },
        ]
    },
]



const Cell = ({ name, title, icon, color, width, onPress } : {name: string, title: string, icon: string, color: string, width: number, onPress?: (name: string) => void}) => (
    
    <TouchableNativeFeedback onPress={() => onPress && onPress(name)}>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: width, marginBottom:10 }}>
        <Icon name={icon} size={35} color={color} />
        <Text style={{ fontSize: 12, color: '#333' }}>{title}</Text>
        </View>
    </TouchableNativeFeedback>
)

const Section = ({ sid, title, cells, cellWidth, onPressCell }: { sid: string, title: string, cells: ICell[], cellWidth: number, onPressCell?: (name: string) => void }) => {

    let cellGrid: Cell[] = []
    for (let c of cells) {
        cellGrid.push(<Cell onPress={onPressCell} name={c.name} key={'cel_' + sid + "_" + c.title} width={cellWidth} icon={c.icon} title={c.title} color={c.iconColor} />)
    }

    return (
        <View style={{marginTop:10}}>
            <Text style={{ color: '#000', fontSize: 14 }}>{title}</Text>
            <View style={{ flexDirection: 'row', marginTop:10, flexWrap:'wrap' }}>
                {cellGrid}
            </View>
        </View>
    )
}

class MainMenu extends DimensionAwareComponent {
   
    static navigationOptions = {
        title: '资源链接',
        headerTitleStyle: {
            color: 'white',
        },
        headerStyle: {
            backgroundColor: '#39C183'
        },
        headerRight:
            <TouchableNativeFeedback title="搜索">
                <IconMD name="search" size={24} color="#fff" style={{ padding: 15 }} />
            </TouchableNativeFeedback>,

        headerLeft:
            <TouchableNativeFeedback>
                <IconMD name="arrow-back" size={24} color="#fff" style={{ padding: 15 }} />
            </TouchableNativeFeedback>,
    };
    constructor() {
      super()
      this._onPressCell = this._onPressCell.bind(this)   
    }

    _onPressCell = (name: string) => {
        this.props.navigation.navigate(name)
    }
    

    render() {
        // let navigator = this.props.navigation;
        let wid = (this.state.dims.w - 32) / (this.state.dims.o ? 3 : 4)

        let sectionList = []
        for (let i in menus) {
            let s = menus[i]
            sectionList.push(<Section onPressCell={this._onPressCell} key={'sec_' + i} sid={i} title={s.title} cells={s.cell} cellWidth={wid} />)
        }
        

        return (
            <View>
                <StatusBar backgroundColor="#5D4037" barStyle="light-content" />

                <ScrollView>
                    <View style={{ padding: 16 }}>
                        {sectionList}

                        
                        {/* <Icon.Button name='movie' size={48} backgroundColor='#FF5252' borderRadius={4} onPress={() => navigator.navigate('Movies')}>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ fontSize: 24, color: 'white', marginRight: 8 }}>Movies</Text>
                                <Text style={{ fontSize: 12, color: 'white' }}>Demo of FlatList</Text>
                            </View>
                        </Icon.Button>

                        <Spacer size={8} />

                        <Icon.Button name='react' size={48} backgroundColor='#E040FB' borderRadius={4} onPress={() => navigator.navigate('IconDemo')}>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ fontSize: 24, color: 'white', marginRight: 8 }}>Icons</Text>
                                <Text style={{ fontSize: 12, color: 'white' }}>Use vector icons in react-native</Text>
                            </View>
                        </Icon.Button>

                        <Spacer size={8} />

                        <Icon.Button name='responsive' size={48} backgroundColor='#448AFF' borderRadius={4} onPress={() => navigator.navigate('Responsive')}>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ fontSize: 24, color: 'white', marginRight: 8 }}>Responsive</Text>
                                <Text style={{ fontSize: 12, color: 'white' }}>Responsive UI in react-native</Text>
                            </View>
                        </Icon.Button>

                        <Spacer size={8} /> */}
                        {/* 跳转到医生列表 */}
                        {/* <Icon.Button name='medical-bag' size={48} backgroundColor='#607D8B' borderRadius={4} onPress={() => navigator.navigate('Specialists')}>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ fontSize: 24, color: 'white', marginRight: 8 }}>Specialist</Text>
                                <Text style={{ fontSize: 12, color: 'white' }}>People really good at something</Text>
                            </View>
                        </Icon.Button> */}

                        {/* <Spacer size={8} />

                        <IconMD.Button name='build' size={48} backgroundColor='#E91E63' borderRadius={4} onPress={() => navigator.navigate('Playground')}>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ fontSize: 24, color: 'white', marginRight: 8 }}>Playground</Text>
                                <Text style={{ fontSize: 12, color: 'white' }}>Tryout anything here</Text>
                            </View>
                        </IconMD.Button> */}


                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
});

// const dataArr=[
//     {name:'local-hospital',title:'医护资源'},
//     {name:'local-hospital',title:'医护资源'},
//     {name:'local-hospital',title:'医护资源'},
// ]
// const keyArr=[
//     '企业资源',
//     '平台资源',
//     '其他资源'
// ]
const { width, height } = Dimensions.get('window')
export default StackNavigator({
    Home: {
        screen: MainMenu,
        navigationOptions: {
            headerTitle: 'Main Menu',
            headerStyle: { backgroundColor: '#795548' },
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
        },
    },

    Movies: {
        screen: Movies,
        navigationOptions: {
            headerTitle: 'Movies',
            headerStyle: { backgroundColor: '#FF1744' },
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
        },
    },

    MovieDetail: {
        screen: MovieDetail,
        navigationOptions: {
            // headerTitle: 'Movie Detail',
            // headerStyle: { backgroundColor: '#FF1744' },
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
        },
    },

    IconDemo: {
        screen: IconDemo,
        navigationOptions: {
            headerTitle: 'Icons',
            headerStyle: { backgroundColor: '#D500F9' },
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
        },
    },

    Responsive: {
        screen: IconDemo,
        navigationOptions: {
            headerTitle: 'Responsive',
            headerStyle: { backgroundColor: '#2979FF' },
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
        },
    },

    Specialists: {
        screen: Specialists,
        navigationOptions: {
            headerTitle: 'Specialist',
            headerStyle: { backgroundColor: '#607D8B' },
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        },
    },

    SpecialistDetails: {
        screen: SpecialistDetails,
        navigationOptions: {
            header: null,
            headerTitle: 'Specialist',
            headerStyle: { backgroundColor: '#607D8B' },
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        },
    },

    Playground: {
        screen: Playground,
        navigationOptions: {
            header: null,
            headerTitle: 'Playground',
            headerStyle: { backgroundColor: '#E91E63' },
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
        },
    },
    Drugs: {
        screen: Drugs,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            headerTitle: '推荐药品',
            headerStyle: {
                backgroundColor: '#F44336',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    Hospital: {
        screen: Hospital,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '专科医院',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#9C27B0',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    SpecialistScreen: {
        screen: SpecialistScreen,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '专科医生',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#E91E63',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    Texts: {
        screen: TextsScreen,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '动态',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#607D8B',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    Health: {
        screen: Health,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '专栏文章',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#795548',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    Fans: {
        screen: Fans,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '粉丝',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#673AB7',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    ConsultScreen: {
        screen: ConsultScreen,

    },
    HealthDocument: {
        screen: HealthDocument,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '健康档案',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#FF1744',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    PerLetter: {
        screen: PerLetter,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '江左书生',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#3F51B5',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    PersonTable: {
        screen: PersonTable,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '个人信息',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#009688',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    DrugScreen: {
        screen: DrugScreen,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '药品介绍',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#F50057',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    Doc_Screen: {
        screen: Doc_Screen,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '医生介绍',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#D500F9',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    Hos_introduction: {
        screen: Hos_introduction,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '医院介绍',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#651FFF',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
    Attention: {
        screen: Attention,
        navigationOptions: {
            headerTintColor: 'white',
            headerPressColorAndroid: 'white',
            title: '我的关注',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#3D5AFE',
                marginTop: 20
            },
            headerRight: (<IconMD.Button name='search' size={24} color='white' backgroundColor='transparent' />)
        }
    },
});
