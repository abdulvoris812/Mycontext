import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SinglePage = () => {
  let params = useParams().id
  let navigate = useNavigate()

	let url = "https://65018bd4736d26322f5bdf64.mockapi.io/sport/";
  
  const [data, setData] = useState()

  const getData = () => {
    axios.get(url+params).then((res) => {
      console.log(res);
      setData(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const daleteData = (id) => {
    axios.delete(url+id).then((res) => {
      console.log(res.status === 200); {
        setTimeout(() => {
          navigate("/")
        }, 1000)
      }
    })
  }
  return (
    <React.Fragment>
      <Link to={"/"}>Ortga</Link>
      <div className="card">
        <img src={data?.img} alt="" width={200}/>
        <h2>{data?.title}</h2>
        <h3>{data?.text}</h3>
        <button onClick={() => daleteData(data?.id)}>Dalete</button>
      </div>
    </React.Fragment>
  )
}

export default SinglePage
