import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import ItemForm from '../../Form/ItemForm/ItemForm';
import Modal from '../../Modal/Modal';

const addNewItem = async (item: any) => {
  const response = await fetch('/api/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
};

const NewItemForm = ({
  namespaceId,
  className,
  closeForm,
}: {
  namespaceId: any;
  className: string;
  closeForm: any;
}) => {
  const queryClient = useQueryClient();
  const addNewItemMutation = useMutation(addNewItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });

  const handleSubmit = async (values: any) => {
    const formData = {
      name: values.name
        .trim()
        .split(' ')
        .map((word: string) => word[0].toUpperCase() + word.slice(1))
        .join(' '),
      size: Number(values.size),
      unitSize: values.unitSize,
      quantity: Number(values.quantity),
      unitQuantity: values.unitQuantity,
      location: values.location.trim(),
      namespaceId: namespaceId,
    };

    addNewItemMutation.mutate(formData);
    closeForm();
  };
  return (
    <Modal handleClose={closeForm} title='New item form'>
      <div className=' '>
        <ItemForm
          initialValues={{
            name: '',
            size: '',
            quantity: '',
            location: '',
            unitSize: '',
            unitQuantity: '',
          }}
          onSubmitForm={handleSubmit}
        />
      </div>
    </Modal>
  );
};

export default NewItemForm;
