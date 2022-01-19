import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
const minBot = "/bot-zzz.svg"; /* width={60} height={68} */
const maxBot = "/bot-awake.svg"; /* width={189} height={166} */

const StyledBotSection = styled.div`
  /* background-color: #aac9f2; */

  .btnWrapper {
    display: flex;
    justify-content: center;
  }

  .botWrapper {
    position: fixed;
    bottom: 50px;
    right: 4%;
  }
`;

const Chatbot = () => {
  const [sleep, setSleep] = useState(true);
  return (
    <StyledBotSection>
      {!sleep && (
        <div className="btnWrapper">
          <button className="btn">Talk to me..</button>
        </div>
      )}
      <div className="botWrapper" onClick={() => setSleep(!sleep)}>
        {sleep ? (
          <Image src={minBot} width={189} height={70} alt="sleepingBot-image" />
        ) : (
          <Image src={maxBot} width={189} height={166} alt="awakenBot-image" />
        )}
      </div>
    </StyledBotSection>
  );
};

export default Chatbot;
