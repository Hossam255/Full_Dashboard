import Styles from "./dropDown.module.scss";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
export type DropDownProps = {
  className?: string;
  options: Array<{ text: string; eventKey: number }>;
  title?: string;
};

const DropDown = React.forwardRef(
  (
    { className, options, title }: DropDownProps,
    ref: React.Ref<HTMLHeadingElement>
  ) => (
    <>
      <Dropdown>
        <Dropdown.Toggle
          className={`${Styles["drop"]}`}
          id="dropdown-custom-components"
        >
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu className={`${Styles["menu"]}`}>
          {options.map((option, i) => (
            <Dropdown.Item key={i} eventKey={option.eventKey}>
              {option.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
);

DropDown.displayName = "DropDown";
export default DropDown;
