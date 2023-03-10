import { getLayout } from '../layouts/layout.js';
import styles from '../styles/Index.module.scss';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

function Index() {

  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div>
          <div className={styles.large + ' d-none d-md-block'}>
            <Image
              priority
              style={{ zIndex: -1 }}
              className="object-center object-cover pointer-events-none"
              layout="fill"
              src="/images/banner.jpg"
              alt="hero image"
            ></Image>
            <Row className="h-50">
              <Col md={5} lg={6}></Col>
              <Col md={5} className={styles.info}>
                <div className={styles.cta_wrapper}>
                  <div className={styles.headline}>
                    LEEDS COMMUNITY CONSULTING
                  </div>
                  <p className={'d-xl-block d-none ' + styles.text}>
                    <strong>
LCC is a student led pro-bono consulting firm with the primary aims of creating a positive social impact on the local community and improving student employability. 
                    </strong>
                  </p>
                </div>
              </Col>
              <Col md={2} lg={1}></Col>
            </Row>
          </div>
          <div className={styles.small + ' d-block d-md-none'}>
            <Image
              priority
              style={{ zIndex: -1 }}
              className="object-center object-cover pointer-events-none"
              layout="fill"
              src="/images/banner.jpg"
              alt="hero image"
            ></Image>
            <Row className="h-50">
              <Col xs={1} sm={3}></Col>
              <Col xs={10} sm={6} className={styles.info}>
                <div className={styles.cta_wrapper}>
                  <div className={styles.headline}>
                    LEEDS COMMUNITY CONSULTING
                  </div>
                </div>
              </Col>
              <Col xs={1} sm={3} md={2} lg={1}></Col>
            </Row>
          </div>
        </div>
      </section>


    </div>
  );
}

Index.getLayout = getLayout;
Index.title = 'Home | ';
Index.description = ''
export default Index;

