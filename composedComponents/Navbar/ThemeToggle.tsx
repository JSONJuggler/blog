import { ChangeEvent, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

type ThemeToggleProps = {
  setIsDark: (isDark: boolean) => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ setIsDark }) => {
  const [state, setState] = useState(() => {
    if (process.browser) {
      const themePreference = localStorage.getItem('themePreference');
      if (themePreference === 'light') {
        return true;
      }
      if (themePreference === 'dark') {
        return false;
      }
    }
  });

  const handleChange = (e: ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
    setState(e.target.checked);
    if (!e.target.checked) {
      setIsDark(true);
      localStorage.setItem('themePreference', 'dark');
    }
    if (e.target.checked) {
      localStorage.setItem('themePreference', 'light');
      setIsDark(false);
    }
  };

  return (
    <FormGroup>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h6">dark</Typography>
        </Grid>
        <Grid item>
          <StyledSwitch checked={state} onChange={handleChange} name="checked" />
        </Grid>
        <Grid item>
          <Typography variant="h6">light</Typography>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

const StyledSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default ThemeToggle;
