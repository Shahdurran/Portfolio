import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Loader from "../components/Loader";
import CustomCursor from "../components/Cursor";

import "../styles/globals.css";
import "typeface-bebas-neue";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
        <motion.div
          key={router.route}
          className="h-full bg-primary/50 mb-96"
          style={{
            overflowX: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Transition />
          <CustomCursor />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
