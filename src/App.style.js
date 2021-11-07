import styled from 'styled-components';
import ChatBot from 'react-simple-chatbot';

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

    > .itYrWC {
      visibility: hidden;
      
      :after {
        content:'Chat';
        background: #6E48AA;
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
      height: 85vh;
      > .jwHqZn {
        > .jEeqIW {
          background: #6E48AA;
        }
        > .erOoyR {
          background: #6E48AA;
        }
      }
      & > div > ul > li > button {
        background: #6E48AA;        
      }
    }

    > .eSbvKF {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      margin: 25px;
    }
  }
`;