import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  border-bottom: 1px solid #ddd;
  width: 100%;
  
  &:nth-last-child(1) {
    border-bottom: none;
  }
  
  &:only-child {
    border-bottom: none;
    height: 100%;
  }
`

const Name = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid #ddd;
  flex-grow: 0;
  background: ${props => props.active ? '#8BFF8B' : 'none'};
  width: ${props => props.leaf ? '100%' : '35%'};
  cursor: ${props => props.leaf ? 'pointer' : 'normal'}
`

const Children = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: stretch;
  width: 100%;
`

const Branch = ({leaf, name, children, active, onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <Name active={active} leaf={leaf}>{name}</Name>
      {children && <Children>{children}</Children>}
    </Wrapper>
  )
}

export { Branch }
export default Branch