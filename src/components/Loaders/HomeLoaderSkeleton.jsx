import React from 'react'
import ContentLoader from 'react-content-loader'

const HomeLoaderSkeleton = props => (
  <>
    <div className="progress lg:h-[6px] h-1">
      <span className="progress-bar animatedHome"></span>
    </div>

    <div className="w-full lg:min-h-full min-h-screen">
      <ContentLoader
        className='w-full min-h-full hidden lg:block'
        viewBox="0 0 700 300"
        // height={1000}
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
        {...props}
      >
          <rect x="0" y="0" rx="0" ry="0" width="1000" height="140" />

          <rect x="30" y="180" rx="3" ry="3" width="120" height="35" />
          <rect x="160" y="180" rx="3" ry="3" width="120" height="35" />
          <rect x="290" y="180" rx="3" ry="3" width="120" height="35" />
          <rect x="420" y="180" rx="3" ry="3" width="120" height="35" />
          <rect x="550" y="180" rx="3" ry="3" width="120" height="35" />

          <rect x="30" y="250" rx="3" ry="3" width="120" height="500" />
          <rect x="160" y="250" rx="3" ry="3" width="120" height="500" />
          <rect x="290" y="250" rx="3" ry="3" width="120" height="500" />
          <rect x="420" y="250" rx="3" ry="3" width="120" height="500" />
          <rect x="550" y="250" rx="3" ry="3" width="120" height="500" />
      </ContentLoader>
      
    </div>
  </>
)

export default HomeLoaderSkeleton