import React, { Fragment, useEffect, useState } from 'react'
import { Paper, CardContent, Container, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@material-ui/core";
import ClassForm from "../../Forms/Setting/ClassForm"
import * as action from "../../../helper/actions/Setting/ClassAction"
import { connect } from "react-redux"
import IconThemeButton from "../../../helper/control/IconThemeButton"
import AlertStatus from '../../../helper/control/AlertStatus'

function ClassList({ classList, errorList, fetchClassData }) {

    // let messageDataStatus = ''
    useEffect(() => {
        fetchClassData();


    }, [])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
    }


    let filterClass = classList.list.filter(
        (cls) => {
            return cls.class_name.indexOf("") !== -1;
        }

    )


    // let alertRender = ''
    // if (errorList.moduleName === "Class") {
    //     alertRender = <AlertStatus error={errorList.errorMessage} />
    // }

    const renderBody = filterClass.length !== 0 ? filterClass.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((classes) => {
        return (
            <TableRow key={classes.id}>
                <TableCell component="th" scope="row">
                    {classes.class_name}
                </TableCell>
                <TableCell align="right">
                    <IconThemeButton
                        theme="primary"
                        icon="editIcon"
                    />
                    <IconThemeButton theme="danger" icon="deleteIcon" />
                </TableCell>
            </TableRow>
        )
    }) :
        <TableRow >
            <TableCell align="right"></TableCell>
        </TableRow>



    return (
        <div>
            <Fragment>
                <CardContent>
                    <ClassForm />
                </CardContent>
                <Grid item xs={12} sm={12}>
                    <Container fixed>


                        <TableContainer component={Paper}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">CLASS NAME</TableCell>
                                        <TableCell align="right">ACTIONS</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {renderBody}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                    <TablePagination
                        labelRowsPerPage='Page'
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={filterClass.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Grid>
            </Fragment>




        </div>
    )
}

const mapStateToProps = state => {
    // let filterClassError = state.error.filter(
    //     (cls) => {
    //         return cls.moduleName.indexOf("Class") !== -1;
    //     }

    // )

    console.log("filterClassError", state.class);
    return {
        classList: state.class
    }

}

const mapDispatchtoProps = {
    fetchClassData: action.fetchClass


}
export default connect(mapStateToProps, mapDispatchtoProps)(ClassList)
