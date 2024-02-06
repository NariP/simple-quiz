import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

interface PortalProps {
  id: 'cta' | 'topNav';
  children?: ReactNode;
}

const Portal = ({ id, children }: PortalProps) => {
  const [presenter, setPresenter] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = document.getElementById(`portal-${id}`);
    setPresenter(el);
  }, []);

  if (!presenter) {
    return null;
  }

  return createPortal(children, presenter);
};

export default Portal;
