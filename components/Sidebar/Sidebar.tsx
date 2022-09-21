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

const Sidebar = ({
  namespaces,
  setActiveNamespace,
  activeNamespace,
  show,
  toggle,
}: {
  namespaces: any;
  setActiveNamespace: any;
  activeNamespace: any;
  show: boolean;
  toggle: any;
}) => {
  const [pickingNamespace, setPickingNamespace] = useState(false);
  const [newNamespace, setNewNamespace] = useState(false);
  const [newNamespaceName, setNewNamespaceName] = useState('');
  const queryClient = useQueryClient();
  const addNewNamespaceMutation = useMutation(addNewNamespace, {
    onSuccess: () => {
      queryClient.invalidateQueries(['namespaces']);
    },
  });

  const handleToggleNamepsace = () => {
    setPickingNamespace(!pickingNamespace);
  };

  const handlePickingNamespace = (namespace: any) => {
    setActiveNamespace(namespace);
    setPickingNamespace(false);
  };

  const handleNewNamespaceSubmit = async (e: any) => {
    e.preventDefault();
    console.log(newNamespaceName);
    addNewNamespaceMutation.mutate(newNamespaceName);
    setNewNamespace(false);
    setNewNamespaceName('');
  };

  return (
    <>
      <div
        onClick={() => toggle()}
        className={` -translate-x-full fixed top-20 left-0 h-screen w-full bg-black/10 ease-in-out z-40 md:hidden duration-500 ${
          show && 'translate-x-0'
        } `}
      />
      <div
        className={`md:block w-52 bg-slate-900 ${
          show ? 'fixed h-full z-50' : 'fixed h-full z-50 -translate-x-full '
        } md:static md:w-72 md:translate-x-0 ease-in-out duration-700 md:transition-none`}
      >
        <button
          onClick={handleToggleNamepsace}
          className='flex gap-2 items-center w-full  px-4 py-4 border-y border-y-slate-600  hover:bg-slate-900 cursor-pointer'
        >
          {namespaces && (
            <>
              <p className='text-white'>{activeNamespace.name}</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4 text-slate-300 '
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </>
          )}
        </button>
        {pickingNamespace && (
          <>
            <div
              onClick={handleToggleNamepsace}
              className='fixed top-0 left-0  h-screen w-screen  z-40 bg-black/20'
            ></div>
            <div className='relative w-full z-50'>
              <ul className='absolute left-5 z-50 w-full border-green-600 bg-neutral-200 rounded overflow-hidden cursor-pointer shadow-lg'>
                {namespaces.map((n: any) => {
                  return (
                    <li
                      key={n.id}
                      className=' hover:bg-sky-700 hover:text-white'
                    >
                      <button
                        onClick={() => handlePickingNamespace(n)}
                        className='p-4 text-left h-full w-full'
                      >
                        {n.name}
                      </button>
                    </li>
                  );
                })}
                <li className='p-2 bg-green-600 hover:bg-green-700 relative grid grid-rows-1 grid-cols-1'>
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
                    className={`p-2 bg-green-600 h-full w-full  ${
                      newNamespace ? 'opacity-100' : ' opacity-0'
                    }  transition-all duration-700 col-span-1 row-span-1 absolute`}
                  >
                    <input
                      type='text'
                      className={`w-full outline-none border rounded p-2`}
                      placeholder='Enter namespace'
                      value={newNamespaceName}
                      onChange={(e) => setNewNamespaceName(e.target.value)}
                    />
                  </form>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
