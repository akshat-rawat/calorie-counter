import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { add_entry } from '../redux/actions';
import InputField from './InputField';

function CreateFoodEntry() {
    const [entryData, setEntryData] = useState({
        id: Date.now(),
        isCalorieLimitReached: Math.random() < 0.5,
        isPriceLimitReached: Math.random() > 0.5
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(entryData).length < 7) return toast('Enter all the fields!');
        if (entryData.date > Date.now()) return toast('Enter valid date!');
        if (entryData.foodName === " " || !isNaN(entryData.foodName)) return toast('Enter valid food!');
        if (entryData.price <= 0 || entryData.calories <= 0) return toast('Enter valid price and calories');
        dispatch(add_entry(entryData));
        navigate('/');
    }

    return (
        <div className="CreateFoodEntry">
            <ToastContainer />

            <h1>Add Food Entry</h1>

            <form onSubmit={handleSubmit} method='post'>

                <InputField labelName="Date &amp; Time" inputType="datetime-local" inputName="datetime" defaultValue="" onChange={e => setEntryData({ ...entryData, date: new Date(e.target.value) })} />

                <InputField labelName="food name" inputType="text" inputName="foodName" defaultValue="" onChange={e => setEntryData({ ...entryData, foodName: e.target.value })} />

                <InputField labelName="calorie value" inputType="number" inputName="calories" defaultValue="" onChange={e => setEntryData({ ...entryData, calories: e.target.value })} />

                <InputField labelName="price" inputType="number" inputName="price" defaultValue="" onChange={e => setEntryData({ ...entryData, price: e.target.value })} />

                <div className="form-div">
                    <Button variant="contained" color="success" type="submit">
                        Submit
                    </Button>
                </div>

            </form>
        </div>
    );
}

export default CreateFoodEntry;
