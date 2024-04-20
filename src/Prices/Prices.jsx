import React from 'react'

const Prices = () => {
    const data = [{
        title: "Single User1",
        subtitle: "$149",
        imageUrl: "https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/single.png?raw=true"

    }, {
        title: "Single User2",
        subtitle: "$150",
        imageUrl: "https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/single.png?raw=true"

    }, {
        title: "Single User3",
        subtitle: "$153",
        imageUrl: "https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/single.png?raw=true"

    }];
    return (
        <>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {/* Map through the cardData array */}
                {data.map((card, index) => (

                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                            <p className='py-2 border-b mx-8'>1 Granted User</p>
                            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                        </div>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                    </div>


                ))}
            </div>
        </>
    )


}

export default Prices
