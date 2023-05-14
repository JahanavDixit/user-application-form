import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import theme from './theme';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DisplayPage from './pages/display/display';
import SecondPage from './pages/secondpage/second';
import Header from './features/header';
import { updatePage2 } from './app/store';
const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/second" element={<SecondPage gen='' date='' photo='' quote='' updatePage2={updatePage2} />} />
            <Route path="/display" element={<DisplayPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
