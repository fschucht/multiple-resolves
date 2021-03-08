import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  process.on('multipleResolves', (type, promise, reason) => {
    console.log('MULTIPLE RESOLVES: ', reason);
  });
}
bootstrap();
