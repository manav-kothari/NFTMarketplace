import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="object-over w-44 rounded-xl lg:h-96 lg:w-80"
              src="https://pbs.twimg.com/profile_images/1281935909898776577/UYUz6_6E_400x400.jpg"
              alt="home_image"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">
              Anshuman Sharma NFT
            </h1>
            <h2 className="text-xl text-gray-300">
              A collection of 7 FREE NFTs
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              WAGMI
            </span>{' '}
            NFT Market Place
          </h1>
          {/* onClick={() => connectWithMetamask()} */}
          <button
            className="rounded-full bg-rose-400 px-5 py-2 
                text-xs font-bold text-white lg:px-5 lg:py-3"
          >
            {/* {address ? 'Sing Out' : 'Sing In'} */}Sing In
          </button>
        </header>

        <hr className="my-2 border" />
        {/* {address && (
            <p className='text-center text-sm text-rose-400'>
                You're logged in with wallet {address.substring(0,5)}
                ...
                {address.substring(address.length-5)}
            </p>
        )} */}

        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0 ">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Anshuman Sharma WAGMI GANG | NFT Drop
          </h1>

          <p className="pt-2 text-xl text-green-500 ">15 / 21 NFT's claimed</p>
        </div>
        {/* Mint Button */}
        <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
