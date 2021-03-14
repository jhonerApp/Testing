import React, { Fragment } from 'react'
import { Grid } from "@material-ui/core";
import ThemeButton from "../../../helper/control/ThemeButton"
import FormikControl from "../../../helper/control/FormikControl"
import { Formik, Form } from "formik";
import * as Yup from "yup";


const initialValues = {
    stream_name: ""
};


const validationSchema = Yup.object({
    stream_name: Yup.string().required("Required"),
});

const onSubmit = (values) => {
    console.log("Form data", values);

};

function StreamForm() {
    return (
        <Fragment>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                {
                    (formik) => (
                        <Form>
                            <FormikControl control="input" label="Stream name" type="text" id="stream_name" name="stream_name" />
                            <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                                <ThemeButton type="submit" theme="primary" icon="addIcon" text="SAVE" />
                            </Grid>
                        </Form>
                    )
                }

            </Formik>
        </Fragment>
    )
}

export default StreamForm
