import React, { Fragment, useEffect } from 'react'
import { Paper, CardContent, Container, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@material-ui/core";
import TermForm from "../../Forms/Setting/TermForm"
import { fetchTerm } from "../../../helper/actions/Setting/TermAction"
import { connect } from "react-redux"
import IconThemeButton from "../../../helper/control/IconThemeButton"
import AlertStatus from '../../../helper/control/AlertStatus'

function TermList({ termList, errorList, fetchTermData }) {

    useEffect(() => {
        fetchTermData();
      
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

    let filterTerm = termList.list.filter(
        (cls) => {
            return cls.term_name.indexOf("") !== -1;
        }

    )

    // let alertRender = ''
    // if (errorList.moduleName === "Term") {
    //      alertRender = <AlertStatus error={errorList.errorMessage} />
    // }

    const renderBody = filterTerm.length !== 0 ? filterTerm.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((classes) => {
        return (
            <TableRow key={classes.id}>
                <TableCell component="th" scope="row">
                    {classes.term_name}
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
                    <TermForm />
                </CardContent>
                <Grid item xs={12} sm={12}>
                    <Container fixed>
                   
                        <TableContainer component={Paper}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">TERM NAME</TableCell>
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
                        count={filterTerm.length}
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
    // let filterTermError = state.error.filter(
    //     (cls) => {
    //         return cls.moduleName.indexOf("Term") !== -1;
    //     }

    // )

    // console.log("filterTermError", filterTermError);
    // console.log("filterTermError", state.error);
    return {
        termList: state.term,
        errorList:state.error
    }

}

const mapDispatchtoProps = dispatch => {
    return {
        fetchTermData: () => dispatch(fetchTerm())
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(TermList)
