import { Component, PureComponent } from 'react';
import {
    Alert, Text, StatusBar, StyleSheet, 
    TouchableNativeFeedback, View, Dimensions, FlatList, RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import styles from './style_movies'


const MainTitle = (m) => <Text style={styles.main_title}>{m.title}</Text>

const SubTitle = (m) => m.title ? <Text style={styles.sub_title}>{m.title}</Text> : <View />

const ReleaseDate = (m) => <Text style={styles.release_date}>{m.date}</Text>

const Rate = (p) => <Text style={styles.rate}>{p.score}</Text>

const Genres = (p) => <View style={styles.genres}>{p.data.map(g => <Text key={`gen_${g.id}`} style={styles.genre}>{g.name}</Text>)}</View>

class Movie extends PureComponent {
    render() {
        let m = this.props.item
        let title = m.title.split(':')
        let main_title = title[0].trim()
        let sub_title = title.length > 1 ? title[1].trim() : ''

        return (
            <TouchableNativeFeedback onPress={() => this.props.onPress(m.id)}>
                <View style={{ margin: 0, marginBottom: 0, padding: 8, paddingBottom: 8, backgroundColor: 'transparent', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MainTitle title={main_title} />
                        <View style={{ flex: 1 }} />
                        <Icon name="star-half" size={14} color="#888" style={{ marginRight: 4 }} />
                        <Rate score={m.vote_average} />
                    </View>
                    <SubTitle title={sub_title} />
                    <View style={{ marginTop: 4, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="today" size={12} color="#888" style={{ marginRight: 4 }} />
                        <ReleaseDate date={m.release_date} />
                    </View>
                    <View style={{ margin: 2 }} />
                    <Genres data={m.genres} />
                    {/* <View style={{ flexDirection: 'column' }}>{
                    m.genres.map(g => {<Text style={{ fontSize: 12, color: 'white', margin: 8, }}>{g.name}</Text>})
                }
                </View> */}
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            ds: [],
        };

        this._onPressItem = this._onPressItem.bind(this)
    }

    componentDidMount() {
        this._onRefresh()
    }

    _onRefresh() {
        this.setState({ refreshing: true });

        fetch('http://192.168.0.72:8000/tmdb_100_movies.json')
            .then((r) => r.text())
            .then((j) => {
                this.setState({ ds: j.split('\n').filter(l => l.length > 0).map(l => JSON.parse(l)).sort((m, n) => n.vote_average - m.vote_average) });
            })
            .catch((e) => {
                this.setState({ ds:[] })
            })
            .finally(() => this.setState({ refreshing: false }));
    }

    _onPressItem = (id) => {
        const {navigation} = this.props
        let m = this.state.ds.filter(m => m.id == id)
        if (m.length > 0) m = m[0]
        // Alert.alert(`Movie ${id} tapped.`)
        navigation.navigate('MovieDetail', { movie: m })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#D50000" barStyle="light-content" />

                <FlatList style={{ padding: 0, backgroundColor: 'transparent', }}
                    contentContainerStyle={{ backgroundColor: 'transparent', padding: 0 }}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                    data={this.state.ds}
                    keyExtractor={(item, idx) => `key_${item.id}_${item.index}`}
                    renderItem={({ item }) => <Movie item={item} onPress={this._onPressItem} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
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
            fontSize: 15,
            color: '#666',
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