export const EditItemForm = ({
  item,
  closeForm,
}: {
  item: any;
  closeForm: any;
}) => {
  return (
    <>
      <div
        onClick={closeForm}
        className='z-40 absolute top-0 left-0 h-full w-full bg-slate-900/20'
      ></div>
      <form className='border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white z-50 p-6 rounded-lg flex flex-col gap-4 shadow-2xl'>
        <div className='flex justify-end'>
          <button
            onClick={closeForm}
            className='bg-red-600 w-6 h-6 text-white rounded-full'
          >
            X
          </button>
        </div>
        <div className='flex flex-col'>
          <input type='text' value={item.name} className='text-lg' />
        </div>
        <div>
          <label>Size: </label>
          <input type='text' value={item.size} />
        </div>
        <div>
          <label>Quantity: </label>
          <input type='text' value={item.quantity} />
        </div>
        <button
          type='submit'
          className='bg-green-600 w-full rounded-xl py-2 text-white'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default EditItemForm;
