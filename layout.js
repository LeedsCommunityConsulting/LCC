import Footer from '../components/Footer';
import Navbarr from '../components/Navbar';
import Head from 'next/head';
import { hotjar } from 'react-hotjar';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

export default function Layout({ title, description, children }) {
  // Hotjar Tracking
  useEffect(() => {
    hotjar.initialize(0, 0);
    //Your code
  }, []);
  ReactGA.initialize('Your Code');
  //Remove if you do not wish to use either platform

  return (
    <div className="page">
      <Head>
        <title>{title}</title>
        <meta
          property="og:title"
          content={'Leeds Community Consulting' + (title ? ' - ' + title.split('|')[0].trim() : '')}
        />
        <link rel="shortcut icon" href="/favicon.ico"></link>
        <meta property="og:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Leeds Community Consulting" />
        <meta property="og:image" content="" /> {/* Your image */}
        <meta property="og:url" content="www.leedscommunityconsulting.com" />
        <meta property="og:image:type" content="image/png" />
        {/* <meta property="business:contact_data:street_address" content="396 Harewood Way" />
        <meta property="business:contact_data:locality" content="Heslington, Leeds" />
        <meta property="business:contact_data:region" content="North Leedsshire" />
        <meta property="business:contact_data:postal_code" content="YO10 5DS" />
        <meta property="business:contact_data:country_name" content="United Kingdom" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Leeds_cc" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/images/lcc_banner.png" />
        <meta name="twitter:image:alt" content="Our Logo" />
        <meta name="msapplication-TileColor" content="#1d2050" />
        <meta name="theme-color" content="#1d2050" />
        <meta
          name="keywords"
          content="Leeds Community Consulting, Student, Pro Bono, Leeds, Leeds University, Consulting, Community Consulting"
        /> */}
      </Head>
      <div>
        <Navbarr />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export const getLayout = (page, title, description) => {
  return (
    <Layout title={title} description={description}>
      {page}
    </Layout>
  );
};
