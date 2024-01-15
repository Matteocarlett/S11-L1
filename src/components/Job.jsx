import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Job = ({ data }) => {
  const favourites = useSelector(state => state.favourite.list);
  const dispatch = useDispatch();

  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs="auto" className="d-flex align-items-center">
        {isFav ? (
          <StarFill
            color="gold"
            size={28}
            className="me-3 mb-3"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name
              })
            }
          />
        ) : (
          <Star
            color="gold"
            size={25}
            className="me-3 mb-3"
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data.company_name
              })
            }
          />
        )}

        <Link className="linker d-flex" to={`/${data.company_name}`}>{data.company_name} <p className="ms-3">-</p> </Link>
      </Col>
      <Col>
        <a className="linked" href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
