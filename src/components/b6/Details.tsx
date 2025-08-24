import React, { Component } from 'react'
interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
}
interface DetailProps {
    post: Article;
}
export default class DetailsPost extends Component<DetailProps> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div>
        <p><strong>id: </strong>{id}</p>
        <p><strong>title: </strong>{title}</p>
        <p><strong>content: </strong>{content}</p>
        <p><strong>author</strong>{author}</p>
      </div>
    )
  }
}
