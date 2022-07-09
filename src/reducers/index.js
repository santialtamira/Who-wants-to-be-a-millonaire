import {MOVE_TO_NEXT_ROUND, SPEND_DISMISS_TWO_OPTIONS, SPEND_ASK_THE_AUDIENCE, SET_WILCARDS_TO_ZERO} from "../actions/index"

const initialState = {
    round: 200,
    allRounds: [200,500,1000],
    dismissTwoOptionsSpent: 0,
    askTheAudienceSpent: 0,
};

function rootReducer(state = initialState, action) {
    if (action.type === MOVE_TO_NEXT_ROUND) {
        return {
            ...state,
            round: action.payload,
        }
    }
    if (action.type === SPEND_DISMISS_TWO_OPTIONS) {
        return {
            ...state,
            dismissTwoOptionsSpent: 1,
        }
    }
    if (action.type === SPEND_ASK_THE_AUDIENCE) {
        return {
            ...state,
            askTheAudienceSpent: 1,
        }
    }
    if (action.type === SET_WILCARDS_TO_ZERO) {
        return {
            ...state,
            askTheAudienceSpent: 0,
            dismissTwoOptionsSpent: 0,
        }
    }

    return state;
}

export default rootReducer;

