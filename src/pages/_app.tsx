import './styles.css'

import { AppProps } from "next/app";
import { CounterProvider } from "@/contexts/counterContext";
import { UserProvider } from "@/contexts/userContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CounterProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </CounterProvider>
  );
};

export default MyApp;
