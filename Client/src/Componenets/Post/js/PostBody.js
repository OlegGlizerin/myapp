import * as React from 'react'
import '../css/PostBody.css';
import Comment from '../../comment/Comment';


function Post( props ){

    var allComments = props.postComments.map((comment) => {
        return <Comment key={comment.mainCommentId} commentContent={comment.commentContent} userId={comment.userId}/>
    });
    console.log('comments of specific body:');
    console.log(allComments);
        return(
            <div className='post' >
                <div className='postHeader'>
                    <div className='postHeaderImg'>
                        <img src={ require('../../../ebalo.jpg') } />
                    </div>
                    <div className='postHeaderUsrData'>
                        <div className='postUsrName' > {props.userId} </div>
                        <div className='postTime' > 12:40 </div>
                    </div>
                </div>
                <div className='postContent'>
                    {props.postSubject}
                    <br/>
                    <br/>
                    <br/>
                    {props.postContent}
                </div>
                <hr />
                <div className='postFooter'>
                    <div className='postLike'> Like</div>
                    <div className='postComment'> Comment</div>
                    <div className='postShare'> Share </div>
                </div>
                <hr />
                <div className='comments'>
                    
                        
                        {allComments}
                    
                                                 
                                                
                </div>                     
            </div>          
        );
}
export default Post;


