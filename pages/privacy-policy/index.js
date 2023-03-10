import { Container, Row, Col } from 'react-bootstrap';
import { getLayout } from '../../layouts/layout.js';

function Privacy() {
  return (
    <Container>
      <Row className="pb-5">
        <Col lg={2} xs={1} />
        <Col lg={8} xs={10}>
          <h1 className="title py-3">Privacy Policy</h1>
          <section className="pb-3">
            <strong className="subtitle">Last updated January 08, 2023</strong>
            <br />
            <br />
            <span>
              This privacy notice for Leeds Community Consulting (&apos;<strong>Company</strong>&apos;, &apos;
              <strong>we</strong>&apos;, &apos;<strong>us</strong>&apos;, or &apos;<strong>our</strong>
              &apos;), describes how and why we might collect, store, use, and/or share (&apos;
              <strong>process</strong>&apos;) your information when you use our services (&apos;
              <strong>Services</strong>&apos;), such as when you:
            </span>
            <ul className="pt-2">
              <li className="p-2">
                Visit our website at{' '}
                <a
                  className="lcc-link"
                  href="https://www.leedscomunityconsulting.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.leedscomunityconsulting.com
                </a>
                , or any website of ours that links to this privacy notice
              </li>
              <li className="p-2">
                Engage with us in other related ways, including any sales, marketing, or events
              </li>
            </ul>
          </section>

          <section className="pb-3">
            <strong className="subtitle">Questions or concerns? </strong>
            <p className="pt-3">
              Reading this privacy notice will help you understand your privacy rights and choices. If you do
              not agree with our policies and practices, please do not use our Services. If you still have any
              questions or concerns, please contact us at{' '}
              <a className="lcc-link" href="mailto:leedscomunityconsulting@gmail.com">
                leedscomunityconsulting@gmail.com
              </a>
              .
            </p>
          </section>

          <section id="summary" className="pb-3">
            <strong className="subtitle">SUMMARY OF KEY POINTS</strong>
            <p className="pt-2">
              <strong>
                <em>
                  This summary provides key points from our privacy notice, but you can find out more details
                  about any of these topics by clicking the link following each key point or by using our
                  table of contents below to find the section you are looking for. You can also click{' '}
                  <a href="#toc" className="lcc-link">
                    here
                  </a>{' '}
                  to go directly to our table of contents.
                </em>
              </strong>
            </p>

            <p>
              <strong>What personal information do we process?</strong> When you visit, use, or navigate our
              Services, we may process personal information depending on how you interact with Leeds Community
              Consulting and the Services, the choices you make, and the products and features you use. Click{' '}
              <a href="#personalinfo" className="lcc-link">
                here
              </a>{' '}
              to learn more.
            </p>
            <p>
              <strong>Do we process any sensitive personal information?</strong> We do not process sensitive
              personal information.
            </p>
            <p>
              <strong>Do we receive any information from third parties?</strong> We may receive information
              from public databases, marketing partners, social media platforms, and other outside sources.
              Click{' '}
              <a href="#othersources" className="lcc-link">
                here
              </a>{' '}
              to learn more.
            </p>

            <p>
              <strong>How do we process your information?</strong> We process your information to provide,
              improve, and administer our Services, communicate with you, for security and fraud prevention,
              and to comply with law. We may also process your information for other purposes with your
              consent. We process your information only when we have a valid legal reason to do so. Click{' '}
              <a href="#infouse" className="lcc-link">
                {' '}
                here{' '}
              </a>{' '}
              to learn more.
            </p>
            <p>
              <strong>In what situations and with which parties do we share personal information?</strong> We
              may share information in specific situations and with specific third parties. Click{' '}
              <a href="#whoshare" className="lcc-link">
                here
              </a>{' '}
              to learn more.
            </p>
            <p>
              <strong>How do we keep your information safe?</strong> We have organisational and technical
              processes and procedures in place to protect your personal information. However, no electronic
              transmission over the internet or information storage technology can be guaranteed to be 100%
              secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised
              third parties will not be able to defeat our security and improperly collect, access, steal, or
              modify your information. Click{' '}
              <a href="#infosafe" className="lcc-link">
                here
              </a>{' '}
              to learn more.
            </p>
            <p>
              <strong>What are your rights?</strong> Depending on where you are located geographically, the
              applicable privacy law may mean you have certain rights regarding your personal information.
              Click{' '}
              <a href="#privacyrights" className="lcc-link">
                here
              </a>{' '}
              to learn more.
            </p>
            <p>
              <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by
              filling out our data subject request form available here:
              https://www.Leedscommunityconsulting/portal/account, or by contacting us. We will consider and
              act upon any request in accordance with applicable data protection laws.
            </p>
            <p>
              Want to learn more about what Leeds Community Consulting does with any information we collect?
              Click{' '}
              <a href="#toc" className="lcc-link">
                here
              </a>{' '}
              to review the notice in full.
            </p>
          </section>

          <section id="toc" className="pb-3">
            <strong className="subtitle">TABLE OF CONTENTS</strong>
            <p className="pt-3">
              <a href="#infocollect">1. WHAT INFORMATION DO WE COLLECT?</a>
            </p>
            <p>
              <a href="#infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
            </p>
            <p>
              <a href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>
            </p>
            <p>
              <a href="#inforetain">4. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
            </p>
            <p>
              <a href="#infosafe">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
            </p>
            <p>
              <a href="#infominors">6. DO WE COLLECT INFORMATION FROM MINORS?</a>
            </p>
            <p>
              <a href="#privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</a>
            </p>
            <p>
              <a href="#DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
            </p>
            <p>
              <a href="#caresidents">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>
            </p>

            <p>
              <a href="#policyupdates">10. DO WE MAKE UPDATES TO THIS NOTICE?</a>
            </p>
            <p>
              <a href="#contact">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
            </p>
            <p>
              <a href="#request">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a>
            </p>
          </section>

          <section id="infocollect">
            <p>
              <strong className="subtitle">1. WHAT INFORMATION DO WE COLLECT?</strong>
            </p>

            <p>
              <strong>Personal information you disclose to us</strong>
            </p>

            <p>
              <strong>
                <em>In Short: </em>
              </strong>
              <em>We collect personal information that you provide to us.</em>We collect personal information
              that you voluntarily provide to us when you register on the Services, express an interest in
              obtaining information about us or our products and Services, when you participate in activities
              on the Services, or otherwise when you contact us.{' '}
            </p>
            <p>
              <strong>Personal Information Provided by You.</strong> The personal information that we collect
              depends on the context of your interactions with us and the Services, the choices you make, and
              the products and features you use. The personal information we collect may include the
              following:
            </p>

            <ul>
              <li>names</li>

              <li>phone numbers</li>

              <li>email addresses</li>

              <li>passwords</li>
            </ul>
            <p>
              <strong>Sensitive Information.</strong> We do not process sensitive information. All personal
              information that you provide to us must be true, complete, and accurate, and you must notify us
              of any changes to such personal information.{' '}
            </p>
            <p>
              <strong>Information automatically collected,</strong>

              <strong>
                <em> In Short: </em>
              </strong>

              <em>
                Some information &mdash; such as your Internet Protocol (IP) address and/or browser and device
                characteristics &mdash; is collected automatically when you visit our Services.
              </em>
            </p>

            <p>
              We automatically collect certain information when you visit, use, or navigate the Services. This
              information does not reveal your specific identity (like your name or contact information) but
              may include device and usage information, such as your IP address, browser and device
              characteristics, operating system, language preferences, referring URLs, device name, country,
              location, information about how and when you use our Services, and other technical information.
              This information is primarily needed to maintain the security and operation of our Services, and
              for our internal analytics and reporting purposes.
            </p>

            <p>
              <strong>The information we collect includes:</strong>
            </p>
            <p>
              <strong>Log and Usage Data:</strong> Log and usage data is service-related, diagnostic, usage,
              and performance information our servers automatically collect when you access or use our
              Services and which we record in log files. Depending on how you interact with us, this log data
              may include your IP address, device information, browser type, and settings and information
              about your activity in the Services (such as the date/time stamps associated with your usage,
              pages and files viewed, searches, and other actions you take such as which features you use),
              device event information (such as system activity, error reports (sometimes called &apos;crash
              dumps&apos;), and hardware settings).
            </p>

            <p>
              <strong>Information collected from other sources</strong>
            </p>
            <p>
              We may collect limited data from public databases, marketing partners, and other outside
              sources. In order to enhance our ability to provide relevant marketing, offers, and services to
              you and update our records, we may obtain information about you from other sources, such as
              public databases, joint marketing partners, affiliate programs, data providers, and from other
              third parties. This information includes mailing addresses, job titles, email addresses, phone
              numbers, intent data (or user behaviour data), Internet Protocol (IP) addresses, social media
              profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event
              promotion.
            </p>
          </section>
          <section id="infouse">
            <strong className="subtitle">2. HOW DO WE PROCESS YOUR INFORMATION?</strong>

            <p>
              <em>
                We process your information to provide, improve, and administer our Services, communicate with
                you, for security and fraud prevention, and to comply with law. We may also process your
                information for other purposes with your consent.
              </em>
            </p>
            <p>
              <strong>
                We process your personal information for a variety of reasons, depending on how you interact
                with our Services, including:
              </strong>
            </p>

            <ul>
              <li>
                <strong>
                  To facilitate account creation and authentication and otherwise manage user accounts.{' '}
                </strong>
                We may process your information so you can create and log in to your account, as well as keep
                your account in working order.
              </li>

              <li>
                <strong>
                  To evaluate and improve our Services, products, marketing, and your experience.
                </strong>{' '}
                We may process your information when we believe it is necessary to identify usage trends,
                determine the effectiveness of our promotional campaigns, and to evaluate and improve our
                Services, products, marketing, and your experience.
              </li>

              <li>
                <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We
                may process your information to better understand how to provide marketing and promotional
                campaigns that are most relevant to you.
              </li>
            </ul>
          </section>
          <section id="whoshare">
            <strong className="subtitle">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</strong>

            <p>
              <em>
                <strong>In Short:</strong> We may share information in specific situations described in this
                section and/or with the following third parties.
              </em>
              We may need to share your personal information in the following situations:
            </p>

            <p>
              <strong>Business Transfers.</strong> We may share or transfer your information in connection
              with, or during negotiations of, any merger, sale of company assets, financing, or acquisition
              of all or a portion of our business to another company.
            </p>
          </section>
          <section id="inforetain">
            <strong className="subtitle">4. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
            <p className="pt-2">
              <em>
                <strong>In Short: </strong>
                We keep your information for as long as necessary to fulfil the purposes outlined in this
                privacy notice unless otherwise required by law.
              </em>
            </p>

            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set
              out in this privacy notice, unless a longer retention period is required or permitted by law
              (such as tax, accounting, or other legal requirements). No purpose in this notice will require
              us keeping your personal information for longer than the period of time in which users have an
              account with us.
            </p>

            <p>
              When we have no ongoing legitimate business need to process your personal information, we will
              either delete or anonymise such information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives), then we will securely store your
              personal information and isolate it from any further processing until deletion is possible.
            </p>
          </section>
          <section id="infosafe">
            <strong className="subtitle">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</strong>

            <p className="pt-2">
              <em>
                <strong>In Short: </strong>
                We aim to protect your personal information through a system of organisational and technical
                security measures.
              </em>
            </p>

            <p>
              We have implemented appropriate and reasonable technical and organisational security measures
              designed to protect the security of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic transmission over the Internet
              or information storage technology can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to
              defeat our security and improperly collect, access, steal, or modify your information. Although
              we will do our best to protect your personal information, transmission of personal information
              to and from our Services is at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </section>
          <section id="infominors">
            <strong className="subtitle">6. DO WE COLLECT INFORMATION FROM MINORS?</strong>

            <p className="pt-2">
              <em>
                <strong>In Short:</strong> We do not knowingly collect data from or market to children under
                18 years of age.
              </em>
            </p>
            <p>
              We do not knowingly solicit data from or market to children under 18 years of age. By using the
              Services, you represent that you are at least 18 or that you are the parent or guardian of such
              a minor and consent to such minor dependent&rsquo;s use of the Services. If we learn that
              personal information from users less than 18 years of age has been collected, we will deactivate
              the account and take reasonable measures to promptly delete such data from our records. If you
              become aware of any data we may have collected from children under age 18, please contact us at{' '}
              <a href="mailto:tech@leedscomunityconsulting.com" className="lcc-link">
                tech@leedscomunityconsulting.com
              </a>
              .
            </p>
          </section>
          <section id="privacyrights">
            <strong className="subtitle">7. WHAT ARE YOUR PRIVACY RIGHTS?</strong>

            <p>
              <em>
                <strong>In Short:</strong> <span className="lcc-link"> </span>You may review, change, or
                terminate your account at any time.
              </em>
            </p>

            <p>
              If you are located in the EEA or UK and you believe we are unlawfully processing your personal
              information, you also have the right to complain to your local data protection supervisory
              authority. You can find their contact details{' '}
              <a
                href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                rel="noopener noreferrer"
                target="_blank"
                className="lcc-link"
              >
                here
              </a>
            </p>

            <p>
              If you are located in Switzerland, the contact details for the data protection authorities are
              available here:
              <a
                href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                rel="noopener noreferrer"
                target="_blank"
                className="lcc-link"
              >
                https://www.edoeb.admin.ch/edoeb/en/home.html
              </a>
            </p>
            <p>
              <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your
              personal information, which may be express and/or implied consent depending on the applicable
              law, you have the right to withdraw your consent at any time. You can withdraw your consent at
              any time by contacting us by using the contact details provided in the section &apos;
              <a href="#contact" className="lcc-link">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
              &apos; below.
            </p>
            <p>
              However, please note that this will not affect the lawfulness of the processing before its
              withdrawal nor, when applicable law allows, will it affect the processing of your personal
              information conducted in reliance on lawful processing grounds other than consent.
            </p>
            <p>
              <strong>Opting out of marketing and promotional communications: </strong>
              You can unsubscribe from our marketing and promotional communications at any time by clicking on
              the unsubscribe link in the emails that we send, or by contacting us using the details provided
              in the section &apos;
              <a href="#contact" className="lcc-link">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
              &apos; below. You will then be removed from the marketing lists. However, we may still
              communicate with you &mdash; for example, to send you service-related messages that are
              necessary for the administration and use of your account, to respond to service requests, or for
              other non-marketing purposes.
            </p>

            <p>
              <strong>Account Information</strong>
            </p>

            <p>
              If you would at any time like to review or change the information in your account or terminate
              your account, you can: Log in to your account settings and update your user account.
            </p>

            <p>
              Upon your request to terminate your account, we will deactivate or delete your account and
              information from our active databases. However, we may retain some information in our files to
              prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms
              and/or comply with applicable legal requirements.
            </p>
            <p>
              If you have questions or comments about your privacy rights, you may email us at{' '}
              <a className="lcc-link" herf="mailto:tech@leedscomunityconsulting.com">
                tech@leedscomunityconsulting.com
              </a>
              .
            </p>
          </section>
          <section id="DNT">
            <strong className="subtitle">8. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>

            <p className="pt-2">
              Most web browsers and some mobile operating systems and mobile applications include a
              Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy
              preference not to have data about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognising and implementing DNT signals has been
              finalised. As such, we do not currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked online. If a standard for online
              tracking is adopted that we must follow in the future, we will inform you about that practice in
              a revised version of this privacy notice.
            </p>
          </section>
          <section id="caresidents">
            <strong className="subtitle">9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</strong>
            <p className="pt-2">
              {' '}
              <em>
                <strong>In Short: </strong>
                Yes, if you are a resident of California, you are granted specific rights regarding access to
                your personal information.
              </em>
            </p>
            <p>
              California Civil Code Section 1798.83, also known as the &apos;Shine The Light&apos; law,
              permits our users who are California residents to request and obtain from us, once a year and
              free of charge, information about categories of personal information (if any) we disclosed to
              third parties for direct marketing purposes and the names and addresses of all third parties
              with which we shared personal information in the immediately preceding calendar year. If you are
              a California resident and would like to make such a request, please submit your request in
              writing to us using the contact information provided below.
            </p>
            <p>
              If you are under 18 years of age, reside in California, and have a registered account with
              Services, you have the right to request removal of unwanted data that you publicly post on the
              Services. To request removal of such data, please contact us using the contact information
              provided below and include the email address associated with your account and a statement that
              you reside in California. We will make sure the data is not publicly displayed on the Services,
              but please be aware that the data may not be completely or comprehensively removed from all our
              systems (e.g. backups, etc.).
            </p>
          </section>
          <section id="policyupdates">
            <strong className="subtitle">10. DO WE MAKE UPDATES TO THIS NOTICE?</strong>

            <p className="pt-2">
              <em>
                <strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with
                relevant laws.
              </em>
            </p>
            <p>
              We may update this privacy notice from time to time. The updated version will be indicated by an
              updated &apos;Revised&apos; date and the updated version will be effective as soon as it is
              accessible. If we make material changes to this privacy notice, we may notify you either by
              prominently posting a notice of such changes or by directly sending you a notification. We
              encourage you to review this privacy notice frequently to be informed of how we are protecting
              your information.
            </p>
          </section>
          <section className="pb-3" id="contact">
            <strong className="subtitle">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>

            <p>
              email us at{' '}
              <a href="mailto:tech@leedscomunityconsulting.com" className="lcc-link">
                tech@leedscomunityconsulting.com
              </a>{' '}
              or by post to:
            </p>
            <span>Leeds Community Consulting</span>
            <br />
            <span>Careers Department University of Leeds</span>
            <br />
            <span>Leeds, North Leedsshire YO10 5DD</span>
            <br />
            <span>United Kingdom</span>
          </section>
          <section id="request">
            <strong className="subtitle">
              12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </strong>

            <p>
              You have the right to request access to the personal information we collect from you, change
              that information, or delete it. To request to review, update, or delete your personal
              information, please visit:{' '}
              <a href="https://www.Leedscommunityconsulting/portal/account" className="lcc-link">
                https://www.Leedscommunityconsulting/portal/account
              </a>
            </p>
          </section>
        </Col>
        <Col lg={2} xs={1} />
      </Row>
    </Container>
  );
}

Privacy.getLayout = getLayout;
Privacy.title = 'Privacy Policy | ';
export default Privacy;
