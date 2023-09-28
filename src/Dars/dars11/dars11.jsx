import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style/style.css";
import { Link } from "react-router-dom";

const Dars11 = () => {
	// uyga vazifa
	// ===========================================================================
	// let url = "https://fakestoreapi.com/products"
	// const [loading, setLoading] = useState(true)
	// const handleLoading = () => {
	//   setLoading(loading)
	// }

	// const [data, setData] = useState()
	// const getData = () => {
	//   axios.get(url).then((res) => {
	//     setData(res.data)
	//     setLoading(res.loading = false)
	//     handleLoading
	//   })
	// }

	// useEffect(() => {
	//   setTimeout(() => {
	//     getData()
	//   }, 500);
	// })
	// ===========================================================================
	// post put
	const [load, setLoad] = useState(true);
	let url = "https://65018bd4736d26322f5bdf64.mockapi.io/sport";

	const [data, setData] = useState();
	const getData = () => {
		setLoad(true);
		axios.get(url).then((res) => {
			console.log(res, "get");
			setData(res.data);
			setTimeout(() => {
				setLoad(false);
			}, 500);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	const [title, setTitle] = useState();
	const [img, setImg] = useState();
	const [text, setText] = useState();

	const postData = () => {
		const info = {
			title: title,
			img: img,
			text: text,
		};
		axios.post(url, info).then((res) => {
			console.log(res, "post");
			if (res.status === 201) {
				getData();
			}
		});
	};

	const [id, setId] = useState()
	const putData = () => {
		const info = {
			title: title,
			img: img,
			text: text,
		};
		axios.put(url+"/"+id, info).then((res) => {
			console.log(res, "put");
			if (res.status === 200) {
				getData();
			}
		});
	};

	return (
		<React.Fragment>
			{/* uyga vazifa */}
			{/* =========================================================================== */}
			{/* <h1 className={loading == false? "dalet": "loading"}>Loading...</h1>
      <div className="container">
        <div  className="grid">
          {data?.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src={item.image} alt="" className='img'/>
                <h3>{item.title}</h3>
                <p>{item.price}$</p>
              </div>
            )
          })}
        </div>
      </div> */}
			{/* =========================================================================== */}
			{/* post */}
			{load ? <div className='loading'></div> : ""}
			<input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/> <br />
			<input type='text' placeholder='Title' onChange={(e) => setImg(e.target.value)}/> <br />
			<input type='text' placeholder='Title' onChange={(e) => setText(e.target.value)}/> <br />
			<button onClick={postData}>Post</button>
			<div>
				<input type="text" placeholder="id" onChange={(e) => setId(e.target.value)}/>
				<button onClick={putData}>Put</button>
			</div>
			<div className='grid'>
				{data?.map((item) => {
					return (
						<div className='card' key={item.id}>
							<img src={item.img} width={100} alt='' />
							<Link to={"/news/"+item.id}>{item.title}</Link>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};
export default Dars11;