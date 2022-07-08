import {MOVE_TO_NEXT_ROUND} from "../actions/index"

const initialState = {
    round: 200,
    allRounds: [200,500,1000],
};

function rootReducer(state = initialState, action) {
    if (action.type === MOVE_TO_NEXT_ROUND) {
        return {
            ...state,
            round: action.payload,
        }
    }

    return state;
}

export default rootReducer;