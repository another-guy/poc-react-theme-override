import React from 'react';
import { CSSProperties } from 'styled-components';
import { MyStyledComponentViaStyledDotDiv, MyStyledComponentViaClassName } from './MyStyledComponent';
import { AltThemeProvider, MainThemeProvider } from './ThemeProviders';

const style: CSSProperties = {
  border: '3px solid silver',
  padding: 3,
  margin: 10,
};

function App() {
  return (
    <div>
      My App

      <div style={style}>
        MAIN THEME PROVIDER

        <MainThemeProvider>
          <MyStyledComponentViaStyledDotDiv>
            MyStyledComponentViaStyledDotDiv
          </MyStyledComponentViaStyledDotDiv>
          <MyStyledComponentViaClassName>
            MyStyledComponentViaClassName
          </MyStyledComponentViaClassName>


          <div style={style}>
            ALT THEME PROVIDER

            <AltThemeProvider>
              <MyStyledComponentViaStyledDotDiv>
                MyStyledComponentViaStyledDotDiv
              </MyStyledComponentViaStyledDotDiv>
              <MyStyledComponentViaClassName>
                MyStyledComponentViaClassName
              </MyStyledComponentViaClassName>
            </AltThemeProvider>
          </div>
        </MainThemeProvider>
      </div>
    </div>
  );
}


export default App;
