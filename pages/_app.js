import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const title = (Component.title || '') + 'Leeds Community Consulting';
  const description = Component.description || '';
  return getLayout(<Component {...pageProps} />, title, description);
}

export default MyApp;
