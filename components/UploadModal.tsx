"use client";

import { FieldValues, useForm } from 'react-hook-form';

import Modal from './Modal'
import useUploadModal from '@/hooks/useUploadModal';

function UploadModal() {
    const uploadModal = useUploadModal();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        }
    })

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit = () => {
        // Upload to SUpaBase
    }

  return (
    <Modal
        title="Add a song"
        description="Upload an mp3 file"
        isOpen= {uploadModal.isOpen}
        onChange={onChange}
    >
        <form
            onSubmit={handleSubmit(onSubmit)}
        >

        </form>
    </Modal>
  );
}

export default UploadModal