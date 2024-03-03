import { useState, useEffect } from "react";
import { Button, 
    Container, FloatingLabel, 
    Form, ListGroup, Card, Spinner
} from "react-bootstrap";

const ProfileSearch = () => {
    const [userName, setUserName] = useState('Rizwanjamal')
    const [userData, setUserData] = useState({})
    const [isLoading, setLoader] = useState(false)

    useEffect(()=> {
        // API Calling...
        fetchProfile()
    }, [])

    const fetchProfile = () => {
        setLoader(true)
        var apiURL = `https://api.github.com/users/${userName}`
        fetch(apiURL)
            .then(result => result.json())
            .then(data => {
                console.log('data :', data)
                setUserData(data)
                setLoader(false)
                }
            )
    }

  return (
    <Container className="mt-4">
      <h2 className="text-center">Github Profile Fetch App</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="User Name"
        className="mb-3"
      >
        <Form.Control value={userName} type="User Name" placeholder="api" onChange={(e) => setUserName(e.target.value)}/>
      </FloatingLabel>
      <div className="d-grid gap-2">
        <Button variant="outline-primary" size="lg" onClick={fetchProfile} disabled={isLoading}>
          Fetch Profile
        </Button>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        {isLoading ? 
             <Spinner animation="border" size="lg" />
             :
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={userData.avatar_url} />
                <Card.Body>
                    <Card.Title>{userData.name}</Card.Title>
                    <Card.Text>
                    {userData.bio}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Public Repos : {userData.public_repos}</ListGroup.Item>
                    <ListGroup.Item>Followers : {userData.followers}</ListGroup.Item>
                    <ListGroup.Item>{userData.location}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={userData.html_url}>Github URL</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        }
      </div>
    </Container>
  );
};

export default ProfileSearch;
