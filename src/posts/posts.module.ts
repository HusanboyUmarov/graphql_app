import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { UsersResolver } from '../users/users.resolver';
import { PostsResolver } from './posts.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Post, User])],
  controllers: [PostsController],
  providers: [PostsService, UsersService, UsersResolver, PostsResolver],
})
export class PostsModule {}
