import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CommentDto } from '../../../DTOs/comment.DTO';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  public async getComments() {
    return this.commentService.getComments();
  }

  @Post()
  public async postComment(@Body() comment: CommentDto) {
    return this.commentService.postComment(comment);
  }

  @Get(':id')
  public async getComment(@Param('id') id: string) {
    return this.commentService.getComment(id);
  }

  @Delete(':id')
  public async deleteComment(@Param('id') id: string) {
    return this.commentService.deleteComment(id);
  }

  @Put(':id')
  public async putComment(@Param('id') id: string, @Query() query) {
    const key = query.key;
    const val = query.val;
    return this.commentService.putComment(id, key, val);
  }
}
