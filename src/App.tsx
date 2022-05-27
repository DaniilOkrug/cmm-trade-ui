import React, { FC, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { setErrotStatus } from "./store/reducers/UserSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { user, isAuth, userError, isUserError, isLoading } = useAppSelector((state) => state.userReducer);

  const notifyError = () =>
    toast.error(userError, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(checkAuth());
    }
  }, []);

  useEffect(() => {
    if (isUserError) {
      notifyError();
      dispatch(setErrotStatus(false));
    }
  }, [isUserError]); 

  if (isAuth) {
    switch (user?.role) {
      case "User":
        return (
          <>
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

            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
            />
          </>
        );
      case "Admin":
        return (
          <>
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

            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </>
        );
      default:
        return <h1>User underfined... Write to the Admin</h1>;
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Pages.ValidatedLogin />} />
          <Route path="/signup" element={<Pages.ValidatedSignUp />} />
          <Route path="/" element={<Navigate to="/login" />}>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
