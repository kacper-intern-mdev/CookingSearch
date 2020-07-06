import React from 'react';
import styled, { keyframes } from 'styled-components';

const bouncingBlock = keyframes`
    from {
        width: 0%;
    }
    50% {
        width: 50%;
    }
    to {
        width: 0%;
    }
`

const Bouncer = styled.div`
    display: inline-block;    
    animation: ${bouncingBlock} 3s linear infinite;
    background-color: rgba(255,255,255,0.2);
    height: 2px;
`

export default Bouncer;