import type {
  NextApiRequest,
  NextPage,
  NextApiHandler,
  GetServerSideProps,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import styles from "../styles/Home.module.css";

import { Form, Input, Stack, TagInput, Sidenav } from "rsuite";
import { RsaPublicKey, webcrypto, generateKey, generateKeyPair } from "crypto";
import { AppInitialProps } from "next/app";
import { NextApiRequestQuery } from "next/dist/server/api-utils";



class SystemSetup extends Component {
  state = {
    global: {},
    config: {},
  };

  api: () => {};

  rer;
}
const HeaderTitle: NextPage = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

const Desktop = {};

const Footer: NextApiRequestQuery = () => {
  let r = {
    query: {
      //[key: string]: string | string[];
    },
    /**
     * Object of `cookies` from header
     */
    cookies: {
      //   [key: string]: string;
    },

    body: {},
  };

  // env:
  // preview?: boolean;
  /**
   * Preview data set on the request, if any
   * */
  // previewData?: PreviewData;
  //   return (
  //     <footer className={styles.footer}>
  //       <a href="#" target="_blank" rel="noopener noreferrer">
  //         Powered by{" "}
  //         <span className={styles.logo}>
  //           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //         </span>
  //       </a>
  //     </footer>
  //   );

  return <Footer />;
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Init</title>
        <meta name="description" content="Init" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Sidenav />
        <HeaderTitle>Title</HeaderTitle>

        <p className={styles.description}>
          <code className={styles.code}>GTP-UCS-545</code>.
        </p>

        <p>
          Tip: use the inspector (next to the address bar) to open components!
        </p>

        <div className={styles.grid}>
          <a href="./setup/hostname" className={styles.card}>
            <h2>Hostname &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="./setup/network" className={styles.card}>
            <h2>Network</h2>
            <p>Network setup</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

// Home.bind()
export default Home;
