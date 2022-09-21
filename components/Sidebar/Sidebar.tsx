import { useState } from 'react';

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

  const handleToggleNamepsace = () => {
    setPickingNamespace(!pickingNamespace);
  };

  const handlePickingNamespace = (namespace: any) => {
    setActiveNamespace(namespace);
    setPickingNamespace(false);
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
                <li className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white'>
                  + Site
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
