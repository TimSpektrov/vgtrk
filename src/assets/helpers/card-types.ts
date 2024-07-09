export interface IFormInput {
  label: string,
  formId: string,
  placeholder: string,
  value: string,
  errors: string[] | string | null,
}
export interface IProps {
  [key: string]: string
}