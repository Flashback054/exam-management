import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './application/app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const config = new DocumentBuilder()
  //   .setTitle('Exam Managment API')
  //   .setDescription('Exam Managment API description')
  //   .setVersion('1.0')
  //   .addTag('user')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(3000);
}
bootstrap();
