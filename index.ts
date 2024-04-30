import { app } from './src/app';
import { config } from './src/config/config';
import { logger } from './src/config/logger';

const port = config.env || 3000;

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
