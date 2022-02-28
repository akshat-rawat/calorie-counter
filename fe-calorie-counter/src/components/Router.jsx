import { BrowserRouter, Route, Routes } from "react-router-dom";

import ViewFoodEntry from "./ViewFoodEntry";
import CreateFoodEntry from "./CreateFoodEntry";
import EditFoodEntry from "./EditFoodEntry";

const Router = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ViewFoodEntry />} />
                <Route path="/create" element={<CreateFoodEntry />} />
                <Route path="/edit" element={<EditFoodEntry />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default Router;