import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('FIRST API WITH NEST.JS')
    .setDescription('Testing API description')
    .setVersion('1.0')
    .addTag('List endpoints:')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // CORS
  app.enableCors({
    // De esta forma podemos limitar que dominio tiene permitido poder pedir cosas a nuestro backend,
    // cuando hablamos de apps frontend
    // origin: 'http://localhost:3400',
  });

  await app.listen(3000);
}
bootstrap();
