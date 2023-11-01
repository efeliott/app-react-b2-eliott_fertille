import styled from '@emotion/styled'

const Button = styled.button<{ isDisabled ? : boolean}>`
  background-color: red;
  opacity: ${({isDisabled}) => isDisabled ? 0.5 : 1};
  user-select: ${({isDisabled}) => isDisabled ? "none" : "initiale"};
  cursor: ${({isDisabled}) => isDisabled ? "pointer" : "unset"};
  padding: 0.5 rem;
`

function ButtonPrimary()
{
    <Button isDisabled></Button>
}

export default Button