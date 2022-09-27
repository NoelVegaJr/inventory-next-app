const Sidebar = ({
  show,
  close,
  children,
}: {
  show: boolean;
  close: any;
  children: any;
}) => {
  return (
    <>
      <div
        onClick={() => close()}
        className={` -translate-x-full fixed top-20 left-0 h-screen w-full bg-black/10 ease-in-out z-40 md:hidden duration-500 ${
          show && 'translate-x-0'
        } `}
      />
      <div
        className={`md:block w-3/4 bg-slate-800 ${
          show ? 'fixed h-full z-50' : 'fixed h-full z-50 -translate-x-full '
        } md:static md:w-80 md:translate-x-0 ease-in-out duration-700 md:transition-none`}
      >
        {children}
      </div>
    </>
  );
};

export default Sidebar;
