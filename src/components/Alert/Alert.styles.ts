import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled } from 'styled-components';

export const StyledOverlay = styled(AlertDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

export const StyledContent = styled(AlertDialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
`;

export const StyledButton = styled.button<{ variant?: 'confirm' | 'cancel' }>`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  color: white;
  background-color: ${props => props.variant === 'confirm' ? 'red' : 'grey'};

  &:hover {
    opacity: 0.8;
  }
`;