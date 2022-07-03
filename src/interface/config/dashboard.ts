export interface IDashboardButton {
  text: string;
  href: string;
  config: {
    maxLength: number;
    step: number;
    background: string;
    text: string;
    size: string;
  }
}
