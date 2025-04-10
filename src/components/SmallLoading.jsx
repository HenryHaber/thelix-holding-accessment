const SmallLoading = ({text = 'Processing'}) => {
  return (
    <div className='text-center flex justify-center w-max items-center flex-row gap-2'>
      <div className='small-loading'></div>
      {text}
    </div>
  )
}
export default SmallLoading
