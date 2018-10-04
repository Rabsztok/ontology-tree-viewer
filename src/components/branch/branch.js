import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { observer } from 'mobx-react'

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
  background: ${props => (props.active ? props.theme.activeColor : 'none')};
  width: 35%;
  transition: background 0.3s;
`

const Children = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: stretch;
  width: 100%;
  border-right: 1px solid #ddd;
`

/** Part of ontology tree that has children. */
const Branch = ({ name, children, active }) => (
  <Wrapper>
    <Name active={active}>{name}</Name>
    <Children>{children}</Children>
  </Wrapper>
)

Branch.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array,
  active: PropTypes.bool.isRequired
}

export { Branch }
export default observer(Branch)
