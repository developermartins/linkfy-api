import app from './app';
import { PORT } from './config/env';

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${PORT}`);
  /* eslint-enable no-console */
});
