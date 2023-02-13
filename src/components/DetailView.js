import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const DetailView = () => {
    return (
        <div className='container mt-3'>
            <h1>Welcome Salma Patan</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className='row'>
                        <div className='add_btn'>
                            <button className="btn btn-primary mx-2"><CreateIcon /></button>
                            <button className="btn btn-danger"><DeleteIcon /></button>
                        </div>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src="https://pbs.twimg.com/profile_images/1483492779309338628/68aRef8E_400x400.jpg" style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Name: <span>Salma Patan</span></h3>
                            <h3 className='mt-3'>Age: <span>21</span></h3>
                            <p className='mt-3'><MailOutlineIcon />Email: <span>sallu@gmail.com</span></p>
                            <p className='mt-3'><WorkIcon />Occupation: <span>WebDeveloper</span></p>
                        </div>
                        <div className='right_view col-lg-6 col-md-6 col-12'>

                            <p className='mt-3'><PhoneEnabledIcon />Mobile: <span>9998899900</span></p>
                            <p className='mt-3'><LocationOnIcon />Location: <span>Chennai</span></p>
                            <p className='mt-3'>Description: <span>Iam an undergrdauate person who is enthusiasitic to learn the new technologies and expand my network and skills.</span></p>

                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default DetailView
