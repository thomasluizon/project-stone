import { FormEvent, useState } from 'react';
import styled, { useTheme } from 'styled-components';

const FormStyled = styled.form`
   ${props => props.theme.flexcol()}
   margin-top: 2rem;
   width: 70%;

   .form-wrapper {
      display: flex;
      justify-content: space-between;
      margin: 1.5rem 0;
      &-container {
         ${props => props.theme.flexcol()}
         width: 45%;
      }

      @media screen and (max-width: 768px) {
         flex-direction: column;
         gap: 1rem;
         &-container {
            width: 100%;
         }
      }
   }

   input,
   textarea,
   button {
      border: 1px solid white;
      border-radius: 10px;
      resize: none;
      padding: 0.5rem;
      transition: 0.2s all;
   }

   button {
      width: fit-content;
      margin: auto;
      margin-top: 2rem;
      padding: 0.5rem 2rem;
      cursor: pointer;
   }

   input:hover,
   textarea:hover,
   button:hover {
      border: 1px solid ${props => props.theme.colors.primary};
   }

   input:focus,
   textarea:focus {
      border: 1px solid #aafacc;
   }
`;

const Form = (props: any) => {
   const theme = useTheme();
   const [submitted, setSubmitted] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      const data = {
         name,
         email,
         phone,
         message,
      };

      fetch('https://project-stone.herokuapp.com/contact', {
         method: 'POST',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      })
         .then(res => {
            console.log(res);
            if (res.status == 200) {
               alert('Email sent!');
               setSubmitted(true);
               setName('');
               setEmail('');
               setPhone('');
               setMessage('');
            }
         })
         .catch(e => {
            console.log(e);
         });
   };

   return (
      <>
         {!submitted ? (
            <FormStyled theme={theme} onSubmit={handleSubmit}>
               <label htmlFor="name">Full Name</label>
               <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  required
               />

               <div className="form-wrapper">
                  <div className="form-wrapper-container">
                     <label htmlFor="emailId">Email</label>
                     <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="emailId"
                        required
                     />
                  </div>

                  <div className="form-wrapper-container">
                     <label htmlFor="phone">Phone</label>
                     <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                     />
                  </div>
               </div>

               <label htmlFor="message">Message</label>
               <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  name="message"
                  id="message"
                  rows={6}
                  required
               />

               <button type="submit">Submit</button>
            </FormStyled>
         ) : (
            <h2>
               'Your email has been sent, we will return to you as soon as
               possible.'
            </h2>
         )}
      </>
   );
};

export default Form;
