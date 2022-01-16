import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";

const StyledContact = styled.section`
  display: flex;
  justify-content: center;

  .formWrap {
    width: 25vw;
    .theForm {
      background-color: #d8e1ed;
      margin-top: 2rem;
      padding: 0 9%;
      /* padding: 0 3rem; */
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      border: solid thin #b8c7d9;

      span {
        color: #fc6565;
      }

      label {
        display: block;
        margin-bottom: 0.2em;
        /* padding: 0 1rem; */
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.data.status == 200) {
        console.log("Success");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <StyledContact>
      <div className="formWrap">
        <form onSubmit={handleSubmit(onSubmitForm)} className="theForm">
          <p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
            />
            <span>
              {errors.name?.type === "required" && "Please type your name"}
            </span>
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                minLength: 8,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
              })}
              name="email"
            />
            <span>
              {errors.email?.type === "minLength" && "Your email is too short"}
            </span>
            <span>
              {errors.email?.type === "pattern" && "Invalid email address"}
            </span>
            <span>
              {errors.email?.type === "required" && "Email is required"}
            </span>
          </p>
          <p>
            <label htmlFor="subject">Subject</label>
            <input type="text" {...register("subject")} name="subject" />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              {...register("message", { maxLength: 1000, minLength: 30 })}
              rows="7"
              cols="40"
            />
            <span>
              {errors.message?.type === "maxLength" &&
                "Your email message should have less than 1000 characters"}
            </span>
            <span>
              {errors.message?.type === "minLength" &&
                "Your email message must be longer than this"}
            </span>
          </p>
          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    </StyledContact>
  );
};

export default ContactPage;
