import Image from 'next/image'

// @ts-ignore
export default function ProjectCard({ props }) {
  console.log(props);

  return (
    <div className='bg-white p-4 rounded w-1/5'>
      {/* <Image src={props.logo} alt={props.key} height={300} /> */}
      <div>
        <h4 className='text-xl text-mirage-dark'>
          {props.name}
        </h4>

      </div>

    </div>
  )
}
