import { UserButton, useUser, SignInButton } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleSubmitListing = () => {
        if (isSignedIn) {
            navigate('/profile'); // Go to profile if logged in
        } else {
            setShowModal(true); // Show the modal if not signed in
        }
    };

    return (
        <div className='flex justify-between items-center p-5 shadow-sm'>
            <Link to='/'>
                <img src="/logo.svg" width={150} height={100} alt="Logo" />
            </Link>
            <ul className='md:flex gap-16 hidden'>
                <li>
                    <Link to='/' className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/search' className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>
                        Search
                    </Link>
                </li>
                <li>
                    <Link to='/search?cars=New&make=BMW' className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>
                        New
                    </Link>
                </li>
                <li>
                    <Link to='/' className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>
                        Preowned
                    </Link>
                </li>
            </ul>
            <div className='flex gap-5 items-center'>
                {isSignedIn && <UserButton />}
                <Button onClick={handleSubmitListing}>Submit Listing</Button>
            </div>

            {/* Sign-In Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-semibold mb-3">🚀 Unlock the Full Experience!</h2>
                        <p className="mb-4">Sign in now to submit your listing and connect with buyers instantly.</p>
                        <SignInButton mode='modal'>
                            <Button className="bg-blue-600 text-white px-5 py-2 rounded-md">Sign In</Button>
                        </SignInButton>
                        <button 
                            className="block mt-3 text-gray-600 hover:text-gray-900"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
