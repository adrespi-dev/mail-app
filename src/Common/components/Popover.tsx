import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Styled from '../Styled';
import classNames from 'classnames';

interface Props {
  to: HTMLElement;
  isOpen: boolean;
  onOpenChanged: (open: boolean) => void;
}

const PopoverFixedContainer = Styled('div', ({ theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  fontFamily: theme.fontFamilies.primary,
  color: theme.colors.text,
}));

const PopoverWrapper = Styled('div', ({ theme, top, left }) => ({
  position: 'fixed',
  top: top + 8,
  left,
  minWidth: '90px',
  border: `1px solid ${theme.colors.border}`,
  backgroundColor: theme.colors.modalBg,
  transform: 'scale(.01)',
  transformOrigin: 'top center',
  opacity: 0,
  transition: '0.2s linear',

  '&.showing': {
    opacity: 1,
    transform: 'scale(1)',
  },
}));

const modalRoot = document.getElementById('modal-root')!;

const Popover: React.FC<Props> = ({ to, children, isOpen, onOpenChanged }) => {
  const [isRendered, setRendered] = useState(isOpen);
  const [showAnim, setShowAnim] = useState(isOpen);

  const [elPosition, setPosition] = useState<DOMRect | null>(null);
  const [ownWidth, setOwnWidth] = useState<number>(0);

  const onClick = useCallback(
    (e: any) => {
      onOpenChanged(true);
      setPosition(to.getBoundingClientRect());
    },
    [to, onOpenChanged, setPosition],
  );

  const hidePopover = useCallback(() => {
    onOpenChanged(false);
  }, [onOpenChanged]);

  useEffect(() => {
    if (isOpen) {
      setRendered(isOpen);
      setTimeout(() => {
        setShowAnim(isOpen);
      }, 10);
    } else {
      setShowAnim(isOpen);
      setTimeout(() => {
        setRendered(isOpen);
      }, 250);
    }
  }, [isOpen]);

  useEffect(() => {
    if (to) {
      to.addEventListener('click', onClick);
    }

    return () => {
      if (to) {
        to.removeEventListener('click', onClick);
      }
    };
  }, [isOpen, to, onClick]);

  const setRef = useCallback(
    (ref: any) => {
      if (ref) {
        if (!ownWidth) {
          const newWidth = ref.clientWidth;
          setOwnWidth(newWidth);
        }
      }
    },
    [ownWidth, setOwnWidth],
  );

  let content = <></>;
  if (isRendered && elPosition) {
    const calculatedLeft = elPosition!.left - ownWidth / 2 + to.clientWidth / 2;

    const popupClassName = classNames({
      showing: isRendered && showAnim && ownWidth && calculatedLeft,
    });

    content = (
      <PopoverFixedContainer onClick={hidePopover}>
        <PopoverWrapper
          className={popupClassName}
          ref={(ref: any) => setRef(ref)}
          minWidth={to.clientWidth}
          top={elPosition?.bottom}
          left={calculatedLeft}
        >
          {children}
        </PopoverWrapper>
      </PopoverFixedContainer>
    );
  }

  return !isRendered ? <></> : createPortal(content, modalRoot);
};

export default Popover;
