import React from 'react'

const Hero = () => {
    return (
        <div className='w-full bg-black flex justify-center items-center  h-screen '>
            <div className="text-center">
                <p className='text-green-500'>
                    GROWING WITH DATA ANALYTICS
                </p>
                <p className='text-white text-3xl dark:text-gray-400 md:text-5xl mt-3'>
                    Grow With Data
                </p>
                <p className='text-white text-3xl mt-3'>
                    <p className='text-white text-2xl mt-3'>
                        Fast ,Flexible Financing for
                    </p>
                </p>
                <p className='text-gray-500  dark:text-gray-400 '>
                    Monitor Your Data analytics to increase revenue for SASS
                </p>

                <button type="button" className="text-white mt-3  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-10 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>


            </div>
        </div>

    )
}

export default Hero
