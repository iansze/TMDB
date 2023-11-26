import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (modal) {
      modal.showModal();

      return () => {
        modal.close();
      };
    }
  }, []);

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <dialog className="fixed z-20 mx-auto w-3/4 justify-between" ref={dialog}>
      {children}
    </dialog>,
    modalRoot,
  );
}
