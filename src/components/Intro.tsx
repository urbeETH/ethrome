export default function Intro() {
  return (
    <div
      className='h-auto md:h-screen relative bg-[#191818] overflow-hidden pt-24 pb-48 md:py-0'
      id='intro'
    >
      <div className='flex flex-col items-center h-full px-8 space-y-12 justify-evenly md:space-y-0 md:px-0'>
        <h1 className='max-w-4xl text-4xl text-white md:text-6xl'>
        The 1st ETHalian Hackathon{' '}
          <span className='font-black text-rome-yellow'>crafted by builders, for builders</span>
        </h1>
        <div className='flex space-x-0 md:space-x-24'>
          <img src='/colosseum.svg' className='hidden lg:block' />
          <div className='flex flex-col max-w-xs'>
            <div className='relative'>
              <img src='/splash_yellow.png' />
              <img src='/icon-lecture.svg' className='absolute bottom-2 left-4' />
            </div>
            <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
            Unite with like-minded visionaries to empower{' '}
              <span className='font-bold'>Governance & Privacy-preserving</span> technologies.
            </p>
            <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
            Address the most pressing <span className='font-bold'>challenges in Web3</span> while getting inspired by the historic splendour of Rome
            </p>
          </div>
        </div>
      </div>
      <div className='absolute right-12 bottom-12 md:bottom-12 md:right-24'>
        <img className='absolute -top-8 -left-8 -scale-x-100 md:transform-none max-w-xl md:max-w-sm md:-top-24 md:-left-8' src="/splash_gray.png" alt="" />
        <div className='relative'>
          <div className='flex items-center justify-end space-x-2'>
            <p className='font-semibold text-white'>HOSTED BY</p>
            <img src='/urbe_logo_white.png' />
          </div>
          <p className='text-white font-redhat opacity-60 max-w-[280px] text-md text-right'>
            A Rome-based community to foster bottom-up innovation and cultivate human-composability.
          </p>
        </div>
      </div>
    </div>
  )
}
