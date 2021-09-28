import React from 'react';

import { ChevronRightIcon, ChevronLeftIcon, PlusIcon } from '@heroicons/react/solid';
import { HomeIcon } from '@heroicons/react/outline';

function Sidebar() {
    return (
        <div className="flex flex-col items-center w-14 bg-gray-100 h-screen">
            <div className="mt-3">
                <ChevronRightIcon className="h-8 text-blue-500 cursor-pointer transition duration-100 ease-out hover:bg-white"/>
            </div>
            <div className="mt-3">
                <HomeIcon className="h-8 text-blue-500 cursor-pointer transition duration-100 ease-out hover:bg-white"/>
            </div>
            <div className="mt-2 bg-gray-300 h-1 w-3/4 rounded-full">
            </div>
            <div className="mt-3">
                <PlusIcon className="h-8 text-blue-500 cursor-pointer transition duration-100 ease-out hover:bg-white"/>
            </div>
            
        </div>
    )
}

export default Sidebar
