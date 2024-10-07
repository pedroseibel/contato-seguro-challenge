import * as Dialog from "@radix-ui/react-dialog";
import { ModalOverlay, ModalContent, ModalHeader } from "./Modal.styles";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Dialog.Title>{title}</Dialog.Title>
            <button onClick={onClose}>✖</button>
          </ModalHeader>
          {children}
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
