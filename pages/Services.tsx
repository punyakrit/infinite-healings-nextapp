import Card from '@/components/Card'
import { cardsData } from '@/data'
import React from 'react'

function Services() {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='flex justify-center pt-16 text-2xl font-bold' > Services We Provide</div>
      <div className="flex justify-center px-3">
        <div className="md:flex justify-center flex-wrap gap-8 px-4">
        {cardsData.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              imageUrl={data.imageUrl}
              alt={data.alt}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
