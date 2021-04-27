import React from "react";

const Button = props =>
    (<button {...props} className={"text-white font-medium border-2 border-primary-900  bg-primary-900 px-6 lg:px-8 py-2 text-sm rounded-lg whitespace-nowrap focus:outline-none hover:bg-primary hover:text-white-900 hover:border-primary transition " + props.className}></button>);


export default Button