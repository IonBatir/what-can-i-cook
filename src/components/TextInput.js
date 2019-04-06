import React from "react";
import { Item, Input, Icon, Label } from "native-base";

export default ({ error, label, ...inputProps }) => (
  <Item error={error} floatingLabel underline>
    <Label>{label}</Label>
    <Input {...inputProps} />
    {error && <Icon name="close-circle" />}
  </Item>
);
