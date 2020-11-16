import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const BlueCheckbox = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[700],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    
    checkedA: true,
    checkedB: false,
    checkedF: false,
    checkedG: true,
    checkedH: false,
    checkedI: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <div>
        <FormGroup row className="selectionrow">
        <FormControlLabel
            control={<BlueCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            label="Percentage"
        />
        <FormControlLabel
            control={<BlueCheckbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
            label="Bedrag"
        />
        </FormGroup><br></br>
        <FormGroup row className="selectionrow">
        <FormControlLabel
            control={<BlueCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="Vanaf aantal stuks"
        />
        <FormControlLabel
            control={<BlueCheckbox checked={state.checkedH} onChange={handleChange} name="checkedH" />}
            label="Per aantal stuks"
        />
        </FormGroup>
        <FormGroup row className="selectionrow">
        <FormControlLabel
            control={<BlueCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
            label="Vanaf bepaald bedrag"
        />
        <FormControlLabel
            control={<BlueCheckbox checked={state.checkedI} onChange={handleChange} name="checkedI" />}
            label="Per bepaald bedrag"
        />
        </FormGroup>
    </div>
  );
}