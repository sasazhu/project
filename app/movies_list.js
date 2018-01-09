import React, { Component, PureComponent } from 'react';
import {
    Alert, Text, StatusBar,
    TouchableNativeFeedback, View, Dimensions, FlatList, RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style_movies'


MainTitle = (m) => <Text style={styles.main_title}>{m.title}</Text>

SubTitle = (m) => m.title ? <Text style={styles.sub_title}>{m.title}</Text> : <View />

ReleaseDate = (m) => <Text style={styles.release_date}>{m.date}</Text>

Rate = (p) => <Text style={styles.rate}>{p.score}</Text>

Genres = (p) => <View style={styles.genres}>{p.data.map(g => <Text key={`gen_${g.id}`} style={styles.genre}>{g.name}</Text>)}</View>

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
        this.setState({ refreshing: true,ds:dataArr });

        // fetch('http://192.168.3.116:8000/tmdb_100_movies.json')
        //     .then((r) => r.text())
        //     .then((j) => {
        //         let ms = j.split('\n')
        //                 .filter(l => l.length > 0)
        //                 .map(l => JSON.parse(l))
        //                 .filter(m => m.vote_average >= 7)
        //                 .sort((m, n) => n.vote_average - m.vote_average)
        //         this.setState({ ds: ms });
        //     })
        //     .catch((e) => {
        //         this.setState({ ds:[] })
        //     })
        //     .finally(() => this.setState({ refreshing: false }));
    }

    _onPressItem = (id) => {
        const {navigation} = this.props
        let m = this.state.ds.filter(m => m.id == id)
        if (m.length > 0) m = m[0]
        // Alert.alert(`Movie ${id} tapped.`)
        // navigation.navigate('MovieDetail', { movie: m })

        if (this.props.onPressItem) this.props.onPressItem(m)
    }

    render() {
        return (
                <FlatList style={{ flex: 1, padding: 0, backgroundColor: 'transparent', }}
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
        )
    }
}
const dataArr = [
    {
        "budget"
            :
            237000000, "genres"
        :
        [{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {
            "id": 878,
            "name": "Science Fiction"
        }], "homepage"
        :
        "http://www.avatarmovie.com/", "id"
        :
        19995, "index"
        :
        0, "keywords"
        :
        [{"id": 1463, "name": "culture clash"}, {"id": 2964, "name": "future"}, {
            "id": 3386,
            "name": "space war"
        }, {"id": 3388, "name": "space colony"}, {"id": 3679, "name": "society"}, {
            "id": 3801,
            "name": "space travel"
        }, {"id": 9685, "name": "futuristic"}, {"id": 9840, "name": "romance"}, {"id": 9882, "name": "space"}, {
            "id": 9951,
            "name": "alien"
        }, {"id": 10148, "name": "tribe"}, {"id": 10158, "name": "alien planet"}, {
            "id": 10987,
            "name": "cgi"
        }, {"id": 11399, "name": "marine"}, {"id": 13065, "name": "soldier"}, {"id": 14643, "name": "battle"}, {
            "id": 14720,
            "name": "love affair"
        }, {"id": 165431, "name": "anti war"}, {"id": 193554, "name": "power relations"}, {
            "id": 206690,
            "name": "mind and soul"
        }, {"id": 209714, "name": "3d"}], "original_language"
        :
        "en", "original_title"
        :
        "Avatar", "overview"
        :
        "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.", "popularity"
        :
        150.437577, "production_companies"
        :
        [{"name": "Ingenious Film Partners", "id": 289}, {
            "name": "Twentieth Century Fox Film Corporation",
            "id": 306
        }, {"name": "Dune Entertainment", "id": 444}, {
            "name": "Lightstorm Entertainment",
            "id": 574
        }], "production_countries"
        :
        [{"iso_3166_1": "US", "name": "United States of America"}, {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        }], "release_date"
        :
        "2009-12-10", "revenue"
        :
        2787965087, "runtime"
        :
        162.0, "spoken_languages"
        :
        [{"iso_639_1": "en", "name": "English"}, {"iso_639_1": "es", "name": "Espa\\u00f1ol"}], "status"
        :
        "Released", "tagline"
        :
        "Enter the World of Pandora.", "title"
        :
        "Avatar", "vote_average"
        :
        7.2, "vote_count"
        :
        11800
    },
    {
        "budget"
            :
            300000000, "genres"
        :
        [{"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {"id": 28, "name": "Action"}], "homepage"
        :
        "http://disney.go.com/disneypictures/pirates/", "id"
        :
        285, "index"
        :
        1, "keywords"
        :
        [{"id": 270, "name": "ocean"}, {"id": 726, "name": "drug abuse"}, {"id": 911, "name": "exotic island"}, {
            "id": 1319,
            "name": "east india trading company"
        }, {"id": 2038, "name": "love of one's life"}, {"id": 2052, "name": "traitor"}, {
            "id": 2580,
            "name": "shipwreck"
        }, {"id": 2660, "name": "strong woman"}, {"id": 3799, "name": "ship"}, {
            "id": 5740,
            "name": "alliance"
        }, {"id": 5941, "name": "calypso"}, {"id": 6155, "name": "afterlife"}, {
            "id": 6211,
            "name": "fighter"
        }, {"id": 12988, "name": "pirate"}, {"id": 157186, "name": "swashbuckler"}, {
            "id": 179430,
            "name": "aftercreditsstinger"
        }], "original_language"
        :
        "en", "original_title"
        :
        "Pirates of the Caribbean: At World's End", "overview"
        :
        "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.", "popularity"
        :
        139.082615, "production_companies"
        :
        [{"name": "Walt Disney Pictures", "id": 2}, {
            "name": "Jerry Bruckheimer Films",
            "id": 130
        }, {"name": "Second Mate Productions", "id": 19936}], "production_countries"
        :
        [{"iso_3166_1": "US", "name": "United States of America"}], "release_date"
        :
        "2007-05-19", "revenue"
        :
        961000000, "runtime"
        :
        169.0, "spoken_languages"
        :
        [{"iso_639_1": "en", "name": "English"}], "status"
        :
        "Released", "tagline"
        :
        "At the end of the world, the adventure begins.", "title"
        :
        "Pirates of the Caribbean: At World's End", "vote_average"
        :
        6.9, "vote_count"
        :
        4500
    },
    {
        "budget"
            :
            245000000, "genres"
        :
        [{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 80, "name": "Crime"}], "homepage"
        :
        "http://www.sonypictures.com/movies/spectre/", "id"
        :
        206647, "index"
        :
        2, "keywords"
        :
        [{"id": 470, "name": "spy"}, {"id": 818, "name": "based on novel"}, {
            "id": 4289,
            "name": "secret agent"
        }, {"id": 9663, "name": "sequel"}, {"id": 14555, "name": "mi6"}, {
            "id": 156095,
            "name": "british secret service"
        }, {"id": 158431, "name": "united kingdom"}], "original_language"
        :
        "en", "original_title"
        :
        "Spectre", "overview"
        :
        "A cryptic message from Bond\u2019s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.", "popularity"
        :
        107.376788, "production_companies"
        :
        [{"name": "Columbia Pictures", "id": 5}, {"name": "Danjaq", "id": 10761}, {
            "name": "B24",
            "id": 69434
        }], "production_countries"
        :
        [{"iso_3166_1": "GB", "name": "United Kingdom"}, {
            "iso_3166_1": "US",
            "name": "United States of America"
        }], "release_date"
        :
        "2015-10-26", "revenue"
        :
        880674609, "runtime"
        :
        148.0, "spoken_languages"
        :
        [{"iso_639_1": "fr", "name": "Fran\\u00e7ais"}, {"iso_639_1": "en", "name": "English"}, {
            "iso_639_1": "es",
            "name": "Espa\\u00f1ol"
        }, {"iso_639_1": "it", "name": "Italiano"}, {"iso_639_1": "de", "name": "Deutsch"}], "status"
        :
        "Released", "tagline"
        :
        "A Plan No One Escapes", "title"
        :
        "Spectre", "vote_average"
        :
        6.3, "vote_count"
        :
        4466
    },
    {
        "budget"
            :
            250000000, "genres"
        :
        [{"id": 28, "name": "Action"}, {"id": 80, "name": "Crime"}, {"id": 18, "name": "Drama"}, {
            "id": 53,
            "name": "Thriller"
        }], "homepage"
        :
        "http://www.thedarkknightrises.com/", "id"
        :
        49026, "index"
        :
        3, "keywords"
        :
        [{"id": 849, "name": "dc comics"}, {"id": 853, "name": "crime fighter"}, {
            "id": 949,
            "name": "terrorist"
        }, {"id": 1308, "name": "secret identity"}, {"id": 1437, "name": "burglar"}, {
            "id": 3051,
            "name": "hostage drama"
        }, {"id": 3562, "name": "time bomb"}, {"id": 6969, "name": "gotham city"}, {
            "id": 7002,
            "name": "vigilante"
        }, {"id": 9665, "name": "cover-up"}, {"id": 9715, "name": "superhero"}, {
            "id": 9990,
            "name": "villainess"
        }, {"id": 10044, "name": "tragic hero"}, {"id": 13015, "name": "terrorism"}, {
            "id": 14796,
            "name": "destruction"
        }, {"id": 18933, "name": "catwoman"}, {"id": 156082, "name": "cat burglar"}, {
            "id": 156395,
            "name": "imax"
        }, {"id": 173272, "name": "flood"}, {"id": 179093, "name": "criminal underworld"}, {
            "id": 230775,
            "name": "batman"
        }], "original_language"
        :
        "en", "original_title"
        :
        "The Dark Knight Rises", "overview"
        :
        "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.", "popularity"
        :
        112.31295, "production_companies"
        :
        [{"name": "Legendary Pictures", "id": 923}, {"name": "Warner Bros.", "id": 6194}, {
            "name": "DC Entertainment",
            "id": 9993
        }, {"name": "Syncopy", "id": 9996}], "production_countries"
        :
        [{"iso_3166_1": "US", "name": "United States of America"}], "release_date"
        :
        "2012-07-16", "revenue"
        :
        1084939099, "runtime"
        :
        165.0, "spoken_languages"
        :
        [{"iso_639_1": "en", "name": "English"}], "status"
        :
        "Released", "tagline"
        :
        "The Legend Ends", "title"
        :
        "The Dark Knight Rises", "vote_average"
        :
        7.6, "vote_count"
        :
        9106
    },
    {
        "budget"
            :
            260000000, "genres"
        :
        [{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 878, "name": "Science Fiction"}], "homepage"
        :
        "http://movies.disney.com/john-carter", "id"
        :
        49529, "index"
        :
        4, "keywords"
        :
        [{"id": 818, "name": "based on novel"}, {"id": 839, "name": "mars"}, {"id": 1456, "name": "medallion"}, {
            "id": 3801,
            "name": "space travel"
        }, {"id": 7376, "name": "princess"}, {"id": 9951, "name": "alien"}, {
            "id": 10028,
            "name": "steampunk"
        }, {"id": 10539, "name": "martian"}, {"id": 10685, "name": "escape"}, {
            "id": 161511,
            "name": "edgar rice burroughs"
        }, {"id": 163252, "name": "alien race"}, {"id": 179102, "name": "superhuman strength"}, {
            "id": 190320,
            "name": "mars civilization"
        }, {"id": 195446, "name": "sword and planet"}, {"id": 207928, "name": "19th century"}, {
            "id": 209714,
            "name": "3d"
        }], "original_language"
        :
        "en", "original_title"
        :
        "John Carter", "overview"
        :
        "John Carter is a war-weary, former military captain who's inexplicably transported to the mysterious and exotic planet of Barsoom (Mars) and reluctantly becomes embroiled in an epic conflict. It's a world on the brink of collapse, and Carter rediscovers his humanity when he realizes the survival of Barsoom and its people rests in his hands.", "popularity"
        :
        43.926995, "production_companies"
        :
        [{"name": "Walt Disney Pictures", "id": 2}], "production_countries"
        :
        [{"iso_3166_1": "US", "name": "United States of America"}], "release_date"
        :
        "2012-03-07", "revenue"
        :
        284139100, "runtime"
        :
        132.0, "spoken_languages"
        :
        [{"iso_639_1": "en", "name": "English"}], "status"
        :
        "Released", "tagline"
        :
        "Lost in our world, found in another.", "title"
        :
        "John Carter", "vote_average"
        :
        6.1, "vote_count"
        :
        2124
    },
    {
        "budget"
            :
            258000000, "genres"
        :
        [{"id": 14, "name": "Fantasy"}, {"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}], "homepage"
        :
        "http://www.sonypictures.com/movies/spider-man3/", "id"
        :
        559, "index"
        :
        5, "keywords"
        :
        [{"id": 851, "name": "dual identity"}, {"id": 1453, "name": "amnesia"}, {
            "id": 1965,
            "name": "sandstorm"
        }, {"id": 2038, "name": "love of one's life"}, {"id": 3446, "name": "forgiveness"}, {
            "id": 3986,
            "name": "spider"
        }, {"id": 4391, "name": "wretch"}, {"id": 4959, "name": "death of a friend"}, {
            "id": 5776,
            "name": "egomania"
        }, {"id": 5789, "name": "sand"}, {"id": 5857, "name": "narcism"}, {"id": 6062, "name": "hostility"}, {
            "id": 8828,
            "name": "marvel comic"
        }, {"id": 9663, "name": "sequel"}, {"id": 9715, "name": "superhero"}, {
            "id": 9748,
            "name": "revenge"
        }], "original_language"
        :
        "en", "original_title"
        :
        "Spider-Man 3", "overview"
        :
        "The seemingly invincible Spider-Man goes up against an all-new crop of villain \u2013 including the shape-shifting Sandman. While Spider-Man\u2019s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.", "popularity"
        :
        115.699814, "production_companies"
        :
        [{"name": "Columbia Pictures", "id": 5}, {
            "name": "Laura Ziskin Productions",
            "id": 326
        }, {"name": "Marvel Enterprises", "id": 19551}], "production_countries"
        :
        [{"iso_3166_1": "US", "name": "United States of America"}], "release_date"
        :
        "2007-05-01", "revenue"
        :
        890871626, "runtime"
        :
        139.0, "spoken_languages"
        :
        [{"iso_639_1": "en", "name": "English"}, {"iso_639_1": "fr", "name": "Fran\\u00e7ais"}], "status"
        :
        "Released", "tagline"
        :
        "The battle within.", "title"
        :
        "Spider-Man 3", "vote_average"
        :
        5.9, "vote_count"
        :
        3576
    },
    {
        "budget"
            :
            260000000, "genres"
        :
        [{"id": 16, "name": "Animation"}, {"id": 10751, "name": "Family"}], "homepage"
        :
        "http://disney.go.com/disneypictures/tangled/", "id"
        :
        38757, "index"
        :
        6, "keywords"
        :
        [{"id": 1562, "name": "hostage"}, {"id": 2343, "name": "magic"}, {"id": 2673, "name": "horse"}, {
            "id": 3205,
            "name": "fairy tale"
        }, {"id": 4344, "name": "musical"}, {"id": 7376, "name": "princess"}, {
            "id": 10336,
            "name": "animation"
        }, {"id": 33787, "name": "tower"}, {"id": 155658, "name": "blonde woman"}, {
            "id": 162219,
            "name": "selfishness"
        }, {"id": 163545, "name": "healing power"}, {"id": 179411, "name": "based on fairy tale"}, {
            "id": 179431,
            "name": "duringcreditsstinger"
        }, {"id": 215258, "name": "healing gift"}, {"id": 234183, "name": "animal sidekick"}], "original_language"
        :
        "en", "original_title"
        :
        "Tangled", "overview"
        :
        "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.", "popularity"
        :
        48.681969, "production_companies"
        :
        [{"name": "Walt Disney Pictures", "id": 2}, {
            "name": "Walt Disney Animation Studios",
            "id": 6125
        }], "production_countries"
        :
        [{"iso_3166_1": "US", "name": "United States of America"}], "release_date"
        :
        "2010-11-24", "revenue"
        :
        591794936, "runtime"
        :
        100.0, "spoken_languages"
        :
        [{"iso_639_1": "en", "name": "English"}], "status"
        :
        "Released", "tagline"
        :
        "They're taking adventure to new lengths.", "title"
        :
        "Tangled", "vote_average"
        :
        7.4, "vote_count"
        :
        3330
    },
    {
        "budget"
            :
            280000000, "genres"
        :
        [{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 878, "name": "Science Fiction"}], "homepage"
        :
        "http://marvel.com/movies/movie/193/avengers_age_of_ultron", "id"
        :
        99861, "index"
        :
        7, "keywords"
        :
        [{"id": 8828, "name": "marvel comic"}, {"id": 9663, "name": "sequel"}, {
            "id": 9715,
            "name": "superhero"
        }, {"id": 9717, "name": "based on comic book"}, {"id": 10629, "name": "vision"}, {
            "id": 155030,
            "name": "superhero team"
        }, {"id": 179431, "name": "duringcreditsstinger"}, {
            "id": 180547,
            "name": "marvel cinematic universe"
        }, {"id": 209714, "name": "3d"}], "original_language"
        :
        "en", "original_title"
        :
        "Avengers: Age of Ultron", "overview"
        :
        "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth\u2019s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.", "popularity"
        :
        134.279229, "production_companies"
        :
        [{"name": "Marvel Studios", "id": 420}, {"name": "Prime Focus", "id": 15357}, {
            "name": "Revolution Sun Studios",
            "id": 76043
        }], "production_countries"
        :
        [{"iso_3166_1": "US", "name": "United States of America"}], "release_date"
        :
        "2015-04-22", "revenue"
        :
        1405403694, "runtime"
        :
        141.0, "spoken_languages"
        :
        [{"iso_639_1": "en", "name": "English"}], "status"
        :
        "Released", "tagline"
        :
        "A New Age Has Come.", "title"
        :
        "Avengers: Age of Ultron", "vote_average"
        :
        7.3, "vote_count"
        :
        6767
    }

];
