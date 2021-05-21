import React from 'react';
import styled from 'styled-components';


const Heading = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Button = styled.button`
  border: 0;
  background: transparent;
  color: #4F4F4F;
  cursor: pointer;
`

const Header = ({getRandom}) => {
    return (
        <>
            <Heading>
                <Button onClick={getRandom}>Random <i className='fas fa-redo'/></Button>
            </Heading>
        </>
    )
}

export default Header
