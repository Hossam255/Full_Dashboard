import Styles from "./titleHeader.module.scss";
import React from "react";

export type TitleHeaderProps = {
  className?: string;
  text: string;
  type: "title" | "subtitle" | "smaller";
};

const TitleHeader = React.forwardRef(
  (
    {
      className,
      text,
      type,
      ...rest
    }: TitleHeaderProps & React.HTMLAttributes<HTMLHeadingElement>,
    ref: React.Ref<HTMLHeadingElement>
  ) => (
    <div className={`d-flex flex-column ${Styles["title-wrapper"]}`}>
      {type === "title" ? (
        <h3
          ref={ref}
          className={`d-flex flex-column ${Styles["titleHeader"]} ${
            className ?? ""
          }`}
          {...rest}
        >
          <div>{text}</div>
        </h3>
      ) : (
        <h5
          ref={ref}
          className={`d-flex flex-column ${
            type === "subtitle"
              ? Styles["subtitleHeader"]
              : Styles["smallertitleHeader"]
          } ${className ?? ""}`}
          {...rest}
        >
          <div>{text}</div>
        </h5>
      )}
    </div>
  )
);

TitleHeader.displayName = "TitleHeader";
export default TitleHeader;
