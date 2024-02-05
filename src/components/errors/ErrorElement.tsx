import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <div>error element</div>
    </div>
  );
};

export default ErrorElement;
