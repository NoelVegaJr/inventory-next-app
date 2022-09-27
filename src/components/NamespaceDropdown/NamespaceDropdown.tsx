import { useState, useEffect } from 'react';
import NewNamespaceButton from './NewNamespaceButton';

const NamespaceDropdown = ({
  namespaces,
  setActiveNamespace,
}: {
  namespaces: any;
  setActiveNamespace: any;
}) => {
  console.log(namespaces);
  const [expandDropdown, setExpandDropdown] = useState(false);
  const [selectedNamespace, setSelectedNamespace] = useState(namespaces[0]);
  const [newNamespace, setNewNamespace] = useState(false);

  const handleToggleDropdown = () => {
    setExpandDropdown(!expandDropdown);
    setNewNamespace(false);
  };
  const handleNamespacePick = (namespace: any) => {
    setActiveNamespace(namespace);
    setSelectedNamespace(namespace);
    setExpandDropdown(false);
  };

  let options;
  if (namespaces) {
    options = namespaces.map((n: any) => {
      const option = { id: n.id, value: n.name };
      return option;
    });
  }

  return (
    <>
      {namespaces && (
        <div
          onClick={handleToggleDropdown}
          className='flex justify-between gap-2 items-center w-full  px-4 py-4 border-y border-y-slate-600   cursor-pointer'
        >
          <div className='flex gap-1'>
            <div className='p-1 rounded hover:bg-slate-900'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`w-4 h-4 stroke-slate-200 fill-slate-200 ${
                  expandDropdown && 'rotate-90'
                } transition-all duration-300`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>

            <p className='text-white'>{selectedNamespace.name}</p>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              console.log('settings');
            }}
            className='p-1 rounded hover:bg-slate-900'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 stroke-slate-200'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </div>
        </div>
      )}
      {/* {expandDropdown && ( */}
      <ul
        className={`cursor-pointer bg-slate-800   text-sm  text-slate-100 ${
          expandDropdown ? 'max-h-fit' : ' h-0 overflow-hidden'
        } transition-all ease-in-out duration-700`}
      >
        {namespaces.map((n: any) => {
          if (n.id != selectedNamespace.id) {
            return (
              <li
                onClick={() => handleNamespacePick(n)}
                key={n.id}
                className={`hover:bg-slate-900/90 hover:text-white p-2 px-6 `}
              >
                # {n.name}
              </li>
            );
          }
        })}
        <NewNamespaceButton
          setNewNamespace={setNewNamespace}
          newNamespace={newNamespace}
        />
      </ul>
      {/* )} */}
    </>
  );
};

export default NamespaceDropdown;
