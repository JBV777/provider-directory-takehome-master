
export const Appointment = (props) => {
    console.log("staff: " + props.staff)
    return (
        <div className="row">
            <h2 className="mt-5 mb-5">My Appointments:</h2>
            <h3 className="mt-5 mb-5">Staff: {props.staff}</h3>
            <h3 className="mb-5">Time:</h3>
            <h3 className="mb-5">Location:</h3>
        </div>
    )
}