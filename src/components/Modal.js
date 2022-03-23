import styled from "styled-components";
import { MdClose } from "react-icons/md";
import FeaturesOne from "../images/photo4.jpg";
import { useEffect, useRef, useCallback } from "react";
import { Button } from "./Button";

const Background = styled.div`
  width: 110%;
  height: 100%;
//   background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

`;

const ModalWrapper = styled.div`
top: -50%;
width: 800px;
  text-align: center;
  padding: 1.5rem 1rem;
  // height: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 99;
  border-radius: 10px;
  border: #12b886 5px solid;

  @media screen and (max-width: 768px) {
    width: 85vw;
    // height: 55vh;
    padding: 1.4rem 1.4rem;

    margin-left: -10%;
  }

`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding: 1rem;
  
  p {
    // margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, modalHeading, modalParagraphOne, modalParagraphTwo, modalBenefit1, modalBenefit2, modalBenefit3 }) => {
    const modalRef = useRef();


    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress]);



  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              {/* <h1>{modalHeading}</h1> */}
              <p>{modalParagraphOne} </p>
              {/* <p>{modalParagraphTwo}</p> */}
   

              <Button to='/booking' primary="true"> Book Now</Button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close Modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
