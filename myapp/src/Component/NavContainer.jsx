import React from 'react'
import baby from '../assets/baby.webp'

const NavContainer = () => {
    return (
        <div>
            <div class='flex justify-center m-20'>

                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full md:w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-112 md:h-96 md:w-96 md:rounded-none md:rounded-l-lg" src={baby} alt=""></img>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Hey Mothers</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This is your current stage of your baby</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavContainer
