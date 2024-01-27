import { SocialLinkProps } from '@/types'
import Link from 'next/link'

const SocialLInk = ({title, icon, path}: SocialLinkProps) => {
  return (
    <>
      {path &&
        <Link href={path} target='_blank'
          className='ease-linear duration-300 hover:drop-shadow-[2px_2px_1px_#EBEFF5]'>
          {icon}
        </Link>
      }
    </>
  )
}

export default SocialLInk