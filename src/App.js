import React from 'react';
import styled from '@emotion/styled';
import {TextBlockContainer} from './components/TextBlock.container';
import {TextInputContainer} from "./components/TextInput.container";
import {CountDownContainer} from "./components/CountDown.container";
import {WPMInfoContainer} from "./components/WPMInfo.container";
import {ResultsSectionContainer} from './components/ResultsSection.container';
import {SettingsContainer} from "./components/Settings.container";
import {TryAgainContainer} from "./components/TryAgain.container";
import {HistorySectionContainer} from "./components/History/HistorySection.container";

const AppWrapperStyled = styled('div')`
    margin-left: 24px;
    margin-right: 24px;
    
    border: 1px solid gray;
    padding: 0px 16px;
    border-radius: 12px;
    background-color: lightcyan;
    
    & * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const BodyStyled = styled('div')`
    min-height: 400px;
`;

export const App = (props) => {
    return (
        <AppWrapperStyled>
            <header>
                <h1>Typeracer</h1>
                <h3>
                    Check your typing skills
                </h3>
            </header>
            <BodyStyled>
                <h4>Type the text below:</h4>
                {props.typingAllowed && <CountDownContainer duration={5}/>}
                <TextBlockContainer/>
                <WPMInfoContainer/>
                <SettingsContainer />
                <TextInputContainer/>
                <TryAgainContainer />
                <ResultsSectionContainer/>
                {!props.typingAllowed && <HistorySectionContainer />}
            </BodyStyled>
        </AppWrapperStyled>
    );
};
