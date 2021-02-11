import { useEffect, useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { IconButton, Tooltip } from '@material-ui/core';

import { SvgSun, SvgMoon } from '../../icons';

type ThemeToggleProps = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  isLandingPage: boolean;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleDarkMode, isDarkMode, isLandingPage }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <FormGroup>
      <Tooltip title="Toggle Dark mode">
        <IconButton size={isLandingPage ? 'medium' : 'small'} aria-label="toggle dark mode" onClick={toggleDarkMode}>
          {loaded && isDarkMode ? <SvgMoon /> : <SvgSun />}
        </IconButton>
      </Tooltip>
    </FormGroup>
  );
};

export default ThemeToggle;
