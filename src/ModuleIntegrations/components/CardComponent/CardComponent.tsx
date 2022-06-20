import React, { FC } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';

import styles from './CardComponent.module.css';
import bgImg from '../../../components/backgrounds/particles.png';

interface CardComponentProps {
  iconSrc: string;
  title: string;
  paragraph: string;
}

const CardComponent: FC<CardComponentProps> = ({
  iconSrc,
  title,
  paragraph,
}) => {
  const card = (
    <div
      style={{ backgroundImage: `url(${bgImg})`, backgroundColor: '#f5f3ff' }}
    >
      <CardHeader
        avatar={
          <Avatar>
            <div style={{ backgroundColor: 'white', padding: '10px' }}>
              <img src={iconSrc} alt="" />
            </div>
          </Avatar>
        }
        title={<h2 className={styles.cardH2}>{title}</h2>}
      />
      <CardContent>
        <p className={styles.cardP}>{paragraph}</p>
      </CardContent>
      <CardActions>
        <div className={styles.buttonContent}>
          <p className={styles.buttonText}>Ver en detalle</p>
          <KeyboardArrowDown className={styles.buttonIcon} />
        </div>
      </CardActions>
    </div>
  );

  return (
    <Box sx={{ width: '100%', border: 0 }} className={styles.card}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default CardComponent;
