#### Editor styling

@comment-color: #d0d0d0;

.syntax--comment {
  color: @comment-color;
}

.syntax--punctuation {
  &.syntax--definition {
    &.syntax--comment {
      color: @comment-color;
    }
  }
}
