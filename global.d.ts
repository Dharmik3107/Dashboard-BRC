declare module "*.png" {
    const value: string;
    export = value;
}
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "react-datepicker"
declare module "react-big-calendar"
declare module "moment"