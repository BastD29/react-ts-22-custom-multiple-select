import { useEffect, useRef, useState } from "react";

import { SelectOption, SelectProps } from "../../models/Select";

import OptionBadge from "./OptionBadge/OptionBadge";
import Options from "./Options/Options";

import styles from "./Select.module.css";

export default function Select({
  value,
  onChange,
  options,
  multiple,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      console.log("value:", value);

      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  const handler = (e: KeyboardEvent) => {
    if (e.target != containerRef.current) return;
    switch (e.code) {
      case "Enter":
      case "Space":
        setIsOpen((prev) => !prev);
        if (isOpen) selectOption(options[highlightedIndex]);
        break;
      case "ArrowUp":
      case "ArrowDown": {
        if (!isOpen) {
          setIsOpen(true);
          break;
        }

        const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
        if (newValue >= 0 && newValue < options.length) {
          setHighlightedIndex(newValue);
        }
        break;
      }
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  useEffect(() => {
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={styles.container}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.value}>
        {multiple
          ? value.map((v) => (
              <OptionBadge key={v.value} selectOption={selectOption} v={v} />
            ))
          : value?.label}
      </span>
      <button
        className={styles["clear-btn"]}
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <Options
        isOpen={isOpen}
        options={options}
        isOptionSelected={isOptionSelected}
        highlightedIndex={highlightedIndex}
        selectOption={selectOption}
        setIsOpen={setIsOpen}
        setHighlightedIndex={setHighlightedIndex}
      />
    </div>
  );
}
