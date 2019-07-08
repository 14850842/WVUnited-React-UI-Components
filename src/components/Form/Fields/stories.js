import {storiesOf} from "@storybook/react";
import React from "react";

import {
  selectFieldProps,
  selectFieldErrorProps,
  textFieldProps,
  textFieldErrorProps,
  radioFieldProps,
  radioFieldErrorProps,
  checkboxFieldProps,
  checkboxFieldErrorProps,
  numberFieldProps,
  numberFieldErrorProps,
  textareaFieldProps,
  textareaFieldErrorProps,
  dollarHandlesFieldProps,
} from "../FormGrid/stories/data";

import FormField from "../FormField";
import FieldText from "./FieldText";
import FieldRadio from "./FieldRadio";
import FieldSelect from "./FieldSelect";
import FieldCheckbox from "./FieldCheckbox";
import FieldDollarHandles from "./FieldDollarHandles";

export const storiesFormFields = storiesOf('Form fields', module);

storiesFormFields
  .add('Select', () => (
    <FieldSelect { ...selectFieldProps} />
  ))
  .add('Select with validation error', () => (
    <FormField { ...selectFieldErrorProps} />
  ))
  .add('Text', () => (
    <FieldText { ...textFieldProps} />
  ))
  .add('Text with validation error', () => (
    <FormField { ...textFieldErrorProps} />
  ))
  .add('Radio', () => (
    <FieldRadio { ...radioFieldProps } />
  ))
  .add('Radio with validation error', () => (
    <FormField { ...radioFieldErrorProps } />
  ))
  .add('Dollar Handles', () => (
    <FieldDollarHandles { ...dollarHandlesFieldProps } />
  ))
  .add('Checkbox', () => (
    <FieldCheckbox { ...checkboxFieldProps } />
  ))
  .add('Checkbox with validation error', () => (
    <FormField { ...checkboxFieldErrorProps } />
  ))
  .add('Number', () => (
    <FieldText { ...numberFieldProps } />
  ))
  .add('Number with validation error', () => (
    <FormField { ...numberFieldErrorProps } />
  ))
  .add('Text area', () => (
    <FormField { ...textareaFieldProps } />
  ))
  .add('Text area with validation error', () => (
    <FormField { ...textareaFieldErrorProps } />
  ));