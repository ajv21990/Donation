import React from "react";
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Tooltip from '@material-ui/core/Tooltip';




export const Form = props => {
    const {
        values: { donationID, fName, lName, email, address, apt, city, state, zip, amount, frequency, cardNumber, cvv, exp, },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="DonationForm">
                <div className=" row">
                    <div className="col-sm-4 offset-sm-0">
                        <Tooltip title="Input a donation ID" placement="top">
                            <TextField
                                id="donationID"
                                name="donationID"
                                helperText={touched.donationID ? errors.donationID : ""}
                                error={touched.donationID && Boolean(errors.donationID)}
                                fullWidth
                                label="Donation ID"
                                margin="normal"
                                variant="outlined"
                                value={donationID}
                                onChange={change.bind(null, "donationID")}
                            />
                        </Tooltip>
                        <TextField
                            id="fName"
                            name="fName"
                            helperText={touched.fName ? errors.fName : ""}
                            error={touched.fName && Boolean(errors.fName)}
                            fullWidth
                            label="First Name"
                            margin="normal"
                            variant="outlined"
                            value={fName}
                            onChange={change.bind(null, "fName")}
                        />
                        <TextField
                            id="lName"
                            name="lName"
                            helperText={touched.lName ? errors.lName : ""}
                            error={touched.lName && Boolean(errors.lName)}
                            fullWidth
                            label="Last Name"
                            margin="normal"
                            variant="outlined"
                            value={lName}
                            onChange={change.bind(null, "lName")}
                        />
                        <TextField
                            id="email"
                            name="email"
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                            fullWidth
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={change.bind(null, "email")}
                        />
                    </div>
                    <div className="col-sm-4">
                        <TextField
                            id="address"
                            name="address"
                            helperText={touched.address ? errors.address : ""}
                            error={touched.address && Boolean(errors.address)}
                            fullWidth
                            label="Address"
                            margin="normal"
                            variant="outlined"
                            value={address}
                            onChange={change.bind(null, "address")}
                        />
                        <TextField
                            id="apt"
                            name="apt"
                            helperText={touched.apt ? errors.apt : ""}
                            error={touched.apt && Boolean(errors.apt)}
                            fullWidth
                            label="Apt#"
                            margin="normal"
                            variant="outlined"
                            value={apt}
                            onChange={change.bind(null, "apt")}
                        />
                        <TextField
                            id="city"
                            name="city"
                            helperText={touched.city ? errors.city : ""}
                            error={touched.city && Boolean(errors.city)}
                            fullWidth
                            label="City"
                            margin="normal"
                            variant="outlined"
                            value={city}
                            onChange={change.bind(null, "city")}
                        />
                        <TextField
                            id="state"
                            name="state"
                            helperText={touched.state ? errors.state : ""}
                            error={touched.state && Boolean(errors.state)}
                            fullWidth
                            label="State"
                            margin="normal"
                            variant="outlined"
                            value={state}
                            onChange={change.bind(null, "state")}
                        />
                        <TextField
                            id="zip"
                            name="zip"
                            helperText={touched.zip ? errors.zip : ""}
                            error={touched.zip && Boolean(errors.zip)}
                            fullWidth
                            label="Zip"
                            margin="normal"
                            variant="outlined"
                            value={zip}
                            onChange={change.bind(null, "zip")}
                        />
                    </div>
                    <div className="col-sm-4">
                        <Tooltip title="Input how much you are donating" placement="top">
                            <TextField
                                id="amount"
                                name="amount"
                                helperText={touched.amount ? errors.amount : ""}
                                error={touched.amount && Boolean(errors.amount)}
                                fullWidth
                                label="Amount"
                                margin="normal"
                                variant="outlined"
                                value={amount}
                                onChange={change.bind(null, "amount")}
                            />
                        </Tooltip>
                        <TextField
                            id="cardNumber"
                            name="cardNumber"
                            helperText={touched.cardNumber ? errors.cardNumber : ""}
                            error={touched.cardNumber && Boolean(errors.cardNumber)}
                            fullWidth
                            label="Card Number"
                            margin="normal"
                            variant="outlined"
                            value={cardNumber}
                            onChange={change.bind(null, "cardNumber")}
                        />
                        <TextField
                            id="cvv"
                            name="cvv"
                            helperText={touched.cvv ? errors.cvv : ""}
                            error={touched.cvv && Boolean(errors.cvv)}
                            fullWidth
                            label="Cvv"
                            margin="normal"
                            variant="outlined"
                            value={cvv}
                            onChange={change.bind(null, "cvv")}
                        />
                        <Tooltip title="Format mm/yy" placement="bottom">
                            <TextField
                                id="exp"
                                name="exp"
                                helperText={touched.exp ? errors.exp : ""}
                                error={touched.exp && Boolean(errors.exp)}
                                fullWidth
                                label="Exp"
                                margin="normal"
                                variant="outlined"
                                value={exp}
                                onChange={change.bind(null, "exp")}
                            />
                        </Tooltip>
                    </div>
                </div >
                <br />
                <div className="BottomForm">
                    <FormControl variant="outlined">
                        <InputLabel >
                            Frequency
            </InputLabel>
                        <Select
                            native
                            id="frequency"
                            name="frequency"
                            value={frequency}
                            onChange={change.bind(null, "frequency")}
                            input={
                                <OutlinedInput name="frequency" id="frequency" />
                            }>
                            <option value="" />
                            <option value={"One Time"}>One Time</option>
                            <option value={"Monthly"}>Monthly</option>
                            <option value={"Yearly"}>Yearly</option>
                        </Select>
                    </FormControl>
                    <br />
                    <br />

                    <Button
                        type="submit"

                        variant="contained"
                        color="primary"
                        disabled={!isValid} >SUBMIT</Button>
                </div>
            </div>
        </form>
    );
};


