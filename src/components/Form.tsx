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

   return (
      <FormStyled
         theme={theme}
         onSubmit={e => {
            e.preventDefault();
         }}
      >
         <label htmlFor="name">Full Name</label>
         <input type="text" name="nome" id="name" />

         <div className="form-wrapper">
            <div className="form-wrapper-container">
               <label htmlFor="emailId">Email</label>
               <input type="text" name="email" id="emailId" />
            </div>

            <div className="form-wrapper-container">
               <label htmlFor="phone">Phone</label>
               <input type="text" name="telefone" id="phone" />
            </div>
         </div>

         <label htmlFor="message">Message</label>
         <textarea name="mensagem" id="message" rows={6} />

         <button type="submit">Submit</button>
      </FormStyled>
   );
};

export default Form;
