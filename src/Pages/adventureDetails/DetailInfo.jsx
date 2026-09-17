import React from 'react'

export const DetailInfo = ({ pageData }) => {
    let specialInstructions = [
        "Do not touch coral",
        "Do not collect shells or marine life",
        "Use reef-safe sunscreen",
        "Follow the instructor's safety instructions"
    ]
    return (
        <div className='bg-compass-sand py-4 px-5 md:px-8 lg:px-12 flex justify-between'>
            <div className='text-compass-forest space-y-5 w-full'>

                <div className='flex '>
                    <div className='w-full md:w-2/3' >
                        <h1 className='font-extrabold text-3xl text-center sm:text-start'>About this Adventure</h1>
                        <p className='text-lg text-center sm:text-start'>{pageData.shortDescription}</p>
                    </div>
                    {/* <div className='w-full flex items-start py-1 justify-end'><button className='btn bg-compass-forest text-white'>Contact an expert</button></div> */}
                </div>

                <div className='flex flex-col sm:flex-row justify-between'>
                    <ul className='space-y-1.5 font-bold'>
                        <li>Location: <span className='font-normal'>{pageData.location} </span> </li>
                        <li>Duration: <span className='font-normal'>{pageData.duration} </span></li>
                        <li>Max Group Size: <span className='font-normal'>{pageData.maxGroupSize} </span></li>
                        <li>Adventure Level: <span className='font-normal'>{pageData.adventureLevel} </span></li>
                        <li>Adventure Cost: <span className='font-normal'>{pageData.adventureCost} </span></li>
                        <li className='flex gap-6'>Included Items:
                            <ul className='list-disc font-normal'>

                                {/* use map here */}
                                {
                                    pageData.includedItems.map(elements => <li>{elements}</li>)
                                }
                            </ul>
                        </li>
                    </ul>
                    <aside className='flex flex-col gap-4'>

                        <div className='border-2 bg-compass-sand shadow-xl h-full flex flex-col border-compass-mist rounded-2xl p-4.5 py-6 space-y-2.5'>
                            <h1 className='font-bold text-lg'>Eco-Friendly Features</h1>

                            {/* use map here */}
                            <ul className=' font-normal space-y-1.5 flex-1'>

                                {/* use map here */}
                                {
                                    pageData.ecoFriendlyFeatures.map(element => <li> {element}</li> )
                                }
 
                            </ul>
                            <div className='w-full flex items-start py-1 justify-end'><button className='btn bg-compass-forest text-white text-center w-full'>Contact an expert</button></div>
                        </div>
                    </aside>
                </div>



                <div className="rounded-2xl border bg-green-50/90 p-6 shadow-lg border-compass-forest">
                    {/* Header */}
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xl">
                            🌿
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-green-900">
                                Special Instructions
                            </h3>
                            <p className="text-sm text-green-700">
                                Help us protect nature while enjoying your adventure.
                            </p>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="space-y-3">
                        {pageData.specialInstructions.map((instruction, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 rounded-xl bg-compass-sand p-3 shadow   border-2 border-compass-mist "
                            >
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                                    ✓
                                </div>

                                <p className="text-sm leading-6 text-compass-forest">
                                    {instruction}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </div>
    )
}
