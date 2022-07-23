export interface IComponentPropsInputs {
  id: string;
  text: string;
  disabled: boolean;
  visible: boolean;
  config: {
    type: string;
    maxLength: number;
    step: number;
    background: string;
    text: string;
    size: string;
  }
  option?: any;
}
