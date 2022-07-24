/// This file is to allow importing JSON files
/// from code,
/// see https://jsonworld.com/demo/how-to-read-local-json-file-in-angular

declare module '*.json' {
  const value: any;
  export default value;
}
