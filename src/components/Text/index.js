import React from "react";
const variantClasses = {
  h1: "font-normal md:text-[48px] sm:text-[48px] text-[66px]",
  h2: "font-normal sm:text-[38px] md:text-[44px] text-[52px]",
  h3: "font-normal sm:text-[35px] md:text-[41px] text-[45px]",
  h4: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  h5: "font-bold sm:text-[17px] md:text-[19px] text-[21px]",
  h6: "text-[18px]",
  body1: "font-normal text-[16px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
