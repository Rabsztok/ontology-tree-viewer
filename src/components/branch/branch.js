import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  border-bottom: ${props => props.theme.border};
  width: 100%;
  
  &:nth-last-child(1) {
    border-bottom: none;
  }
`

const Name = styled.div`
  padding: ${props => props.theme.cellPadding};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: ${props => props.theme.border};
  flex-grow: 0;
  background: ${props => props.active ? props.theme.activeColor : 'none'};
  width: 35%;
  transition: background .4s;
`

const Children = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: stretch;
  width: 100%;
  border-right: 1px solid #ddd;
`

const Branch = ({leaf, name, children, active, onClick}) => {
  if (active === undefined) console.log(name, leaf)
  return (
    <Wrapper onClick={onClick}>
      <Name active={active} leaf={leaf}>{name}</Name>
      <Children>{children}</Children>
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