import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Comment } from '../../../../models';
import { CommentService } from '../../../../services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: Comment;
  comments: Array<Comment>;

  constructor(
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.comment = new Comment('', '');
    this.comments = this.commentService.getComments();
  }

  onAddComment() {
    this.commentService.addComment(this.comment);
    this.comment = new Comment('', '');
  }
  onClose() {
    this.router.navigate([{ outlets: { comments: null } }]);
  }
}
