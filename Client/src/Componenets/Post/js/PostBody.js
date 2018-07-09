import * as React from 'react'

import '../css/PostBody.css';


function Post( props ){
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
                
                    <div className='comment' >
                        <div className='userImage' >
                            <img src={ require('../../../ebalo.jpg') } />
                        </div>
                        <div className='commentContent' > comment 2 </div>
                    </div>
                    <div className='comment' >
                        <div className='userImage' >
                            <img src={ require('../../../ebalo.jpg') } />
                        </div>
                        <div className='commentContent' > comment 2 </div>
                    </div>
                    <div className='comment' >
                        <div className='userImage' >
                            <img src={ require('../../../ebalo.jpg') } />
                        </div>
                        <div className='commentContent' > comment 2 </div>
                    </div>              
                
                </div>
                
                {/* <div className='userName' > { props.userName } </div>
                <div> { props.catalog } </div>
                <div> { props.subject } </div>
                <div> { props.content } </div> */}
             
            </div>
           
            
        );
}
export default Post;