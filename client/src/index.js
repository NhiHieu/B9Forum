import React from 'react'
import './post.css'

function Comments(props){
    let list_comments = props.comments.map((comment) => {
        return(
            <div className="comment" key={comment.id}>
                <div className="avatar">
                    <img src={comment.user.photo.href} alt="User photo" title={comment.user.name}/>
                </div>
                <div className="content">
                    <p>{comment.content}</p>
                </div>
            </div>
        ) 
    })
    return list_comments;
}



class Post extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        const post = this.props.post;
        const question = post.question;
        const comments = post.comments;
        return(
            <div className="post">
                <div className="question">
                    <h3>{question}</h3>
                </div>
                <Comment comments={comments} />
            </div>
        )
    }
}