export const MOVE_TO_NEXT_ROUND = "MOVE_TO_NEXT_ROUND"
export const SPEND_DISMISS_TWO_OPTIONS = "SPEND_DISMISS_TWO_OPTIONS"
export const SPEND_ASK_THE_AUDIENCE = "SPEND_ASK_THE_AUDIENCE"
export const SET_WILCARDS_TO_ZERO = "SET_WILCARDS_TO_ZERO"

export function nextRound(payload){
    return { type: MOVE_TO_NEXT_ROUND, payload }
}

export function playDismissTwoOptions(payload){
    return { type: SPEND_DISMISS_TWO_OPTIONS, payload }
}

export function playAskTheAudience(payload){
    return { type: SPEND_ASK_THE_AUDIENCE, payload }
}

export function resetWildcards(payload){
    return { type: SET_WILCARDS_TO_ZERO, payload }
}