import * as React from "react";

// See the blog post about this pattern at
// https://chrisfrew.in/blog/react-with-typescript-optional-props-with-default-values/

// Required props
interface IFancyTitleRequiredProps {
  title: string;
}

// Optional props
interface IFancyTitleOptionalProps {
  color: string;
  fontSize: number;
}

// Combine required and optional props to build the full prop interface
interface IFancyTitleProps
  extends IFancyTitleRequiredProps,
    IFancyTitleOptionalProps {}

// Use the optional prop interface to define the default props
const defaultProps: IFancyTitleOptionalProps = {
  color: "red",
  fontSize: 40,
};

// Use the full props within the actual component
const FancyTitle = (props: IFancyTitleProps) => {
  const { title, color, fontSize } = props;
  return <h1 style={{ color, fontSize }}>{title}</h1>;
};

// Be sure to set the default props
FancyTitle.defaultProps = defaultProps;

export default FancyTitle;
