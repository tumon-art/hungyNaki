import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
