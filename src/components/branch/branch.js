import React from 'react'
import PropTypes from 'prop-types'
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
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid #ddd;
  flex-grow: 0;
  background: ${props => props.active ? '#8BFF8B' : 'none'};
  width: ${props => props.leaf ? '100%' : '35%'};
  cursor: ${props => props.leaf ? 'pointer' : 'normal'};
  transition: background .4s;
  
  &:hover {
    background: ${props => props.leaf ? (props.active ? '#82f082' : '#fafafa') : ""}
    transition: background .1s;
  }
`

const Children = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: stretch;
  width: 100%;
`

const Branch = ({leaf, name, children, active, onClick}) => {
  if (active === undefined) console.log(name, leaf)
  return (
    <Wrapper onClick={onClick}>
      <Name active={active} leaf={leaf}>{name}</Name>
      {children && <Children>{children}</Children>}
    </Wrapper>
  )
}

Branch.propTypes = {
  leaf: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.array,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}


export { Branch }
export default Branch