import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder12: "rounded-radius12" };
const variants = { FillRedA200: "bg-red_A200 text-white_A700" };
const sizes = {
  sm: "pl-[12px] py-[15px]",
  md: "p-[17px]",
  lg: "px-[14px] py-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder12"]),
  variant: PropTypes.oneOf(["FillRedA200"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder12",
  variant: "FillRedA200",
  size: "md",
};

export { Button };
