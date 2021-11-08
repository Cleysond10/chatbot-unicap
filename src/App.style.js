import styled from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import image from '../src/assets/unicap.png';

export const ChatBotWrapper = styled(ChatBot)`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  > * {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: auto;
    width: auto;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;

    

    > .itYrWC {
      visibility: hidden;
      
      :after {
        content:'Chatbot  sobre Estágio da UNICAP';
        background: #690013;
        visibility: visible;
        display: flex;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        height: 40px;
        font-size: 20px;
        padding: 20px 0 0 20px;
      }
    }

    > .bWzQeJ {
      height: 82vh;
      
      & > div > ul > li > button {
        background: #811419;
      }      
    }
    
    .bWzQeJ > div div:nth-child(2) {
      background: #9d7628;        
    }
    .bWzQeJ > div .iwuaA:nth-child(2) {
      background: #fff;
    }

    > .eSbvKF {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      margin: 5px;
    }
  }
`;