import React, {useState} from 'react'


export default function Signup() {
    const [credentials, setcredentials ] = useState({name: "", email: "", password: "", geolocation: ""})


    const handleSubmit = async (e)  =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location: credentials.geolocation})

        });
        const json = await response.json()
        console.log(json);
        if (!json.success){
            alert(json.errorMsg || "Enter a valid credentials")
        }

    }
    const onChange = (event) =>{
      // alert("ashii")
        setcredentials({...credentials, [event.target.name]: event.target.value})

    }
  return (
    <>  

    <div className='container'>
    <form   onSubmit={handleSubmit}>

    <div className="mb-3">
    <label htmlFor="name" className="form-label">name</label>
    <input type="name" className="form-control" name='name'value={credentials.name} onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  name='email'value={credentials.email} onChange={onChange}/>
  </div>

  <div className="mb-3"> 
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password'value={credentials.password} onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
    <input type="text" className="form-control" name='geolocation'value={credentials.geolocation} onChange={onChange}/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <link to = "/login" className="m-3 btn btn danger"></link>
</form>
</div>
    
    </>
  )
}
