import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  color: #09f;
  text-decoration: none;
  padding: 5px;
  font-weight: ${(props) => (props.varaint === 'bold' ? 'bold' : 'regular')};

  &:hover {
    border-bottom: 2px solid #09f;
  }
`
