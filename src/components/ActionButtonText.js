import React from 'react';
import { Text } from 'rebass';
import styled from 'styled-components';
import ActionButton from './ActionButton';

const ActionButtonText = styled(props => (
  <Text
    as="span"
    fontFamily="sans"
    fontSize={[1, 1, 2]}
    fontWeight="bold"
    lineHeight="body"
    mt={[2, 2, 0]}
    p={[0, 0, 3]}
    textAlign="center"
    {...props}
  />
))`
  text-transform: capitalize;

  ${p => p.theme.media.desktop`
    background: ${p => p.theme.colors[p.color][0]};
    color: ${p => p.theme.colors.buttonText};
    display: block;
    height: 70px;
    margin-bottom: -8px;
    ${p => (p.isActive ? 'transform: scale(1.05);' : '')}
    transition: .2s;

    ${ActionButton}:hover & {
      ${p => (p.isActive ? 'transform: none;' : '')}
    }
  `}
`;

export default ActionButtonText;
