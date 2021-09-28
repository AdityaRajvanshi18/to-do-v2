import React from 'react'
import { ViewGridIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <div className="flex flex-row bg-blue-500 h-14 items-center">
            <div className="h-10 w-10 m-2">
                <ViewGridIcon className="text-white"/>
            </div>
            <div>
                <h1 className="font-semibold text-white m-2 text-xl">To Do</h1>
            </div>
        </div>
    )
}

export default Header
