import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Swal from "sweetalert2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./App.css";

const apiUrl = "http://localhost:8000/api/cars/";

function App() {
    const [plates, setPlates] = useState([]);
    const [filterPlate, setFilterPlate] = useState("");

    const filter = () => {
        let searchParams;
        let url = apiUrl;
        if (filterPlate) {
            const appliedFilters = { plate: filterPlate };
            searchParams = new URLSearchParams(appliedFilters);
            url += `?${searchParams.toString()}`;
        }
        axios
            .get(url)
            .then((response) => {
                setPlates(response.data);
            })
            .catch((e) => {
                setPlates([]);
                Swal.fire("Error", "Something happened with our server", "error");
            });
    };

    const inputHandler = (e) => {
        e.preventDefault();
        const value = e.target.value.trim();
        if (value.length > 8) {
            Swal.fire("Error", "Car Plates format has a maximum of 8 characters", "error");
            return;
        }
        setFilterPlate(value);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        filter();
    }, []);

    return (
        <section>
            <Box
                sx={{
                    width: "70%",
                    height: "62px",
                    margin: "auto",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "5px 15px",
                    display: "flex",
                    marginTop: "50px",
                    boxShadow: "5px 7px 186px -9px rgb(23 118 209 / 50%)",
                    alignContent: "center",
                    justifyContent: "space-around",
                    maxWidth: "700px",
                }}
            >
                <TextField
                    sx={{
                        flex: "0.6",
                        maxWidth: "350px",
                    }}
                    id="standard-basic"
                    label="Car Plate"
                    variant="standard"
                    value={filterPlate}
                    onChange={(e) => inputHandler(e)}
                />
                <Button
                    variant="contained"
                    sx={{
                        margin: "8px 0px",
                    }}
                    onClick={() => filter()}
                >
                    Search
                </Button>
            </Box>
            <TableContainer
                component={Paper}
                sx={{
                    margin: "4rem auto",
                    maxWidth: "900px",
                    maxHeight: "40rem",
                }}
            >
                <Table
                    sx={{
                        minWidth: 650,
                    }}
                    stickyHeader
                    aria-label="sticky table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Plate</TableCell>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Owner Name</TableCell>
                            <TableCell align="right">Owner Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {plates.map((row, num) => {
                            let style = {
                                "&:last-child td, &:last-child th": { border: 0 },
                            };
                            if (num % 2) {
                                style["backgroundColor"] = "rgb(113 185 255 / 50%)";
                            }

                            return (
                                <TableRow key={row.plate} sx={style}>
                                    <TableCell component="th" scope="row">
                                        {row.plate}
                                    </TableCell>
                                    <TableCell align="right">{row.brand}</TableCell>
                                    <TableCell align="right">{row.model}</TableCell>
                                    <TableCell align="right">{row.owner.name}</TableCell>
                                    <TableCell align="right">{row.owner.address}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
}

export default App;
