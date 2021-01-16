import moment from 'moment';
import { Typography } from '@material-ui/core';

type DateFormatterProps = {
  dateString: string;
};

const DateFormatter: React.FC<DateFormatterProps> = ({ dateString }) => {
  const formattedDate = moment(dateString).format('MMMM DD, YYYY');

  return (
    <Typography variant="body2" color="textPrimary">
      {formattedDate}
    </Typography>
  );
};

export default DateFormatter;
