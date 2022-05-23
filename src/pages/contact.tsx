import type { NextPage } from 'next';
import styled, { useTheme } from 'styled-components';
import Title from '../components/Title';
import Head from 'next/head';
import Container from '../global/Container';
import Form from '../components/Form';

const ContactSection = styled.section`
   .wrapper {
      display: flex;
      justify-content: center;
   }
`;

const Contact: NextPage = (props: any) => {
   const theme = useTheme();

   return (
      <>
         <Head>
            <title>Project Stone - Contact</title>
         </Head>
         <ContactSection>
            <Container>
               <header className="wrapper">
                  <Title>Contact</Title>
               </header>
               <div className="wrapper">
                  <Form />
               </div>
            </Container>
         </ContactSection>
      </>
   );
};

export default Contact;
