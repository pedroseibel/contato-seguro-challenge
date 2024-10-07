import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { StyledOverlay, StyledContent, StyledButton } from './Alert.styles';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ message, type, isOpen, onClose, onConfirm }) => {
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onClose}>
      <AlertDialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <AlertDialog.Title>
            {type === 'success' ? 'Sucesso' : 'Confirmação'}
          </AlertDialog.Title>
          <AlertDialog.Description>
            {message}
          </AlertDialog.Description>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: 25 }}>
          {onConfirm && (
              <AlertDialog.Action asChild>
                <StyledButton variant="confirm" onClick={() => { onConfirm(); onClose(); }}>Confirmar</StyledButton>
              </AlertDialog.Action>
            )}
            <AlertDialog.Cancel asChild>
              <StyledButton variant="cancel" onClick={onClose}>{onConfirm ? 'Cancelar' : 'Fechar'}</StyledButton>
            </AlertDialog.Cancel>
          </div>
        </StyledContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};