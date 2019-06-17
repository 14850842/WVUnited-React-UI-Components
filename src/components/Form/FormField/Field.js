import React from "react";
import styled from "styled-components";
import globalStyles from "../../../styles/globalStyles";
import {textStyles} from "../../../styles/theme";

export const Field = styled.div`
    display: inline-block;
    margin-bottom: 0;
    color: ${globalStyles.colors.textColor};
    background-color: ${globalStyles.colors.form};
    width: 100%;
    ${textStyles};
`;

export function Label(props) {
  const Label = styled.span`
  // Styles for the subsequent fields.
  &~ select,
  &~ input,
  &~ textarea {
      display: block;
      width: 100%;
      margin-top: 8px;
      margin-bottom: 6px;
      padding: 10px 10px 12px;
      ${textStyles};
      border: 1px solid ${globalStyles.colors.borderColor};
      border-radius: 5px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
      background: ${globalStyles.colors.formBackground};
      box-sizing: border-box;
  }

  &~ select,
  &~ input {
      height: 44px;
  }

  &~ select {
      padding: 10px 0 12px;
  }
  
  &~ textarea {
      width: 100%;
      resize: vertical;
  }
  
 ${props.settings.required && `
      &~ select,
      &~ input {
          color: ${globalStyles.colors.textColor};
      }
      &:after {
          content: "*";
          display: inline-block;
          font-size: ${globalStyles.fontSize};
          color: ${globalStyles.colors.errorColor};
          margin-left: 2px;
          margin-right: 2px;
      }`
    }
    ${props.error && `
            &~ select,
            &~ input,
            &~ textarea {
                border-color: ${globalStyles.colors.errorColor};
            }`
    }`;

  return <Label htmlFor={props.name}>{props.label}</Label>;
}

export const Error = styled.div`
    color: ${globalStyles.colors.errorColor};
`;