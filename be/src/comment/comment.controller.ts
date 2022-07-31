import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CommentDTO } from './comment.DTO';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) { }

    @Get()
    public async getComments() {
        return this.commentService.getComments();
    }

    @Post()
    public async postComment(@Body() comment: CommentDTO) {
        return this.commentService.postComment(comment);
    }

    @Get(":id")
    public async getComment(@Param('id') id: number) {
        return this.commentService.getComment(id);
    }

    @Delete(":id")
    public async deleteComment(@Param("id") id: number) {
        return this.commentService.deleteComment(id);
    }

    @Put(":id")
    public async putComment(@Param("id") id: number, @Query() query) {
        const key = query.key;
        const val = query.val;
        return this.commentService.putComment(id, key, val);
    }
}
