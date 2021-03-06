import * as Consts from '../constants/player';

const initialState = {
    isPlaying: false,
    music: {},
    playlist: [],
    currentPos: 0,
    duration: 0
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Consts.TOGGLE_PLAY:
            return { ...state, isPlaying: !state.isPlaying };
        case Consts.SET_MUSIC:
            return { ...state, music: action.payload, isPlaying: true };
        case Consts.SET_PLAYLIST:
            return { ...state, playlist: action.payload };
        case Consts.SET_POS:
            return { ...state, currentPos: action.payload };
        case Consts.SET_DURATION:
            return { ...state, duration: action.payload };
        default:
            return state;
    };
};

export default playerReducer;