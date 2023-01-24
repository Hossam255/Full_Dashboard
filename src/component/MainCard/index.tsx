import Styles from "./MainCard.module.scss";
import React from "react";
import Card from "react-bootstrap/Card";

export type MainCardProps = {
  className?: string;
  img?: string;
  overlay?: React.ReactNode;
  head?: React.ReactNode;
  headClassName?: string;
  children: React.ReactNode;
  bodyClassName?: string;
  rounded?: boolean;
  bordered?: boolean;
  hasHoverEffect?: boolean;
};

const MainCard = React.forwardRef(
  (
    {
      className,
      head,
      headClassName,
      children,
      bodyClassName,
      rounded,
      bordered,
    }: MainCardProps,
    ref: React.Ref<any>
  ) => (
    <>
      <Card
        className={`border ${rounded ? "rounded-4" : ""}  ${className ?? ""}`}
      >
        {head && (
          <Card.Body className={`${headClassName ?? ""}`}>{head}</Card.Body>
        )}
        <Card.Body className={`${bodyClassName ?? ""}`}>{children}</Card.Body>
      </Card>
    </>
  )
);

MainCard.displayName = "MainCard";
export default MainCard;
