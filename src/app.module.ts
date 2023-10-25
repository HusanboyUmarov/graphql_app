import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ShopsModule } from './shops/shops.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }), 

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver, 
      autoSchemaFile:'schema.gql',
      sortSchema:true,
      playground:true
    }),

    TypeOrmModule.forRootAsync({
      imports:[ConfigModule], 
      inject:[ConfigService],
      useFactory: async (config: ConfigService) =>({
        type: config.get<'postgres'>('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database:  config.get<string>('TYPEORM_DATABASE'),
        port: config.get<number>('TYPEORM_PORT'),
        entities: [__dirname + 'dist/**/*.entity{.ts, .js}'],
        synchronize:true,
        autoLoadEntities: true, 
        logging:true
      })
    }), UsersModule, ProductModule, CategoryModule, ShopsModule, PostsModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
