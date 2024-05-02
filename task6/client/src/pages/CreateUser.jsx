import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const Navigate = useNavigate();
    const [value, setValue] = useState({
        "name": '',
        'email': '',
        'img': '',
        'address': '',
        'city': '',
        'state': '',
        'zip': '',
    })
    const fetchdata=async()=>{
        try {
            const res=await axios.get('https://localhost:3000/userdetails',{
                credentials: true
            })
            console.log("response",res)
            
        } catch (error) {
            console.log(error)
            
        }

    }

    function handleChange(e) {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        if(value.phone.length!=10){
            alert("phone number must be 10 dighits")
        }
        try {
            const response=await axios.post('http://localhost:3000/userdetails',value,{
                credentials: true
            })
            console.log(response.data);
            if(response.status){
                alert(response.data);
                Navigate("/userprofile",)
            }
        }catch(error){
            alert(error.response.data)
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchdata();
    },[])

    return (
        <div className='container d-flex justify-content-center align-centre'>
            <div className="col-sm-4 col-md-10 mt-5 p-2 p-md-5">
                <form className=" border border-secondary-subtle p-3 p-md-4" action="/" method="post" onSubmit={handlesubmit}>
                    <h1 className="text-center mb-5">User Profile</h1>
                    <div className="row mb-1">
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Entre Name" name='name' required onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name="email" onChange={handleChange} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="img">Profile Image</label>
                            <input type="file" className="form-control" id="img" placeholder="" name="img" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group mb-1">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" onChange={handleChange} required />
                    </div>
                    <div className="row mb-2">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" name="city" id="inputCity" onChange={handleChange} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" className="form-control" name="phone" id="phone" onChange={handleChange} required />
                        </div>

                    </div>
                    <div className="row mb-2">
                        <div className="form-group col-md-8">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control" name="state" onChange={handleChange}>
                                <option selected>Choose...</option>
                                <option>WB</option>
                                <option>UP</option>
                                <option>MP</option>
                                <option>Bihar</option>
                                <option>Goa</option>
                                <option>Tripura</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" name="zip" onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default CreateUser
