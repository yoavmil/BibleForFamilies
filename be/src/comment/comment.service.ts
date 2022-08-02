import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDto } from '../../../DTOs/comment.DTO';
import CommentDocument, { Comment, CommentSchema } from './comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) { }

  public async getComments(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  public async getComment(id: string): Promise<Comment> {
    return this.commentModel.findById(id).exec();
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
