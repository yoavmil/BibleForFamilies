import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDto } from './comment.dto';
import CommentDocument, { Comment } from './comment.schema';

@Injectable()
export class CommentService {
	constructor(
		@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
	) {}

	public async getComments(url: string): Promise<CommentDto[]> {
		return this.commentModel.find({ url: url }).exec();
	}

	public async postComment(comment: CommentDto): Promise<Comment> {
		const createdComment = new this.commentModel(comment);
		return createdComment.save();
	}

	public async deleteComment(id: string): Promise<Comment> {
		return this.commentModel.findByIdAndDelete(id).exec();
	}

	public async putComment(
		id: string,
		key: string,
		val: string,
	): Promise<Comment> {
		return this.commentModel.findByIdAndUpdate(id, {
			[key]: val,
		});
	}
}
