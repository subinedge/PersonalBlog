import React from 'react'
import styled from 'styled-components'

const Title = ({title, subtitle}) => {
  return (
    <TitleWrapper>
      <h3>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h3>
    </TitleWrapper>
  )
}


const TitleWrapper = styled.div`
  text-transform:uppercase;
  font-size:2rem;
  margin:2rem;

  h3 {
    text-align:center;
    letter-spacing:5px;
    color:var(--primaryColor);
  }

  .title {
    color:var(--mainBlack);
  }

  span {
    display:block;
  }

  @media (min-width:576px){
    span {
      display:inline-block;
      margin:0 0.35rem;
    }
  }

`

export default Title
