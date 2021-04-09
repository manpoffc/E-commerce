const Filter = () => {
    return (
        <div className='p-5'>
            <div className='flex justify-between p-4'>
              <select className='outline-none rounded-full text-gray-800  text-sm p-1 px-2   bg-gray-100'>
              <option value='featured'>Featured</option>
              <option value='lth'>Low to High</option>
              <option value='htl'>High to Low</option>
              <option value='new'>New</option>
              </select>
              <a href="/" className='text-sm'>Filter</a>  
            </div>
        </div>
    )
}

export default Filter
