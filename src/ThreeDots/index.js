import React from 'react'
import ContentLoader from 'react-content-loader'

const ThreeDots = props => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width='100%'
    backgroundColor={'#333'}
    foregroundColor={'#999'}
    style={{ 
        zIndex: 20,
        position: 'fixed',
        top: '50%',
        left: 0
    }}
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
)

ThreeDots.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
}

export { ThreeDots };