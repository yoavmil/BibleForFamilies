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
import { CommentDto } from './comment.DTO';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
	constructor(private commentService: CommentService) {}

	@Post()
	public async postComment(@Body() comment: CommentDto) {
		return this.commentService.postComment(comment);
	}

	@Get(':url')
	public async getComments(@Param('url') url: string): Promise<CommentDto[]> {
		return await this.commentService.getComments(url);
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
