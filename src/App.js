//1 importar router
//2 importar Link

import { BrowserRouter } from "react-router-dom";

//9 importar provider
import { Provider } from "react-redux";
import { persistor, store } from "./store";

import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyles } from "./theme";
import Layout from "./components/Layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    //2 Englobar en browser router
    <BrowserRouter>
      {/* //10 Englobar en Provider */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
              <AppRoutes />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
