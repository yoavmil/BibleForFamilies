import { HttpException, Injectable } from '@nestjs/common';
import { CommentDTO } from './comment.DTO';
import { commentsMock } from './comments.mock';

@Injectable()
export class CommentService {
    private comments = commentsMock;

    public getComments(): Promise<CommentDTO[]> {
        return new Promise((resolve) => {
            return resolve(this.comments);
        });
    }

    public getComment(id: number): Promise<CommentDTO> {
        return new Promise((resolve) => {
            resolve(this.comment(id));
        });
    }

    public postComment(comment: CommentDTO): Promise<CommentDTO[]> {
        return new Promise((resolve) => {
            this.comments.push(comment);
            return resolve(this.comments);
        });
    }

    public deleteComment(id: number): Promise<CommentDTO[]> {
        return new Promise((resolve) => {
            let idx = this.commentIdx(id);
            this.comments.splice(idx);
            return resolve(this.comments);
        });
    }

    public putComment(id: number, key: string, val: string): Promise<CommentDTO> {
        return new Promise((resolve) => {
            let comment = this.comment(id);
            comment[key] = val;
            resolve(comment);
        });
    }

    private comment(id: number): CommentDTO {
        let comment = this.comments.find((comment) => { return comment.id == id; });
        if (!comment) throw new HttpException("Not fount", 404);
        return comment;
    }

    private commentIdx(id: number): number {
        let idx = this.comments.findIndex((comment) => { comment.id == id; })
        if (idx < 0) throw new HttpException("Not fount", 404);
        return idx;
    }
}
