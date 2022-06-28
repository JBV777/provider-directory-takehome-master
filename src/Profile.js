import { useState, useEffect, createContext } from "react";
import { useParams, Link } from "react-router-dom";
import {fetchProviders, fetchProvider} from "./api";
import App from "./App";
import { Appointment } from "./Appointment";

export const Profile = () => {

    const params = useParams()
    console.log(params)

    const [staffProfile, setStaffProfile] = useState([])

    const fetchSingleStaff = async () => {
        const res = await fetchProvider(params.userId)
        console.log(res)
        setStaffProfile(res)
      }

    useEffect(() => {
        console.log("result = " + staffProfile)
        fetchSingleStaff()
    }, [])

    const booking = () => {
        return 
    }
    
    return (
        <div className="container">
            <h2 className='mt-5 mb-5'>{staffProfile.name}</h2>
            <h3 className='mt-5 mb-5'>{staffProfile.title}</h3>
            <div className="row">
                <div className="lead mt-2">
                    <h3>Availability:</h3>{staffProfile.availabilty}
                    <h3>Location:</h3>{staffProfile.location}
                    <h3>Education:</h3>{staffProfile.education}
                    <h3>Bio:</h3>{staffProfile.bio}
                </div>
                <Link 
                    to = "/Appointment"
                    className="btn btn-success btn-raised mr-5"
                    onClick={
                        booking()
                    }
                >
                    Book
                </Link>
            </div>
        </div>
    )
}