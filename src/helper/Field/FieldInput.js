import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import { makeStyles, FormControl, Input, InputLabel, FormHelperText, TextField, StepIcon } from "@material-ui/core";
import * as RIIcons from "react-icons/ri";



function FieldInput(props) {

    const { label, name, ...rest } = props;
    const icon = <RIIcons.RiErrorWarningFill />
    return (
        <Field name={name} >

            {({ field, form }) => {
                // console.log("field", field)
                return (
                    <Fragment>
                        <TextField
                            id={name}
                            label={label}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name={name}
                            {...field}
                            {...(form.errors[name] && {
                                error: true,
                                helperText: form.errors[name],
                            })}
                        />
                    </Fragment>
                )
            }
               

            }
        </Field>
    );
}

export default FieldInput;
