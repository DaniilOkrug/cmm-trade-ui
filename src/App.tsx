import React, { FC, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  AdminMain,
  BotSettings,
  CoinsBlackList,
  Office,
  Profile,
  Statistics,
} from "./components";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { Pages } from "./pages";
import { checkAuth } from "./store/reducers/ActionCreator";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { user, isAuth } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      dispatch(checkAuth());
    }
  }, []);

  if (isAuth) {
    console.log(user);
    
    switch (user?.role) {
      case "User":
        console.log("User");
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Pages.Dashboard />}>
                <Route path="/" element={<Office />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          </BrowserRouter>
        );
      case "Admin":
        console.log("Admin");
        return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Pages.AdminPanel />}>
                <Route path="/" element={<AdminMain />} />
                <Route path="/settings" element={<BotSettings />} />
                <Route path="/blacklist" element={<CoinsBlackList />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          </BrowserRouter>
        );
      default:
        return <h1>User underfined... Write to the Admin</h1>;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Pages.ValidatedLogin />} />
        <Route path="/signup" element={<Pages.ValidatedSignUp />} />
        <Route path="/" element={<Navigate to="/login" />}>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};



export default App;
