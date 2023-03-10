import Accordion from 'react-bootstrap/Accordion';
import { getLayout } from '../../layouts/layout.js';
import { Row, Col } from 'react-bootstrap';
function Faqs() {
  return (
    <div clasName="FAQ">
      <Row className="my-5">
        <Col md={2} xs={1} />
        <Col md={8} xs={10} className="Faqs">
          {faqData.map((section, index) => (
            <div className="my-5" key={index}>
              <h2 className="font-q">{section.title}</h2>
              <Accordion>
                {section.questions.map((faq, index) => (
                  <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header className="font-q">{faq.title}</Accordion.Header>
                    <Accordion.Body>{faq.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          ))}
        </Col>
        <Col md={2} xs={1} />
      </Row>
    </div>
  );
}

Faqs.getLayout = getLayout;
Faqs.title = 'FAQ | ';
Faqs.description =
  'Leeds Community Consulting is a pro bono, student-led consultancy. We provide students with the opportunity to develop their skills and explore consultancy.';
export default Faqs;

const faqData = [
  {
    title: 'Working With Us',
    questions: [
      {
        title: 'What is Leeds Community Consulting (LCC)?',
        content: (
          <>
            Leeds Community Consulting (LCC) is a pro bono business management consultancy. We seek to make a
            positive social impact on the local community and beyond. We achieve this through professional and
            thorough consultancy work.
            <br /> Operating to a very high standard, LCC has an excellent track record. We bring new
            perspectives and solutions to both new and well-established organisation. We work with small and
            medium-sized enterprises, charities, start-ups and local government.
          </>
        ),
      },
      {
        title: 'What service does LCC offer?',
        content: (
          <>
            We have teams of well-mentored and professional consultants. LCC seeks to benefit the local
            community through the work we do. We assign a Strategy Director, an External Mentor, a Project
            Manager, and a team of consultants to each project.
            <br />
            This ensures that the service we provide is of the highest standard, and meets our clients&apos;
            needs. We offer a bespoke service that is tailored to each client. We don&apos;t have a limited
            comfort zone, we can operate with a great deal of flexibility with each project.
          </>
        ),
      },
      {
        title: 'Is LCC right for me?',
        content: (
          <>
            There are certain areas of work in which we are well suited, although we are not limited to these
            areas. These include:
            <ul>
              <li>Marketing and branding strategies</li>
              <li>Market research and analysis</li>
              <li>Social impact measurement and analysis</li>
              <li>Youth-specific consultancy services and research</li>
              <li>Social media, web and data strategy</li>
            </ul>
            The beauty of having a pool of talented consultants is that LCC is not limited in the range of
            projects we undertake. We approach each project with fresh enthusiasm. Plus, a drive to deliver a
            high-quality and professional service to all our clients. We handpick our consultants for each
            individual project. We select consultants based on their skill set and the skills required for
            each task. This ensures that our team of consultants has the relevant experience. Plus, the
            knowledge to produce a high-quality end product.
          </>
        ),
      },
      {
        title: 'I think LCC is right for me, what do I do now?',
        content:
          'If you think LCC would benefit your company, charity, or organisation, then please get in contact with us.  We will then get back to you as soon as possible to discuss the next stages. Please provide us with as much background information on your organisation as possible. Plus, outline what you would like LCC to assist with. We are open to a wide variety of new projects and clients.',
      },
    ],
  },
  {
    title: 'Project Questions',
    questions: [
      {
        title: "Who are LCC's clients?",
        content:
          "LCC clients include student start ups, local authorities, charities, social enterprises, and more recently larger firms. Examples of clients include Virgin Trains East Coast (large firm), Leeds Foodbank (social enterprise), Leeds Family Mediation Service (local authority) and Alpha Juices (student startup). Other clients have included the Joseph Trust, St. Nick's, Selby District Council, The Fig Tree, and Recycla Book amongst others",
      },

      {
        title: 'Where can I find out what projects you have available?',
        content:
          'Information about all of our new projects will be sent out via our mailing list, social media accounts, LCC events, and where possible department emails or careers notifications. ',
      },
      {
        title: 'What is an External Mentor?',
        content:
          'An External Mentor is an experienced professional who has industry experience and many times are LCC Alumni. They are responsible for ensuring that the project is delivered on time and to a high standard.',
      },
      {
        title: 'Where can I find further information about a specific project? ',
        content:
          'Project outlines and information will be made available when we market openings and opportunities. We will not be able to disclose further information to applicants. You are however strongly encouraged to conduct your own research into the client or project area prior to your application.',
      },
    ],
  },
  {
    title: 'Joining LCC',
    questions: [
      {
        title: 'Will I be paid?',
        content:
          'No, a position on a project team or the committee is voluntary, however we will expense necessary travel.',
      },
      {
        title: 'Do I need to be studying a business related degree?',
        content:
          'No, anyone can apply to join us, we have an appreciation of diverse thought in project teams.',
      },
      {
        title: 'Who will be in project teams?',
        content: 'We normally expect to have 4-6 people per project team including a Senior Consultant.',
      },
      {
        title: 'What are the expected hours I will need to work?',
        content:
          'We normally expect Analysts to work around 8 hours a week with Senior Consultants around 10 hours.',
      },
    ],
  },
];
