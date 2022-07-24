import { IComponentPropsInputs } from "src/interface/inputs";

export const inputTwoPart: IComponentPropsInputs[] = [
  {
    id: 'name',
    text: "Nome",
    disabled: false,
    visible: true,
    defaultValue: "",
    config: {
      type: 'text',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    }
  },
  {
    id: 'typePacking',
    text: "Caixa | UND",
    disabled: false,
    visible: true,
    defaultValue: "",
    config: {
      type: 'select',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    },
    option: [
      {id: "caixa", text: "Caixa"},
      {id: "separado", text: "Separado"},
    ],
  },
  // {
  //   id: 'type',
  //   text: "Tipo",
  //   disabled: false,
  //   visible: false,
  //   defaultValue: "", 
  //   config: {
  //     type: 'text',
  //     maxLength: 8,
  //     step: 1,
  //     background: "bg-bgButtonOrange",
  //     text: "",
  //     size: "text-md"
  //   }
  // },
]

export const inputThreePart: IComponentPropsInputs[] = [
  {
    id: 'ml',
    text: "ML",
    disabled: false,
    visible: true,
    defaultValue: "",
    config: {
      type: 'text',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    }
  },
  {
    id: 'qtdBoxes',
    text: "QTD em caixa",
    disabled: false,
    visible: true,
    defaultValue: "",
    config: {
      type: 'number',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    }
  },
  {
    id: 'addQtd',
    text: "Adicionar QTD",
    disabled: false,
    visible: true,
    defaultValue: "",
    config: {
      type: 'number',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    }
  },
  {
    id: 'value',
    text: "Valor Unitário",
    disabled: false,
    visible: true,
    defaultValue: "",
    config: {
      type: 'text',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    }
  },
]

export const inputFourPart: IComponentPropsInputs[] = [
  {
    id: 'qtdSave',
    text: "Nome",
    disabled: true,
    visible: true,
    defaultValue: "",
    config: {
      type: 'number',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    }
  },
  {
    id: 'valueUnitary',
    text: "Tipo",
    disabled: true,
    visible: true,
    defaultValue: "",
    config: {
      type: 'text',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    }
  },
  {
    id: 'amount',
    text: "Código de barra",
    disabled: true,
    visible: true,
    defaultValue: "",
    config: {
      type: 'text',
      maxLength: 8,
      step: 1,
      background: "bg-bgButtonOrange",
      text: "",
      size: "text-md"
    }
  },
]