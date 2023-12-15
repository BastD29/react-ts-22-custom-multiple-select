import { SelectOption } from "../../../models/Select";

import styles from "./Options.module.css";

interface OptionProps {
  isOpen: boolean;
  options: SelectOption[];
  isOptionSelected: (option: SelectOption) => boolean;
  highlightedIndex: number;
  selectOption: (option: SelectOption) => void;
  setIsOpen: (isOpen: boolean) => void;
  setHighlightedIndex: (index: number) => void;
}

export default function Options({
  isOpen,
  options,
  isOptionSelected,
  highlightedIndex,
  selectOption,
  setIsOpen,
  setHighlightedIndex,
}: OptionProps) {
  return (
    <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
      {options.map((option, index) => (
        <li
          key={option.value}
          className={`${styles.option} ${
            isOptionSelected(option) ? styles.selected : ""
          } ${index === highlightedIndex ? styles.highlighted : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            selectOption(option);
            setIsOpen(false);
          }}
          onMouseEnter={() => setHighlightedIndex(index)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}
