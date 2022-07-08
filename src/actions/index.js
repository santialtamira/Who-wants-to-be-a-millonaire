
export const MOVE_TO_NEXT_ROUND = "MOVE_TO_NEXT_ROUND"

export function nextRound(payload){
    return { type: MOVE_TO_NEXT_ROUND, payload }
}