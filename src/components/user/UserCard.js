import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({user}) {
    // console.log(user.company.catchPhrase);
    
  return (
    <Card className="text-center">
      <Card.Header>{user.username} - {user.id}</Card.Header>
      <Card.Body>
        <Card.Title>{user.name} </Card.Title>
        <Card.Text>
          {user.company.catchPhrase}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default UserCard;