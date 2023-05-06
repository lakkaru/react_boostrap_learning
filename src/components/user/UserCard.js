import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({user, getUserId}) {
    // console.log(user);
    
  return (
    <Card className="text-center">
      <Card.Header>{user.username} - {user.id}</Card.Header>
      <Card.Body>
        <Card.Title>{user.name} </Card.Title>
        <Card.Text>
          {user.company.catchPhrase}
        </Card.Text>
        <Button variant="primary"onClick={()=>getUserId(user.id)}>Show Posts</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{user.website}</Card.Footer>
    </Card>
  );
}

export default UserCard;