import {SearchIcon, StarIcon, ShoppingCartIcon , MenuIcon } from '@heroicons/react/solid';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center p-5 shadow-sm bg-gray-100'>
            <MenuIcon className='h-6 w-6 text-gray-800 cursor-pointer' />
            <a  className='pl-8 flex items-center'>
           Re<span className='bg-red-600 py-3 ml-1 w-1 mr-1 rounded shadow  '></span><span className='uppercase font-extralight'>Sneak</span>
           </a>
           <div>
           <ul className='flex space-x-3 flex-grow'>
           <li>
           <SearchIcon className='h-4 w-4 text-gray-800' />
           </li>
           
           <li>
            <StarIcon className='w-4 h-4 text-yellow-400' />
           </li>
           
           <li>
            <ShoppingCartIcon className='h-4 w-4 text-gray-800' />
           </li>
           </ul>
           </div>
        </nav>
    )
}

export default Header
