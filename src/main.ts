import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {

    const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT, ()=>{
    console.log(`port is listening on ${process.env.API_PORT} port . . .`)
  });
 
}
bootstrap();
