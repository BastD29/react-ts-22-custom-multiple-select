import { SelectOption } from "../../../models/Select";
import styles from "./OptionBadge.module.css";

interface OptionBadgeProps {
  v: SelectOption;
  selectOption: (option: SelectOption) => void;
}

export default function OptionBadge({ v, selectOption }: OptionBadgeProps) {
  return (
    <button
      key={v.value}
      onClick={(e) => {
        e.stopPropagation();
        selectOption(v);
      }}
      className={styles["option-badge"]}
    >
      {v.label}
      <span className={styles["remove-btn"]}>&times;</span>
    </button>
  );
}
