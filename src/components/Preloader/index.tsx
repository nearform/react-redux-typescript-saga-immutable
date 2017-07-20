import * as React from 'react';

import Text from './Text';

export interface PreloaderProps {
  text?: string
};

const defaultProps: Partial<PreloaderProps> = {
  text: 'Loading...'
};

export const Preloader: React.StatelessComponent<PreloaderProps> = ({ text }) => {
  return (
    <Text>{text}</Text>
  );
};

Preloader.defaultProps = defaultProps;

export default Preloader;
