import React from "react";
import { Label } from "../../atoms/label";
import { DropdownContainer } from "./styles";
import { Option } from "../../atoms/option";

interface DropdownProps {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  label?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  label,
}) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <DropdownContainer onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </DropdownContainer>
    </div>
  );
};
