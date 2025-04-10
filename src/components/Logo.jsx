import Image from 'next/image'
import Link  from 'next/link';


export default function Logo({height, width}) {
  


  return (
      <>
        <Link className='bg-white h-14 w-14  justify-center items-center flex rounded-full p-1' href="/">
            <Image src={'/images/logo.svg'} alt={'logo' }
             className={' grid object-contain  '}
             width = {width}
             quality={99}
             height= {height}/>
        </Link>
      </>
  )
}