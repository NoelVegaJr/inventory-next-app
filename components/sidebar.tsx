import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const getNamespaces = async () => {
  const response = await fetch('/api/namespaces');
  const data = await response.json();
  return data;
};

const Sidebar = ({ setActiveNamespace }: { setActiveNamespace: any }) => {
  const [pickingNamespace, setPickingNamespace] = useState(false);
  const [namespaceTitle, setNamespaceTitle] = useState('');
  const {
    isLoading,
    error,
    data: namespaces,
  } = useQuery(['namespaces'], getNamespaces);

  useEffect(() => {
    if (!isLoading && namespaces) {
      setNamespaceTitle(namespaces[0].name);
      setActiveNamespace(namespaces[0].id);
    }
  }, [isLoading, namespaces]);

  const handleToggleNamepsace = () => {
    setPickingNamespace(!pickingNamespace);
  };

  const handlePickingNamespace = (namespace: any) => {
    setNamespaceTitle(namespace.name);
    setActiveNamespace(namespace.id);
    setPickingNamespace(false);
  };

  if (isLoading) {
    console.log('loading');
  } else if (error) {
    console.log('error');
  } else {
    console.log(namespaces);
  }

  return (
    <div className='hidden md:block h-full md:w-80 md:flex-col bg-slate-800'>
      <button
        onClick={handleToggleNamepsace}
        className='flex gap-2 items-center w-full  px-4 py-4 border-y border-y-slate-600  hover:bg-slate-900 cursor-pointer'
      >
        {namespaces && (
          <>
            <p className='text-white'>{namespaceTitle}</p>
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
            className='fixed top-0 left-0 h-screen w-full  z-30'
          ></div>
          <div className='relative w-full '>
            <ul className='absolute left-5 z-40 w-full border-green-600 bg-neutral-200 rounded overflow-hidden cursor-pointer shadow-lg'>
              {namespaces.map((n: any) => {
                return (
                  <li key={n.id} className=' hover:bg-sky-700 hover:text-white'>
                    <button
                      onClick={() => handlePickingNamespace(n)}
                      className='p-4 text-left h-full w-full'
                    >
                      {n.name}
                    </button>
                  </li>
                );
              })}
              <li className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white'>
                + Site
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
