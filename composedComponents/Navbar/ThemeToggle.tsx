import FormGroup from '@material-ui/core/FormGroup';
import { IconButton, Tooltip } from '@material-ui/core';

import { SvgSun, SvgMoon } from '../../icons';

type ThemeToggleProps = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  isLandingPage: boolean;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleDarkMode, isDarkMode, isLandingPage }) => {
  return (
    <FormGroup>
      {!isDarkMode && (
        <Tooltip title="Toggle Dark mode">
          <IconButton size={isLandingPage ? 'medium' : 'small'} aria-label="toggle dark mode" onClick={toggleDarkMode}>
            <SvgSun />
          </IconButton>
        </Tooltip>
      )}
      {isDarkMode && (
        <Tooltip title="Toggle Dark mode">
          <IconButton size={isLandingPage ? 'medium' : 'small'} aria-label="toggle dark mode" onClick={toggleDarkMode}>
            <SvgMoon />
          </IconButton>
        </Tooltip>
      )}
    </FormGroup>
  );
};

export default ThemeToggle;
