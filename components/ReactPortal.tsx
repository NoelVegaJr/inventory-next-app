import { createPortal } from 'react-dom';

const ReactPortal = ({ children, id }: { children: any; id: string }) => {
  return createPortal(children, document.getElementById(id) as HTMLElement);
};

export default ReactPortal;
