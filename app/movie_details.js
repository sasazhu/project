import { Component } from 'react';
import {
    Button, Text, StatusBar, StyleSheet, 
    TouchableNativeFeedback, View, SectionList, Dimensions, FlatList, RefreshControl, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import randomScheme from './color_themes'
// import styles from './style_movie_details'
import commonStyles from './style_common'

const CustomHeader = ({ title, subtitle }) => (
    <View style={commonStyles.nav_header}>
        <Text style={commonStyles.nav_title}>{title}</Text>
        <Text style={commonStyles.nav_subtitle}>{subtitle}</Text>
    </View>
);

var theme

export default class MovieDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        theme = randomScheme()

        return ({
        headerTitle: <CustomHeader title="Movie Details" subtitle={navigation.state.params.movie.title} />,
        headerStyle: { backgroundColor: theme[0] }, 
        })
    }

    render() {
        const { movie } = this.props.navigation.state.params;

        return (
            <View>
                <StatusBar backgroundColor={theme[1]} barStyle="light-content" />

                <ScrollView>
                    <View style={{ padding: 16, }}>
                        <Text>Following is passed in by navigation.navigate().</Text>

                        <Text style={styles.header1}>{movie.title}</Text>
                        <Text>{movie.tagline}</Text>

                        <Text style={styles.header2}>Homepage</Text>
                        <Text>{movie.homepage}</Text>

                        <Text style={styles.header2}>Overview</Text>
                        <Text>{movie.overview}</Text>

                        <Text style={styles.header2}>Genres</Text>
                        {
                            movie.genres.map(g => <Text key={`p_${movie.id}_${g.id}`}>{g.name}</Text>)
                        }

                        <Text style={styles.header2}>Product</Text>
                        {
                            movie.production_companies.map(p => <Text key={`p_${movie.id}_${p.id}`}>{p.name}</Text>)
                        }

                        <Text style={styles.header2}>Release</Text>
                        <Text>{movie.release_date}</Text>

                        <Text style={styles.header2}>Box</Text>
                        <Text>Budget:  {movie.budget}</Text>
                        <Text>Revenue: {movie.revenue}</Text>

                        <Text style={styles.header2}>Score</Text>
                        <Text>{movie.vote_average} / {movie.vote_count}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        header1: {
            fontSize: 24,
            color: '#444',
            marginTop: 8,
        },

        header2: {
            fontSize: 18,
            color: '#444',
            marginTop: 8,
        },
    });