const COLOR_SCHEMES = 
// 'light' and ('500' or '700')
[['#F44336', '#D32F2F'],
['#E91E63', '#C2185B'],
['#9C27B0', '#7B1FA2'],
['#673AB7', '#512DA8'],
['#3F51B5', '#303F9F'],
['#009688', '#00796B'],
['#795548', '#5D4037'],
['#607D8B', '#455A64'],
// 'light' and ('A400' or 'A700')
['#FF1744', '#D50000'],
['#F50057', '#C51162'],
['#D500F9', '#AA00FF'],
['#651FFF', '#6200EA'],
['#3D5AFE', '#304FFE'],
['#2979FF', '#2962FF'],
['#FF3D00', '#DD2C00']]
;


export default () => {
    let i = Math.floor(Math.random() * COLOR_SCHEMES.length)
    return COLOR_SCHEMES[i]
}