import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Table, TableBody, TableCell, TableContainer, TableHead, Button, TableRow, Paper, CircularProgress } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import FoodEntryService from '../service/food-entry';
import { columnNames } from '../utils/helpers';
import { add_entry_array, update_entry_array, edit_entry_details } from '../redux/actions';


function ViewFoodEntry() {
    const stateEntries = useSelector((state) => state.foodEntries);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSpinning, setSpinning] = useState(true);
    const [dateFilter, setDateFilter] = useState({ minDate: '2022-01-01', maxDate: '2022-01-29' });

    useEffect(() => {
        setSpinning(true);
        FoodEntryService.fetchFoodEntries(dateFilter)
            .then((data) => dispatch(add_entry_array(data)))
            .then(() => setSpinning(false));
    }, [dateFilter]);

    const handleEdit = (data) => {
        dispatch(edit_entry_details(data));
        navigate('/edit');
    }

    const handleDelete = (id) => {
        dispatch(update_entry_array(stateEntries.filter((entry) => entry.id !== id)));
    }

    return (
        <div className="ViewFoodEntry">
            <h1>Food Entries</h1>

            {isSpinning ? <CircularProgress color='warning' /> : <div>

                <form action="post">
                    <input type="date" name="from" id="from" value={dateFilter.minDate} max={dateFilter.maxDate} onChange={e => setDateFilter({ ...dateFilter, minDate: e.target.value })} />
                    <input type="date" name="to" id="to" value={dateFilter.maxDate} min={dateFilter.minDate} onChange={e => setDateFilter({ ...dateFilter, maxDate: e.target.value })} />
                </form>

                <TableContainer component={Paper} className='table'>
                    <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    columnNames.map(name => <TableCell align="center"><b>{name}</b></TableCell>)
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stateEntries.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.date.toLocaleString()}</TableCell>
                                    <TableCell align="center">{row.foodName}</TableCell>
                                    <TableCell align="center">{row.calories} {row.isCalorieLimitReached && <WarningAmberOutlinedIcon color='warning' fontSize='small' />} </TableCell>
                                    <TableCell align="center">{row.price} {row.isPriceLimitReached && <WarningAmberOutlinedIcon color='warning' fontSize='small' />} </TableCell>
                                    <TableCell align="center"><EditIcon color='secondary' fontSize='small' onClick={() => handleEdit(row)} /></TableCell>
                                    <TableCell align="center"><DeleteIcon color='error' fontSize='small' onClick={() => handleDelete(row.id)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Button variant="contained" color="info" type="submit" onClick={() => navigate('/create')}>
                    Add Entry
                </Button>
            </div>}
        </div>
    );
}

export default ViewFoodEntry;


// component="th" scope="row" (First TableCell)