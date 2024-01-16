'use client';

import { Button } from '@/components/ui/buttoncn';
import { Modal } from '@/components/ui/modal';
import { useEffect, useState } from 'react';

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AddClientModal: React.FC<AddClientModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal title="" description="" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col">
        New Client
        <input type="" />
      </div>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="secondary" onClick={onClose}>
          Add Client
        </Button>
      </div>
    </Modal>
  );
};
