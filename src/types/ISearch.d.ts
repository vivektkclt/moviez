export interface ISearch {
  placeholder?: string;
  onChangeText: (text: string) => void;
  onEndEditing: () => void;
  value?: string;
}
