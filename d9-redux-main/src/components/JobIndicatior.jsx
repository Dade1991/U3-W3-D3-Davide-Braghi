import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const JobIndicator = () => {
  const navigate = useNavigate()
  const favouritesLength = useSelector((state) => {
    return state.favourites.content.length
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate("/favourites")}
        className="d-flex align-items-center"
      >
        <i className="bi bi-star-fill"></i>
        <span className="ms-2">{favouritesLength}</span>
      </Button>
    </div>
  )
}

export default JobIndicator
