import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
const minBot = "/bot-zzz.svg";
const maxBot = "/bot-awake.svg";

const StyledBotSection = styled.div`
  /* background-color: #aac9f2; */

  .btnWrapper {
    position: fixed;
    bottom: 85px;
    right: 20%;
  }

  .botWrapper {
    position: fixed;
    bottom: 50px;
    right: 1%;
  }
`;

const Chatbot = () => {
  const [sleep, setSleep] = useState(true);
  const [talking, setTalking] = useState(false);

  if (!sleep && talking) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = function () {
      console.log("Speech Recognition started");
    };

    recognition.onresult = function () {
      console.log("eventot e ", event);
    };
    recognition.start();
  }

  return (
    <StyledBotSection>
      {!sleep && (
        <div className="btnWrapper">
          <button className="btn" onClick={() => setTalking(true)}>
            Talk to me
          </button>
        </div>
      )}
      <div className="botWrapper" onClick={() => setSleep(!sleep)}>
        {sleep ? (
          <Image src={minBot} width={147} height={70} alt="sleepingBot-image" />
        ) : (
          <Image src={maxBot} width={147} height={166} alt="awakenBot-image" />
        )}
      </div>
    </StyledBotSection>
  );
};

export default Chatbot;
