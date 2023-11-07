import React from 'react'
import { User } from '../interfaces/CommentInterfaces'
import { Button, Form } from 'react-bootstrap';

type Props = {
    user: User;
    isReply: boolean;
    // comment: Comment;
}

const AddComment = (props: Props) => {
    return (
        <Form className='add-comment'>
            <Form.Control as='textarea' rows={3} placeholder='Add a comment...' />
            <picture>
                <source srcSet={props.user.image.webp} type="image/webp" />
                <img src={props.user.image.png} alt={props.user.username} />
            </picture>
            <Button type="submit" variant="primary">Send</Button>
        </Form>
    )
}

export default AddComment