import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from "../actions/session_actions";

const noErrors = []

export const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors

        case RECEIVE_CURRENT_USER:
            return noErrors;

        default:
            return state;
    }
}