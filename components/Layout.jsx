import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Shah Durran | Portfolio</title>
        <meta
          name="description"
          content="Shah Durran is a highly skilled and motivated individual with
          more than 3 years of professional experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, vuejs, reactnative, jest, bootstrap, tailwind, git, sql, html, css, materialUI, redux, scss, reacttestinglibrary, jenkins, confluence, jira, "
        />
        {/* <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#f13024" /> */}
        <link rel="icon" href="/sd logo.ico" />
       
      </Head>

      {/* <TopLeftImg /> */}
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
