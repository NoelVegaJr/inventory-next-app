import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const addNewNamespace = async (name: string) => {
  const response = await fetch('/api/namespaces', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  });
  const data = response.json();
  return data;
};

const NewNamespaceButton = ({
  setNewNamespace,
  newNamespace,
}: {
  setNewNamespace: any;
  newNamespace: any;
}) => {
  const [newNamespaceName, setNewNamespaceName] = useState('');
  const queryClient = useQueryClient();

  const addNewNamespaceMutation = useMutation(addNewNamespace, {
    onSuccess: () => {
      queryClient.invalidateQueries(['namespaces']);
    },
  });
  const handleNewNamespaceSubmit = async (e: any) => {
    e.preventDefault();
    console.log(newNamespaceName);
    addNewNamespaceMutation.mutate(newNamespaceName);
    setNewNamespace(false);
    setNewNamespaceName('');
  };
  return (
    <li className=' bg-green-600 hover:bg-green-700 relative grid grid-rows-1 grid-cols-1 rounded overflow-hidden'>
      <button
        onClick={() => setNewNamespace(true)}
        className={`px-4 p-2 text-left h-full w-full text-white col-span-1 row-span-1 z-50${
          newNamespace ? 'hidden' : ' block'
        }`}
      >
        + Site
      </button>

      <form
        onSubmit={handleNewNamespaceSubmit}
        className={` h-full w-full  ${
          newNamespace ? 'opacity-100' : ' opacity-0'
        }  transition-all duration-700 col-span-1 row-span-1 absolute  grid p-1 `}
      >
        <input
          type='text'
          className={` outline-none border rounded text-black`}
          placeholder='Enter namespace'
          value={newNamespaceName}
          onChange={(e) => setNewNamespaceName(e.target.value)}
        />
      </form>
    </li>
  );
};

export default NewNamespaceButton;
