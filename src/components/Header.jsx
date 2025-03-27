import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user , isSignedIn}=useUser();
  return (
    <div className='flex , justify-between items-center p-5 shadow-sm'>
        <Link to='/'>
            <img src="/logo.svg" width={150} height={100}/>
        </Link>
        <ul className='md:flex gap-16 hidden'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
        </ul>
        {isSignedIn?
            <div className='flex gap-5 items-center'>
                <UserButton/>
                <Link to={'/profile'}>
                    <Button>Submit Listing</Button>
                </Link>
            </div>
            :
            <Button>Submit Listing</Button>
        }
    </div>
  )
}

export default Header