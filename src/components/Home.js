import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { getAccordionDetailsUtilityClass } from "@mui/material";
const Home = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = async (e) => {
        const response = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await response.json()
        if (response.status === 404 || !data) {
            alert("error");
            console.log("Error");
        }
        else {
            setUserData(data)
        }
    }
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                </div>


                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((row, id) => {
                            return (
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.work}</td>
                                    <td>{row.mobile}</td>
                                    <td className="d-flex justify-content-between">
                                        <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                                        <button className="btn btn-primary"><CreateIcon /></button>
                                        <button className="btn btn-danger"><DeleteIcon /></button>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>

            </div>

        </div >
    )
}

export default Home;