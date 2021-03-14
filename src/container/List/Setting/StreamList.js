import React, { Fragment } from 'react'
import { Paper, CardContent, Container, Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@material-ui/core";
import StreamForm from "../../Forms/Setting/StreamForm"

function StreamList() {

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
    const rows = [
        createData("India"),
        createData("China"),
        createData("Italy"),
        createData("United States"),
    ];

    return (
        <div>
            <Fragment>
                <CardContent>
                    <StreamForm />
                </CardContent>
                <Grid item xs={12} sm={12}>
                    <Container fixed>
                        <TableContainer component={Paper}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">STREAM NAME</TableCell>
                                        <TableCell align="right">ACTIONS</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">class 1</TableCell>
                                        <TableCell align="right">
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">class 1</TableCell>
                                        <TableCell align="right">
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                    <TablePagination
                        labelRowsPerPage='Page'
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
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

export default StreamList
