export const GET_TEXT_SUCCESS = 'GET_TEXT_SUCCESS';
export const GET_TEXT_FAILURE = 'GET_TEXT_FAILURE';
export const HANDLE_TEXT_CHANGE = 'HANDLE_TEXT_CHANGE';
export const CALCULATE_WPM = 'CALCULATE_WPM';
export const TIME_IS_UP = 'TIME_IS_UP';

// Actions are created using FSA approach (see more at https://github.com/redux-utilities/flux-standard-action)
export const doGetTextSuccess = text => ({
    type: GET_TEXT_SUCCESS,
    payload: {
        text
    }
});

export const doGetTextFailure = error => ({
    type: GET_TEXT_FAILURE,
    payload: new Error(error),
    error: true
});

export const doHandleTextChange = ({writtenText, wrongInput}) => ({
    type: HANDLE_TEXT_CHANGE,
    payload: {
        writtenText,
        wrongInput
    }
});

export const doCalculateWPM = (secondsPassed) => ({
    type: CALCULATE_WPM,
    payload: {
        secondsPassed
    }
});

export const doHandleTimeIsUp = () => ({
    type: TIME_IS_UP
});