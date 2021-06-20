import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <AnimateSharedLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimateSharedLayout>
    </AnimatePresence>
  );
}

export default MyApp;
