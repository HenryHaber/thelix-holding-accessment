import Image from 'next/image'
import Link  from 'next/link';


export default function Logo({height, width}) {
  


  return (
      <>
        <Link className=' justify-start mb-10 items-center flex  p-1' href="/dashboard">
            <Image src={'/images/logo.png'} alt={'logo' }
             className={' grid object-contain  '}
             width = {width}
             quality={99}
             height= {height}/>
        </Link>
      </>
  )
}