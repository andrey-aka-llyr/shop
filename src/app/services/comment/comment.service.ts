import { Injectable } from '@angular/core';

import { Comment } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Array<Comment>;

  constructor() {
    this.comments = [];
  }

  getComments(): Array<Comment> {
    return this.comments;
  }
  addComment(comment: Comment) {
    this.comments.push(comment);
  }
}
