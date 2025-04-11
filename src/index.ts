import app from './app';
import { PORT } from './config/env';
import connectToDatabase from './database/mongo.config';

app.listen(PORT, async () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${PORT}`);
  /* eslint-enable no-console */

  await connectToDatabase()
});
