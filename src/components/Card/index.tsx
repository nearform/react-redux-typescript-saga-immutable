import * as React from 'react';

import ListItem from '../ListItem';
import Title from './Title';
import Label from './Label';

export interface CardProps {
  title?: string,
  label?: string
};

const defaultProps: Partial<CardProps> = {
  title: 'Default title',
  label: '-'
};

export const Card: React.StatelessComponent<CardProps> = ({ title, label }) => {
  return (
    <ListItem>
      <Title>{title}</Title>
      <Label>({label})</Label>
    </ListItem>
  );
};

Card.defaultProps = defaultProps;

export default Card;
