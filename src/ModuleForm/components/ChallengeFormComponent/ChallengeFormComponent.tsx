import React, { FC } from 'react';
import { useMeasure } from 'react-use';
import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  OutlinedInputProps,
  styled,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import '@material-ui/core/colors';

import PillButtonComponent, {
  PillIcon,
} from '../../../ModuleCommon/components/PillButtonComponent/PillButtonComponent';
import styles from './ChallengeFormComponent.module.css';

// const isEmpty = (value: string) => value.trim() === '';
// const isFiveChars = (value: string) => value.trim().length === 5;

interface ChallengeFormComponentProps {
  onConfirm: () => void;
}

const ChallengeFormComponent: FC<ChallengeFormComponentProps> = (props) => {
  /* const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  }); */

  /* const nameInputRef = React.useRef<HTMLInputElement>(null);
  const streetInputRef = React.useRef<HTMLInputElement>(null);
  const postalCodeInputRef = React.useRef<HTMLInputElement>(null);
  const cityInputRef = React.useRef<HTMLInputElement>(null); */

  const confirmHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    /* const enteredName = nameInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredPostalCode = postalCodeInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;

    const enteredNameIsValid =
      enteredName !== undefined && !isEmpty(enteredName);
    const enteredStreetIsValid =
      enteredStreet !== undefined && !isEmpty(enteredStreet);
    const enteredCityIsValid =
      enteredCity !== undefined && !isEmpty(enteredCity);
    const enteredPostalCodeIsValid =
      enteredPostalCode !== undefined && isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    } */

    props.onConfirm();
  };

  /* const nameControlClasses = `${styles.control} ${
    formInputsValidity.name ? '' : styles.invalid
  }`;
  const streetControlClasses = `${styles.control} ${
    formInputsValidity.street ? '' : styles.invalid
  }`;
  const postalCodeControlClasses = `${styles.control} ${
    formInputsValidity.postalCode ? '' : styles.invalid
  }`;
  const cityControlClasses = `${styles.control} ${
    formInputsValidity.city ? '' : styles.invalid
  }`; */

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const buttonWidth: number = Math.min(244, width);
  const buttonContentWidth: number = Math.min(212, width - 32);
  const containerWidth: string = `${buttonWidth}px`;
  const contentWidth: string = `${buttonContentWidth}px`;

  const CssTextField = styled((props: TextFieldProps) => (
    <TextField
      InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  ))({
    '& label.Mui-focused': {
      color: '#6C30EB',
    },
    '& .MuiFilledInput-root': {
      border: '2px solid #D1CCFF',
      backgroundColor: 'transparent',
      borderRadius: 4,
      color: '#1F0742',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        border: '2px solid #6C30EB',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6C30EB',
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    label: {
      fontSize: theme.typography.pxToRem(11),
      letterSpacing: '0.03333em',
      lineHeight: theme.typography.pxToRem(14),
    },
  }));

  const classes = useStyles();
  return (
    <div ref={ref}>
      <form className={styles.form} onSubmit={confirmHandler}>
        <CssTextField
          className={styles.formInput}
          id="name"
          label="Nombre completo*"
          fullWidth
          variant="filled"
        />
        <CssTextField
          className={styles.formInput}
          id="email"
          label="Email*"
          fullWidth
          variant="filled"
        />
        <CssTextField
          className={styles.formInput}
          id="company"
          label="Empresa*"
          fullWidth
          variant="filled"
        />
        <CssTextField
          className={styles.formInput}
          id="position"
          label="Cargo en la empresa*"
          defaultValue=""
          fullWidth
          variant="filled"
        />
        <CssTextField
          id="message"
          label="Mensaje*"
          defaultValue=""
          multiline
          minRows={3}
          fullWidth
          variant="filled"
        />
        <p className={styles.formLegend}>*Este campo es obligatorio</p>
        <FormControlLabel
          className={styles.formControlLabel}
          control={<Checkbox className={styles.formCheckbox} />}
          label="Acepto que me envíen comunicaciones por parte de Global Sales Partnership*"
          classes={classes}
        />
        <FormControlLabel
          className={styles.formControlLabel}
          control={
            <Checkbox className={styles.formCheckbox} defaultChecked required />
          }
          label="He leído y acepto la política de privacidad*"
          classes={classes}
          /* onChange={handlePrivacyPolicyChange} */
        />
        <div className={styles.actionsDiv}>
          <button type="submit" className={styles.submitBtn}>
            <PillButtonComponent
              containerWidth={containerWidth}
              contentWidth={contentWidth}
              buttonText="Enviar"
              hasIcon={true}
              centerText={true}
              icon={PillIcon.Send}
            />
          </button>
        </div>
        {/* <div className={nameControlClasses}>
        <label htmlFor="name">Nombre completo*</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          placeholder="Nombre completo*"
        />
        {!formInputsValidity.name && (
          <p>Introduzca un nombre válido, por favor.</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div> */}
        {/* <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button className={styles.submit}>Confirm</button>
      </div> */}
      </form>
    </div>
  );
};

export default ChallengeFormComponent;
