import React, { FC, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Profile,
  Office,
  Statistics,
  AdminMain,
  BotSettings,
  CoinsBlackList,
} from "./components/index";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { Pages } from "./pages";
import { checkAuth } from "./store/reducers/ActionCreator";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(checkAuth());
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Login />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/signup" element={<Pages.SignUp />} />
        <Route path="/office" element={<Pages.Dashboard />}>
          <Route path="/office/" element={<Office />} />
          <Route path="/office/statistics" element={<Statistics />} />
          <Route path="/office/profile" element={<Profile />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/admin" element={<Pages.AdminPanel />}>
          <Route path="/admin/" element={<AdminMain />} />
          <Route path="/admin/settings" element={<BotSettings />} />
          <Route path="/admin/blacklist" element={<CoinsBlackList />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
