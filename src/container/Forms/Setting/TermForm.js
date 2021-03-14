import React, { Fragment } from 'react'
import { Grid } from "@material-ui/core";
import ThemeButton from "../../../helper/control/ThemeButton"
import FormikControl from "../../../helper/control/FormikControl"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useSnackbar } from 'notistack';
import { connect, useDispatch, useSelector } from "react-redux"

const initialValues = {
    term_name: ""
};


const validationSchema = Yup.object({
    term_name: Yup.string().required("Required"),
});


function TermForm({errorList}) {
    const { enqueueSnackbar } = useSnackbar();
    const onSubmit = (values) => {
        console.log("Form data", values);
        // enqueueSnackbar(`Cant submit status: ${classList.error}`, {
        //     variant: 'error',
        // });
        console.log("TermForm Submit Form", errorList.errorMessage);
    };


    return (
        <Fragment>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                {
                    (formik) => (
                        <Form>
                            <FormikControl control="input" label="Term name" type="text" id="term_name" name="term_name" />
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

const mapStateToProps = state => {
    // console.log("errorList", state.error);
    return {
        errorList: state.error
    }

}

const mapDispatchtoProps = {
   
}

export default connect(mapStateToProps,mapDispatchtoProps)(TermForm)
