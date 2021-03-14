import React, { Fragment, useEffect, useState } from 'react'
import { Grid } from "@material-ui/core";
import ThemeButton from "../../../helper/control/ThemeButton"
import FormikControl from "../../../helper/control/FormikControl"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import * as action from "../../../helper/actions/Setting/ClassAction"
import { connect, useDispatch, useSelector } from "react-redux"
import { useSnackbar } from 'notistack';




const initialValues = {
    class_name: ""
};


const validationSchema = Yup.object({
    class_name: Yup.string().required("Required"),
});

function ClassForm({ classList, createClass }) {
    const { enqueueSnackbar } = useSnackbar();



    // const { addToast } = useToasts()

    // <RIIcons.RiCloseCircleFill />

    //
    // const filterErrorSubmit = (arr, query) => {
    //     return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    //   }
      let result = classList.errors.filter(t=>t.moduleName === 'ClassSubmit');
      
    if (classList.errors.moduleName === "Class") {
    }
    const onSubmit = (values) => {
      
        console.log("Form dat1a", values);
        // addToast("error.message", { appearance: 'error',autoDismiss:true })
        // const onSuccess = () => {
        //     addToast("Submitted successfully", { appearance: 'success', autoDismiss: true })
        // }
        createClass(values)
        // const onFailed = () => {
        enqueueSnackbar(`Cant submit status: ${result[0].errorMessage}`, {
            variant: 'error',
        });
        // }

        //  onFailed(classList.error);

    
        console.log("Classes Submit Form", result);
    };



    return (
        <Fragment>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    (formik) => (
                        <Form>

                            <FormikControl control="input" label="Class name" type="text" name="class_name" />
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
    console.log("Form errorList", state.class);
    return {
        classList: state.class
    }

}

const mapDispatchtoProps = {
    createClass: action.createClass,
}
export default connect(mapStateToProps, mapDispatchtoProps)(ClassForm)
