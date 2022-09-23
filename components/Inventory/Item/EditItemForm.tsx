import ItemForm from '../../Form/ItemForm/ItemForm';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import Modal from '../../Modal/Modal';

const updateItem = async (item: any) => {
  const response = await fetch(`/api/items/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

const deleteItem = async (id: number) => {
  const response = await fetch(`/api/items/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id }),
  });
  const data = await response.json();
  return data;
};

export const EditItemForm = ({
  item,
  closeForm,
}: {
  item: any;
  closeForm: any;
}) => {
  const queryClient = useQueryClient();
  const addNewItemMutation = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });
  const deleteItemMutation = useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(['items']);
    },
  });

  const handleSubmit = (values: any) => {
    const formData = {
      id: item.id,
      name: values.name
        .trim()
        .split(' ')
        .map((word: any) => word[0].toUpperCase() + word.slice(1))
        .join(' '),
      size: Number(values.size),
      quantity: Number(values.quantity),
      location: values.location.trim(),
      unitSize: values.unitSize,
      unitQuantity: values.unitQuantity,
    };
    addNewItemMutation.mutate(formData);
    closeForm();
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteItemMutation.mutate(item.id);
    closeForm();
  };

  return (
    <Modal handleClose={closeForm} title='Edit item form' className=' '>
      <ItemForm initialValues={item} id={item.id} onSubmitForm={handleSubmit} />

      <form onSubmit={handleDelete} className='mt-4'>
        <button
          type='submit'
          className='bg-red-600 hover:bg-red-700 w-full rounded-xl py-2 text-white '
        >
          Delete
        </button>
      </form>
    </Modal>
  );
};

export default EditItemForm;
