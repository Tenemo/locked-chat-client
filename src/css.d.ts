declare module '*.scss' {
    const css: { [key: string]: string };
    export default css;
}
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
