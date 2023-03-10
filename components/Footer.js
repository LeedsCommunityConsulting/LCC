import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    //Webhook for Zapier
    setEmail('');
  };
  return (
    <footer className={styles.footer}>
      <Container fluid="xs">
        <Row>
          <Col xl={1} xs={0}></Col>
          <Col lg={5} xs={12} className="d-flex justify-content-start mb-5">
            <section>
              <Image
                alt="LCC Logo"
                className={styles.logo}
                layout="intrinsic"
                height="70"
                width="70"
                src="/images/logo.webp"
              />
              <h1 className="font-q align-self-center">Leeds Community Consulting</h1>
              <em>&quot;your tagline&quot;</em>
            </section>
          </Col>

          <Col lg={3} md={4} xs={12} className="justify-content-center mb-5 pl-4">
            <h2 className="font-q">Pages</h2>
            <ul className={styles.footerlinks}>
              <Link href="/" passHref>
                <a>
                  <li>Home</li>
                </a>
              </Link>
              <Link href="/about" passHref>
                <a>
                  <li>About</li>
                </a>
              </Link>
              <Link href="/get-involed" passHref>
                <a>
                  <li>Get Involved</li>
                </a>
              </Link>
              <Link href="/terms-and-conditions" passHref>
                <a>
                  <li>Terms & Conditions</li>
                </a>
              </Link>
              <Link href="/privacy-policy" passHref>
                <a>
                  <li>Privacy Policy</li>
                </a>
              </Link>
            </ul>
          </Col>
          <Col xl={3} lg={3} sm={8} xs={12} className="font-q pl-4 mb-5" id="signup">
          
          </Col>
          <Col xl={2} lg={1} xs={0}></Col>
        </Row>
        <Row className="m-3">
          <Col md={3} sm={1}></Col>
          <Col md={6} sm={10} xs={12}>
            <ul className={styles.footersocial}>
              <li>
                <a
                  aria-label="Visit our Facebook page"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/Leedscommunityconsulting/"
                >
                  <FontAwesomeIcon icon={faSquareFacebook} size="lg" className={styles.footericon} />
                </a>
              </li>
              <li>
                <a
                  aria-label="Visit our Twitter page"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/Leeds_cc"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" className={styles.footericon} />
                </a>
              </li>
              <li>
                <a
                  aria-label="Visit our LinkedIn page"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/Leeds-community-consulting"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className={styles.footericon} />
                </a>
              </li>
              <li>
                <a
                  aria-label="Visit our Instagram page"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/Leeds_cc/"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" className={styles.footericon} />
                </a>
              </li>
              <li>
                <a
                  aria-label="Visit our YouTube page"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCtTeNexsC2VGhI2FjHAj2sg"
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" className={styles.footericon} />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={1}></Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Leeds Community Consulting
          </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
