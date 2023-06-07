import PropTypes from 'prop-types';
// @mui
import { Radio, FormControlLabel } from '@mui/material';
import "../../../pages/dashboard/chats.css";

// ----------------------------------------------------------------------

BoxMask.propTypes = {
  value: PropTypes.string,
};

export default function BoxMask({ value }) {
  return (
    <FormControlLabel
    className='non'
      label=""
      value={value}
      control={<Radio sx={{ display: 'none' }} />}
      sx={{
        m: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
      }}
    />
  );
}
