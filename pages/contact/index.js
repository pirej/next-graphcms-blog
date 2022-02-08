import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";

const StyledContact = styled.section`
  display: flex;
  justify-content: center;

  .formWrap {
    width: 25vw;
    margin: 10.4vh 0;
    @media (max-width: 1440px) {
      margin: 10.6vh 0;
      width: 27vw;
    }
    @media (max-width: 1280px) {
      margin: 12.6vh 0;
      width: 32vw;
    }
    @media (max-width: 1024px) {
      margin: 15vh 0;
      width: 41vw;
    }
    @media (max-width: 768px) {
      margin: 10vh 0;
      width: 50vw;
    }
    @media (max-width: 540px) {
      margin: 10vh 0;
      width: 70vw;
    }
    @media (max-width: 411px) {
      width: 90vw;
    }

    .theForm {
      background-color: #d8e1ed;
      padding: 0 9%;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      border: solid thin #b8c7d9;

      .sentSpan {
        color: #3987e5;
        margin-left: 0.5rem;
      }

      label {
        display: block;
        margin-bottom: 0.2em;
        color: #5b718c;
      }
      p {
        width: 100%;
        margin-bottom: 0;
        :last-child {
          margin-bottom: 1.5rem;
        }

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
    }
  }
`;

const ContactPage = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v3ppm0c",
        "template_714rnax",
        form.current,
        "user_L3zOQ1wgPa76HLwa67Rlv"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
        e.target.reset()
      );
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <StyledContact>
        <div className="formWrap">
          <form ref={form} onSubmit={sendEmail} className="theForm">
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" minLength="3" required />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" minLength="7" required />
            </p>
            <p>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                minLength="2"
                maxLength="35"
                required
              />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                minLength="5"
                maxLength="200"
                required
                rows="7"
                cols="40"
              />
            </p>
            <p>
              <button>Submit</button>
              {sent && <span className="sentSpan">Message sent!</span>}
            </p>
          </form>
        </div>
      </StyledContact>
    </>
  );
};

export default ContactPage;
