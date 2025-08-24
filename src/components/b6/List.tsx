import React, { Component } from 'react'
import Details from './Details';
interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
}
interface ListPostState {
    posts: Article[];
}
export default class List extends Component<object, ListPostState> {
    constructor(props: object){
        super(props);
        this.state = {
            posts: [
                {
                    id: 1,
                    title: "Tại sao nên học ReactJs",
                    content: "Học React để đi làm",
                    author: "David",
                },
                {
                    id: 2,
                    title: "Props trong ReactJS",
                    content: "Props giúp truyền dữ liệu từ component con xuống component cha",
                    author: "Linda",
                }
            ]
        }
    }
  render() {
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
          <Details key={post.id} post={post} />
        ))}
      </div>
    )
  }
}
