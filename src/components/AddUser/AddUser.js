import { useState } from 'react';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Button } from '@material-ui/core';
import * as S from "./style";


const AddUser = ({ addUser }) => {
    const [title, setTitle] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [streetName, setStreetName] = useState('')
    const [streetNumber, setStreetNumber] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title || !firstName || !streetNumber || !streetName || !lastName || !email || !city || !country) {
            alert("You need to add all text inputs");
        }
        else {
            console.log({ title, firstName, lastName, email, streetNumber, streetName, city, country })
            addUser({ title, firstName, lastName, email, streetNumber, streetName, city, country });
            setTitle('')
            setEmail('')
            setStreetName('')
            setCountry('')
            setFirstName('')
            setCity('')
            setLastName('')
            setStreetNumber('')
        }
    }

    return (
        <S.Container>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    Add User
                </AccordionSummary>
                <AccordionDetails>

                    <S.UserForm onSubmit={onSubmit}>
                        <div className="user-form-inputs">
                            <TextField required id="filled-basic" className="user-input" margin="dense" value={title} onChange={(e) => setTitle(e.target.value)} label="Mr/Ms/Mrs" variant="filled" />
                            <TextField required id="filled-basic" className="user-input" margin="dense" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="filled" />
                            <TextField required id="filled-basic" className="user-input" margin="dense" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="filled" />
                            <TextField required id="filled-basic" className="user-input" margin="dense" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="filled" />
                            <TextField required id="filled-basic" className="user-input" margin="dense" value={streetName} onChange={(e) => setStreetName(e.target.value)} label="Street Name" variant="filled" />
                            <TextField required id="filled-basic" className="user-input" margin="dense" value={streetNumber} type="number" InputLabelProps={{ shrink: true, }} onChange={(e) => setStreetNumber(e.target.value)} label="street number" variant="filled" />
                            <TextField required id="filled-basic" className="user-input" margin="dense" value={city} onChange={(e) => setCity(e.target.value)} label="City" variant="filled" />
                            <TextField required id="filled-basic" className="user-input" margin="dense" value={country} onChange={(e) => setCountry(e.target.value)} label="Country" variant="filled" />
                        </div>
                        <Button size="large" onClick={onSubmit} variant="contained">Save user</Button>
                    </S.UserForm>

                </AccordionDetails>
            </Accordion>
        </S.Container>
    )
}

export default AddUser