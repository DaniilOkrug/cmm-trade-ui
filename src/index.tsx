import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pages } from "./pages/index";
import {
  Profile,
  Office,
  Statistics,
  AdminMain,
  BotSettings,
  CoinsBlackList
} from "./components/index";

ReactDOM.render(
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
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
