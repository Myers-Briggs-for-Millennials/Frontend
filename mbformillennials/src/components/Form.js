import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    width: 500 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;
    console.log(value);
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];


const PrettoSlider = withStyles({
  root: {
    color: '#6558f5',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#6558f5',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);




export default function CustomizedSlider(props) {
    const {setCurrentSlider, currentSlider, setValues, id, values} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography id="discrete-slider" gutterBottom>Answer</Typography>
      <PrettoSlider defaultValue={3}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={ (e, val) => {
            setCurrentSlider(val); 
            let newValues = [...values];
            newValues[id] = val;
            setValues(newValues);
            console.log(newValues);} }
        value={values[id]}
        step={1}
        marks
        min={1}
        max={5} />
      <div className={classes.margin} />


      
    
    </div>

  );
}