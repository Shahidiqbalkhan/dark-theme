import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import storage from 'local-storage-fallback';
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';
import useTheme from './useTheme';
import ToggleMode from './ToggleMode';
import style from 'styled-theming';
import './styles.css';

const getBackground = style('mode', {
  light: '#EEE',
  dark: '#111'
});

const getForeground = style('mode', {
  light: '#111',
  dark: '#EEE'
});

const getFontSize = style('textZoom', {
  normal: '1em',
  magnify: '1.2em'
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
  font-size: ${getFontSize}
}
`;

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <ToggleMode />
          <button
            onClick={e =>
              theme.setTheme(
                theme.textZoom === 'normal'
                  ? { ...theme, textZoom: 'magnify' }
                  : { ...theme, textZoom: 'normal' }
              )
            }
          >
            Toggle Zoom
          </button>
        </div>
      </>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
