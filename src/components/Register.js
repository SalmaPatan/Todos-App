import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        age: '',
        mobile: '',
        work: '',
        address: '',
        description: ''

    })

    const setData = (e) => {
        const { name, value } = e.target
        setInputValue((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }

    const addUser = async (e) => {
        e.preventDefault();

        const { name, email, age, mobile, work, address, description } = inputValue;
        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, age, mobile, work, address, description
            })
        })

        const data = await response.json()
        console.log(data)
        if (response.status === 404 || !data) {
            alert("error");
            console.log("Error");
        }
        else {
            alert("data Added");
        }
    }
    return (
        <div className='container'>
            <NavLink to="/">home</NavLink>

            <form className='mt-5'>
                <div className='row'>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" name="name" value={inputValue.name} onChange={(e) => setData(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" name="email" value={inputValue.email} onChange={(e) => setData(e)} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="number" name="age" value={inputValue.age} onChange={(e) => setData(e)} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" name="mobile" value={inputValue.mobile} onChange={(e) => setData(e)} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" name="work" value={inputValue.work} onChange={(e) => setData(e)} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" name="address" value={inputValue.address} onChange={(e) => setData(e)} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea type="text" name="description" value={inputValue.description} onChange={(e) => setData(e)} className='form-control' cols='30' rows='5'></textarea>
                    </div>

                    <button type="submit" onClick={addUser} class="btn btn-primary" >Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Register
