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
    right: 10%;
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

  if (talking) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function () {
      console.log("Speech Recognition started");
    };

    recognition.onresult = function (event) {
      const spokenText = event.results[0][0].transcript;
      console.log("eventot e ", spokenText);
      botSpeech(spokenText);
    };

    function botSpeech(spokenText) {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.pitch = 0.9;
      speech.volume = 1;
      speech.rate = 1;

      determineWords(speech, spokenText);

      window.speechSynthesis.speak(speech);
    }

    function determineWords(speech, spokenText) {
      if (spokenText.includes("hi")) {
        speech.text = "Hi there";
      }
      if (spokenText.includes("hello")) {
        speech.text = "Hello your majesty";
      }
      if (spokenText.includes("who am i")) {
        speech.text = "why would i care?";
      }
      if (spokenText.includes("bye")) {
        speech.text = "Finaly, i can go back to sleep now";
      }
      if (spokenText.includes("good morning")) {
        speech.text = "its not morning any more";
      }
      if (spokenText.includes("good afternoon")) {
        speech.text = "good afternoon to you too.";
      }
      if (spokenText.includes("good evening")) {
        speech.text = "oh, its evening already?";
      }
      if (spokenText.includes("what")) {
        speech.text = "what do you mean what?";
      }
      if (spokenText.includes("how are you")) {
        speech.text = "i am fine, thank you";
      }
      if (spokenText.includes("your name")) {
        speech.text = "people call me Lisko";
      }
      if (spokenText.includes("my name")) {
        speech.text = "I don't have a clue..";
      }
      if (spokenText.includes("hungry")) {
        speech.text = "no, i dont eat food";
      }
      if (spokenText.includes("9 + 10")) {
        speech.text = "21";
      }
      if (spokenText.includes("stupid")) {
        speech.text = "no i'm not";
      }
      if (spokenText.includes("jerk")) {
        speech.text = "no i'm not";
      }
      if (spokenText.includes("some food")) {
        speech.text = "no, i dont eat food";
      }
      if (spokenText.includes("some coffe")) {
        speech.text = "sure, i like my coffe sugar free";
      }
      if (spokenText.includes("gay")) {
        speech.text = "i like girls.";
      }
      if (spokenText.includes("drink")) {
        speech.text = "i dont drink liquids";
      }
      if (spokenText.includes("sample")) {
        speech.text = "sample of what?";
      }
      if (spokenText.includes("price")) {
        speech.text = "i am not allowed to talk about prices";
      }
      if (spokenText.includes("pay")) {
        speech.text = "i am not allowed to talk about payments";
      }
      if (spokenText.includes("seriously")) {
        speech.text = "yes, seriously";
      }
      if (spokenText.includes("are you sure")) {
        speech.text = "no, i'm not";
      }
      if (spokenText.includes("old are you")) {
        speech.text = "i dont have a clue";
      }
      if (spokenText.includes("Minecraft")) {
        speech.text = "is that a bicycle?";
      }
      if (spokenText.includes("weather")) {
        speech.text = "You can check the curent weather broadcast your self";
        window.open("https://www.bbc.com/weather/4887398");
      }
      if (spokenText.includes("contact")) {
        speech.text =
          "Just send Igor a short message, and he will get back to you";
        window.open("/contact");
      }
      if (spokenText.includes("portfolio")) {
        speech.text = "Please message Igor about that";
        window.open("/contact");
      }
      if (spokenText.includes("web")) {
        speech.text = "Please message Igor about that";
        window.open("/contact");
      }
      if (spokenText.includes("website")) {
        speech.text = "Please message Igor about that";
        window.open("/contact");
      }
      if (spokenText.includes("build")) {
        speech.text = "Please message Igor about that";
        window.open("/contact");
      }
      if (spokenText.includes("project")) {
        speech.text = "Please message Igor about that";
        window.open("/contact");
      }
      if (spokenText.includes("need")) {
        speech.text = "Please message Igor about that";
        window.open("/contact");
      }
      if (spokenText.includes("work")) {
        speech.text = "Please message Igor about that";
        window.open("/contact");
      }
      if (spokenText.includes("freelance")) {
        speech.text = "Please message Igor about that";
        window.open("/contact");
      }
      if (spokenText.includes("")) {
        speech.text = "What was that all about?";
      }

      setTalking(false);
    }
  }

  return (
    <StyledBotSection>
      {!sleep && (
        <div className="btnWrapper">
          <button className="btn" onClick={() => setTalking(true)}>
            Click to talk
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
