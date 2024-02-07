import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, BottomSheetUI } from './components';
import type { ComponentPropsWithoutRef } from 'react';

interface BottomSheetProps
  extends ComponentPropsWithoutRef<typeof BottomSheetUI>,
    Omit<ComponentPropsWithoutRef<typeof Backdrop>, 'children'> {
  /** `Dialog` 열기 여부 */
  open: boolean;
  /** 스크롤 가능 여부 */
  scrollRock?: boolean;
}

const BottomSheet = ({ open, onCloseBackdrop, scrollRock = true, ...rest }: BottomSheetProps) => {
  useEffect(() => {
    if (!scrollRock) {
      return;
    }

    if (open) {
      document.body.setAttribute('style', 'overflow:hidden');
    } else {
      document.body.setAttribute('style', 'overflow:auto');
    }
  }, [open, scrollRock]);

  if (!open) {
    return null;
  }

  return createPortal(
    <Backdrop onCloseBackdrop={onCloseBackdrop}>
      <BottomSheetUI {...rest} />
    </Backdrop>,
    createBackdrop({ name: 'bottom-sheet' })
  );
};

type CreateBackdropParams = {
  /** `Backdrop` id */
  name: string;
};

const createBackdrop = ({ name }: CreateBackdropParams) => {
  const id = `${name}-backdrop`;
  let backdropElement = document.getElementById(id);
  const rightRootElement = document.getElementById('right-root');

  if (!backdropElement && rightRootElement) {
    backdropElement = document.createElement('div');
    backdropElement.setAttribute('id', id);
    rightRootElement.appendChild(backdropElement);
  }

  return backdropElement as HTMLElement;
};

export default BottomSheet;
