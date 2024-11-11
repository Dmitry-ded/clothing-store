import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-60" y="-165" rx="0" ry="0" width="500" height="400" /> 
    <rect x="11" y="245" rx="0" ry="0" width="385" height="16" /> 
    <rect x="88" y="274" rx="0" ry="0" width="236" height="14" /> 
    <rect x="173" y="296" rx="0" ry="0" width="62" height="34" />
  </ContentLoader>

)
  


export default Skeleton;
