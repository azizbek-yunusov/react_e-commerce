import React from 'react'
import ContentLoader from 'react-content-loader'

const ListSkeleton = props => (
  <>
    <div className="progress lg:h-[6px] h-1">
      <span className="progress-bar"></span>
    </div>
    <ContentLoader
      className='w-full h-full'
    // width={700}
    // height={300}
      viewBox="0 0 700 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
    <rect x="30" y="5" rx="3" ry="3" width="300" height="400" />
    <rect x="450" y="5" rx="3" ry="3" width="300" height="400" />
    <rect x="750" y="5" rx="3" ry="3" width="300" height="400" />
    <rect x="1050" y="5" rx="3" ry="3" width="300" height="400" />

    <rect x="30" y="450" rx="3" ry="3" width="300" height="400" />
    <rect x="450" y="450" rx="3" ry="3" width="300" height="400" />
    <rect x="750" y="450" rx="3" ry="3" width="300" height="400" />
    <rect x="1050" y="450" rx="3" ry="3" width="300" height="400" />

    </ContentLoader>
  </>
)


export default ListSkeleton