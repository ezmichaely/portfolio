"use client"
import Image from 'next/image'
import { galleryDesigns } from '@/constants'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function ImageGallery() {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 1024: 4}}>
      <Masonry gutter="1.5rem">
        {galleryDesigns.map((image) => (
          <div key={image.key} className='bg-white p-3 rounded'>
            <Image src={image.src} alt={image.key} lazy="true"/>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}
