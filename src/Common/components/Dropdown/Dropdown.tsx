import React, { useState, useEffect, useRef } from 'react';
import Popover from '../Popover';
import Styled from '../../Styled';
import classNames from 'classnames';
import { isDarkTheme } from '../../utils';

interface Props {
  value: any;
  onValueChange?: (item: any) => void;
  valueField: string;
  displayField?: string;
  items: any[];
  headerTemplate: (item: any) => JSX.Element;
  itemTemplate: (item: any) => JSX.Element;
}

const ListItem = Styled('div', ({ theme }) => ({
  padding: '8px 8px;',
  cursor: 'pointer',
  fontSize: theme.fontSizes.standard,
  color: isDarkTheme(theme) ? theme.colors.altText : theme.colors.text,
  '&.selected': {
    color: isDarkTheme(theme) ? theme.colors.text : theme.colors.primary,
  },
  '&:hover': {
    backgroundColor: theme.colors.selected,
  },
}));

const DropdownHeader = Styled('div', ({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: isDarkTheme(theme) ? theme.colors.altText : theme.colors.text,
}));

const Caret = Styled('div', ({ theme }) => ({
  marginLeft: 4,
  border: '4px solid transparent',
  borderTopColor: 'currentColor',
  marginTop: '.3125em',
  alignSelf: 'center',
  flexShrink: 0,
}));

const Dropdown: React.FC<Props> = ({
  value,
  onValueChange,
  valueField,
  displayField,
  items,
  headerTemplate,
  itemTemplate,
}) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  let dropdownHeaderRef = useRef<any>(null);

  useEffect(() => {
    if (value) {
      setSelectedItem(items.find((i) => i[valueField] === value));
    }
  }, [value, items, valueField]);

  displayField = displayField || valueField;

  return (
    <div className="dropdown">
      <DropdownHeader ref={dropdownHeaderRef}>
        {selectedItem && headerTemplate(selectedItem)}
        <Caret />
      </DropdownHeader>
      <Popover isOpen={isOpen} onOpenChanged={setIsOpen} to={dropdownHeaderRef.current}>
        {items.map((i) => {
          const className = classNames({
            selected: selectedItem && selectedItem[valueField] === i[valueField],
          });
          return (
            <ListItem
              className={className}
              key={i[valueField]}
              onClick={() => onValueChange && onValueChange(i[valueField])}
            >
              {itemTemplate(i)}
            </ListItem>
          );
        })}
      </Popover>
    </div>
  );
};

export default Dropdown;
