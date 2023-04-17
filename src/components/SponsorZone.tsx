import React from 'react'

import SponsorCrown from '../images/vector/sponsor_crown.svg'
import Temple from '../images/vector/temple.svg'

export default function SponsorZone() {
  return (
    <div
      className='min-h-screen md:h-auto bg-[#191818] relative pt-8 md:pt-32 pb-48 xl:py-48 pl-0 md:pl-48'
      id='contact'
    >
      <div className='relative flex flex-col items-center justify-center max-w-xl pb-24 space-y-4 md:items-start'>
        <SponsorCrown className='h-[160px] w-[160px]' />
        <h1 className='text-5xl font-bold text-white md:text-7xl'>Sponsor Zone</h1>
        <p className='text-white max-w-xs md:max-w-[385px] text-center md:text-left'>
          Seize the chance to gain exceptional exposure, establish valuable connections, and
          demonstrate your unwavering support for the development of the blockchain space!
        </p>
        <div
          onClick={() => window.open('/SPONSOR_DECK_ETHROME.pdf', '_blank')}
          className='w-40 hover:bg-[#5b0e8b] transition-colors bg-[#8314C7] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium cursor-pointer'
        >
          <p>Sponsor deck</p>
        </div>
        <a
          href='mailto:sponsor@ethrome.org'
          className='text-[#F8FCFC] opacity-60 underline text-md'
        >
          sponsor@ethrome.org
        </a>
      </div>
      <Temple className='absolute bottom-0 right-0 h-[261px] w-[267px] md:h-auto md:w-auto' />
    </div>
  )
}
