import { connect } from 'react-redux';
import {CountDown} from "./CountDown";
import {doCalculateWPM, doHandleTimeIsUp} from "../state/actionCreators/main";
import {saveHistory} from "../state/thunks";

const mapStateToProps = state => ({
    typingAllowed: state.main.typingAllowed,
    duration: state.main.duration
});

const mapDispatchToProps = dispatch => ({
    onCalculateWPM: (secondsPassed) => {
        dispatch(doCalculateWPM(secondsPassed));
    },
    onHandleTimeIsUp: () => {
        // TODO: optimize this with redux-batched-actions
        dispatch(doHandleTimeIsUp());
        dispatch(saveHistory());
    }
});

export const CountDownContainer = connect(mapStateToProps, mapDispatchToProps)(CountDown);