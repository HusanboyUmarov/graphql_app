import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersResolver } from '../users/users.resolver';
import { Post } from './entities/post.entity';

@Resolver('posts')
export class PostsResolver {
  constructor(
    private readonly postService: PostsService,
    private readonly usersResolver: UsersResolver,
  ) {}
  @Mutation(() => Post)
  async createPost(
    @Args('createPost') createPostDto: CreatePostDto,
    @Args('authorId') authorId: number,
  ) {
    const author = await this.usersResolver.findOneUser(authorId);
    return this.postService.create(createPostDto, author);
  }
}
