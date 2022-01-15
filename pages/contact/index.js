import styled from "styled-components";

const StyledContact = styled.section`
  display: flex;
  justify-content: center;

  .formWrap {
    width: 25vw;
    .theForm {
      margin-top: 2rem;
      padding: 0 3rem;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;

      label {
        display: block;
        margin-bottom: 0.2em;
        padding: 0 1rem;
        color: #5b718c;
      }
      p {
        width: 100%;

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          -webkit-text-fill-color: #335580;
          transition: background-color 5000s ease-in-out 0s;
        }

        input {
          color: #335580;
          width: 100%;
          height: 2rem;
          border-radius: 5px;
          background-color: #d8e1ed;
          border: solid thin #b8c7d9;
          font-size: 1rem;
          letter-spacing: 0.04rem;

          :focus {
            outline: none !important;
            border: 1px solid #a3afbf;
            box-shadow: 0px 4px 7px -2px rgba(113, 158, 206, 0.49);
            -webkit-box-shadow: 0px 4px 7px -2px rgba(113, 158, 206, 0.49);
            -moz-box-shadow: 0px 4px 7px -2px rgba(113, 158, 206, 0.49);
          }
        }

        textarea {
          /* background-color: #d8e1ed; */
          color: #335580;
          background-color: #d8e1ed;
          width: 100%;
          border-radius: 5px;
          border: solid thin #b8c7d9;
          font-size: 1rem;
          letter-spacing: 0.04rem;

          :focus {
            outline: none !important;
            border: 1px solid #a3afbf;
            box-shadow: 0px 4px 7px -2px rgba(113, 158, 206, 0.49);
            -webkit-box-shadow: 0px 4px 7px -2px rgba(113, 158, 206, 0.49);
            -moz-box-shadow: 0px 4px 7px -2px rgba(113, 158, 206, 0.49);
          }
        }
      }
      button {
        color: white;
        background-color: #24b379;
        padding: 0.6rem 1.1rem;
        border: solid thin #b8c7d9;
        border-radius: 5px;
        letter-spacing: 0.05rem;
        font-size: 1.05rem;

        :hover {
          background-color: #14cc83;
          cursor: pointer;
        }
      }
    }
  }
`;

const ContactPage = () => {
  return (
    <StyledContact>
      <div className="formWrap">
        <div className="theForm">
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </p>
          <p>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="7" cols="40" />
          </p>
          <p>
            <button>Submit</button>
          </p>
        </div>
      </div>
    </StyledContact>
  );
};

export default ContactPage;
