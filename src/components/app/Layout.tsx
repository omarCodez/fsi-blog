import type { NextPage } from "next";
import Head from "next/head";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
  pageTitle?: string;
};

const Layout: NextPage<Props> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Home - FSI"}</title>
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
