import { IComponentPropsInputs } from "src/interface/inputs";

export const inputTwoPart: IComponentPropsInputs[] = [
  {
    id: 'name',
    text: "Nome",
    disabled: true,
    visible: true,
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
    id: 'ml',
    text: "ML",
    disabled: true,
    visible: true,
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
    id: 'type',
    text: "Tipo",
    disabled: true,
    visible: true,
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

export const inputThreePart: IComponentPropsInputs[] = [
  {
    id: 'typePacking',
    text: "Caixa | UND",
    disabled: false,
    visible: true,
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
  {
    id: 'qtdBoxes',
    text: "QTD em caixa",
    disabled: false,
    visible: true,
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
    text: "QTD a salvar",
    disabled: true,
    visible: true,
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
    text: "Valor Unitário",
    disabled: true,
    visible: true,
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
    text: "Valor Total",
    disabled: true,
    visible: true,
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