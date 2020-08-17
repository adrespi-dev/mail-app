import React, { HTMLAttributes, useState, useEffect } from 'react';

// type Props = {};
interface Props {
  value: any;
  onValueChange?: (item: any) => void;
  valueField: string;
  displayField?: string;
  items: any[];
  headerTemplate: (item: any) => JSX.Element;
  children?: any;
}

const Dropdown: React.FC<Props> = ({ value, onValueChange, valueField, items, headerTemplate }) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    if (value) {
      setSelectedItem(items.find((i) => i[valueField] === value));
    }
  }, [value, items, valueField]);

  return <div>{selectedItem && headerTemplate(selectedItem)}</div>;
};

export default Dropdown;
