import * as React from 'react';

interface IProps {
  loading: boolean;
}

const withLoader = <P extends object>(
  Component: React.ComponentType<P>
): React.FunctionComponent<P & IProps> => ({ loading, ...props }: IProps) =>
  loading ? (
    <div className="loader-overlay">
      <div className="loader-circle-wrap">
        <div className="loader-circle" />
      </div>
    </div>
  ) : (
    <Component {...props as P} />
  );

export default withLoader;