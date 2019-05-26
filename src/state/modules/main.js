import {
    REQUEST_IN_PROGRESS,
    GET_TEXT_SUCCESS,
    GET_TEXT_FAILURE,
    HANDLE_TEXT_CHANGE,
    CALCULATE_WPM,
    TIME_IS_UP,
} from "../actionCreators/main";

const initialState = {
    requestInProgress: false,
    originalText: '',
    caretPositionInOriginalText: 0,
    error: '',
    shouldGetNewText: true,
    writtenText: '',
    wpm: 0,
    completionPercent: 0,
    showResults: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_IN_PROGRESS:
            return {
                ...state,
                requestInProgress: action.payload.requestInProgress
            };
        case GET_TEXT_SUCCESS:
            return {
                ...state,
                originalText: action.payload.text,
                shouldGetNewText: false,
                requestInProgress: false,
            };
        case GET_TEXT_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                shouldGetNewText: false,
                requestInProgress: false,
            };
        case HANDLE_TEXT_CHANGE:
            const { caretPositionInOriginalText } = state;
            const { writtenText, wrongInput } = action.payload;
            return {
                ...state,
                writtenText,
                wrongInput,
                caretPositionInOriginalText: wrongInput ? caretPositionInOriginalText : caretPositionInOriginalText + 1
            };
        case CALCULATE_WPM:
            const typedWordsNumber = state.caretPositionInOriginalText / 5;
            const wordsPerSecond = typedWordsNumber / action.payload.secondsPassed;

            return {
                ...state,
                wpm: parseInt(wordsPerSecond * 60)
            };
        case TIME_IS_UP:
            return {
                ...state,
                showResults: true,
                completionPercent: (state.caretPositionInOriginalText / state.originalText.length * 100).toFixed(1)
            };
        default:
            return state;
    }
};