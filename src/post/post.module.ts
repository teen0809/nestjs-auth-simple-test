import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './post.repository';
import { UserModule } from '@src/user/user.module';
import { UserService } from '@src/user/user.service';

@Module({
  imports: [UserModule],
  controllers: [PostController],
  providers: [PostService, PostRepository, UserService],
})
export class PostModule {}
