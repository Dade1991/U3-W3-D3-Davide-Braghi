import { Container, Row, Col, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const FavouriteList = () => {
  const favourites = useSelector((state) => {
    return state.favourites.content
  })
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <ul className="favouritesList list-unstyled">
            {favourites.map((job, i) => (
              <li
                key={job._id}
                className="singleFavouriteJob my-5 d-flex flex-row "
              >
                <div className="me-5">
                  <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                </div>
                <div className="me-5">
                  <a href={job.url} target="_blank" rel="noreferrer">
                    {job.title}
                  </a>
                </div>
                <div className="ms-auto">
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: `REMOVE_FROM_FAVOURITES`,
                        payload: job._id,
                      })
                    }}
                  >
                    <i class="bi bi-trash3"></i>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default FavouriteList
