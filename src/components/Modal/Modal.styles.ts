import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled(Dialog.Content)`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  max-width: 35rem;
  width: 85%;
  max-height: 85%;
  position: relative;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border: none;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    border: none;
    border-radius: 4px;
    width: 28px;
    height: 28px;
    padding: 0;
    font-size: 14px;
    cursor: pointer;
    color: white;
  }
`;

