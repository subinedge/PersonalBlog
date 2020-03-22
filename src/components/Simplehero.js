import React from 'react'

const Simplehero = ({title, info, children}) => {
  return (
    <header className="defaultHero">
      {children}
    </header>
  )
}

export default Simplehero