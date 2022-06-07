import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonLoaderDetail = props => (
  <>
    <div className="progress lg:h-[6px] h-1">
      <span className="progress-bar"></span>
    </div>

    <div className="hidden lg:block">
      <ContentLoader
        className='w-full h-full'
    // width={700}
    // height={300}
        viewBox="0 0 700 300"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
        {...props}
      >
          <rect x="30" y="5" rx="3" ry="3" width="40" height="15" />
          <rect x="80" y="5" rx="3" ry="3" width="40" height="15" />
          <rect x="140" y="5" rx="3" ry="3" width="40" height="15" />
          <rect x="200" y="5" rx="3" ry="3" width="40" height="15" />
          
          <rect x="30" y="30" rx="3" ry="3" width="150" height="15" />
          <rect x="30" y="50" rx="3" ry="3" width="100" height="10" />
          

          <rect x="30" y="65" rx="0" ry="0" width="1000" height="1" />
          <rect x="30" y="80" rx="0" ry="0" width="200" height="205" />
          {/* <rect x="230" y="42" rx="16" ry="16" width="200" height="216" /> */}
          <rect x="240" y="80" rx="3" ry="3" width="100" height="10" />
          <rect x="240" y="110" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="120" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="130" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="140" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="150" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="160" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="170" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="180" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="190" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="200" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="210" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="220" rx="3" ry="3" width="200" height="5" />
          <rect x="240" y="230" rx="3" ry="3" width="200" height="5" />

          {/* <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
          <rect x="505" y="224" rx="14" ry="14" width="72" height="32" /> */}
          {/* <rect x="450" y="80" rx="5" ry="5" width="231" height="216" /> */}
          <rect x="460" y="80" rx="5" ry="5" width="210" height="1" />
          <rect x="460" y="80" rx="5" ry="5" width="1" height="205" />
          <rect x="669" y="80" rx="5" ry="5" width="1" height="205" />
          <rect x="460" y="285" rx="5" ry="5" width="210" height="1" />
          <rect x="530" y="120" rx="5" ry="5" width="80" height="10" />
          <rect x="470" y="155" rx="5" ry="5" width="80" height="13" />
          <rect x="470" y="180" rx="5" ry="5" width="190" height="30" />

      </ContentLoader>
    </div>
  </>
)

SkeletonLoaderDetail.metadata = {
  name: 'Sridhar Easwaran',
  github: 'sridhareaswaran',
  description: 'Events',
  filename: 'EventsLoader',
}

export default SkeletonLoaderDetail