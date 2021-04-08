import * as Styled from "./searchbar.styled";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useRef } from "react";

iconLibrary.add(faSearch);

interface OwnProps {
  value?: string;
  onChange?: (newValue: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  focus?: boolean;
}

const Searchbar: React.FC<OwnProps> = ({
  value,
  onChange,
  onFocus,
  focus,
  placeholder = "Search for Order",
}) => {
  const onChangeCallback = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange]
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) {
      inputRef?.current?.focus();
    }
  }, [focus, inputRef]);
  return (
    <Styled.SearchBar>
      <Styled.Icon>
        <FontAwesomeIcon icon="search" />
      </Styled.Icon>
      <Styled.Input
        ref={inputRef}
        value={value}
        onChange={onChangeCallback}
        placeholder={placeholder}
        onFocus={onFocus}
      />
    </Styled.SearchBar>
  );
};

export default Searchbar;
