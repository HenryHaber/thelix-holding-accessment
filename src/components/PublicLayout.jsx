import Breadcrumb from './Breadcrumb'

export default function PublicLayout ({
                                        children,
                                        breadcrumb,
                                        breadcrumbTitle,
                                      }) {
  return (
      <>
        <div className='flex flex-col gap-6 '>
          <Breadcrumb
              breadcrumb={breadcrumb}
              title={breadcrumbTitle}
          />
          {children}
        </div>
      </>
  )
}