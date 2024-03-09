// pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/TaskStore";
import Alert from "../components/atoms/Alert"; // Import your Alert component here

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Alert /> {/* Include the Alert component here */}
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
