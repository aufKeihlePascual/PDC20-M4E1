import React, {useState} from "react";
import './App.css'

function MOD1Registration() {
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [course, setCourse] = useState('');
    const [enrollmentTerm, setEnrollmentTerm] = useState('');
    const [emergencyContactName, setEmergencyContactName] = useState('');
    const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fullName,
            email,
            dob,
            age,
            gender,
            phoneNumber,
            address,
            course,
            enrollmentTerm,
            emergencyContactName,
            emergencyContactPhone,
            comments
        });
    };

    return (
        <div className="Registration">
            <header className="App-header">
                <h1>Registration Form</h1>
                <form onSubmit={handleSubmit} className='registration-form'>
                    <div>
                        <label htmlFor='fullName'>Full Name :</label>
                        <input
                            type='text'
                            id='fullName'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor='email'>Email :</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='dob'>Date of Birth:</label>
                        <input
                            type='date'
                            id='dob'
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='age'>Age:</label>
                        <input
                            type='number'
                            id='age'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='gender'>Gender:</label>
                        <select
                            id='gender'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required>
                                
                            <option value=''>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='phoneNumber'>Phone Number:</label>
                        <input
                            type='tel'
                            id='phoneNumber'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='address'>Address:</label>
                        <textarea
                            id='address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='course'>Course of Interest:</label>
                        <input
                            type='text'
                            id='course'
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='enrollmentTerm'>Preferred Enrollment Term:</label>
                        <input
                            type='text'
                            id='enrollmentTerm'
                            value={enrollmentTerm}
                            onChange={(e) => setEnrollmentTerm(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='emergencyContactName'>Emergency Contact Name:</label>
                        <input
                            type='text'
                            id='emergencyContactName'
                            value={emergencyContactName}
                            onChange={(e) => setEmergencyContactName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='emergencyContactPhone'>Emergency Contact Phone Number:</label>
                        <input
                            type='tel'
                            id='emergencyContactPhone'
                            value={emergencyContactPhone}
                            onChange={(e) => setEmergencyContactPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='comments'>Additional Comments:</label>
                        <textarea
                            id='comments'
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />
                    </div>

                    <button type='submit'>Register</button>

                </form>
            </header>
        </div>
    );
}

export default MOD1Registration;