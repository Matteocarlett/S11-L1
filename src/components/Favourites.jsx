import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector(state => state.favourite.list);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="d-flex align-items-center mx-auto my-3">
          <h1 className="display-4 me-auto">Favourites</h1>
          <Button variant="outline-primary" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.length > 0 ? (
              favourites.map((fav, i) => (
                <ListGroup.Item key={i}>
                  <Trash
                    color="red"
                    className="me-3"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: fav
                      })
                    }
                  />
                  <Link className="linker" to={"/" + fav}>{fav}</Link>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>
                No favourites yet, <Link className="linked" to="/"> back to Home</Link>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
