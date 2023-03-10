import Image from 'next/image';
import { Nav, Navbar } from 'react-bootstrap';
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbarr() {
  const router = useRouter();
  const origin = router.basePath + '/';
  return (
    <Navbar collapseOnSelect={true} className={styles.frontnav} bg="primary" variant="dark" expand="md">
      <div className="container-fluid w-100 justify-content-between">
        <Link href={origin} passHref>
          <Navbar.Brand>
            <div className={styles.logo}>
              <Image alt="LCC Logo" layout="fill" src="/images/logo.webp" />
            </div>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle className="focus-border-0 border-0" />
        <Navbar.Collapse className="justify-content-center" id="navbarToggler">
          <Nav className="justify-content-center w-100">
            <Link href={origin + 'about'} passHref>
              <Nav.Link className={router.pathname == '/about' ? styles.navlinkActive : styles.navlink}>
                ABOUT
              </Nav.Link>
            </Link>
            <Link href={origin + 'past-clients'} passHref>
              <Nav.Link
                className={router.pathname == '/past-clients' ? styles.navlinkActive : styles.navlink}
              >
                PAST CLIENTS
              </Nav.Link>
            </Link>
            <Link href={origin + 'team'} passHref>
              <Nav.Link className={router.pathname == '/team' ? styles.navlinkActive : styles.navlink}>
                THE TEAM
              </Nav.Link>
            </Link>
            <Link href={origin + 'get-involved'} passHref>
              <Nav.Link className={router.pathname == '/get-involved' ? styles.navlinkActive : styles.navlink}>
                GET INVOLVED
              </Nav.Link>
            </Link>
            <Link href={origin + 'faqs'} passHref>
              <Nav.Link className={router.pathname == '/faqs' ? styles.navlinkActive : styles.navlink}>
                FAQS
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navbarr;
