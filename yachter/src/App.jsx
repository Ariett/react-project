import { Routes, Route } from "react-router-dom";
import './App.scss'

import { AuthProvider } from "./contexts/authContext";

import Path from "./paths";

import NotFound from "./components/not-found/NotFound";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import AllYachts from "./components/all-yachts/AllYachts";
import YachtEdit from "./components/yacht-owners/yacht-edit/YachtEdit";
import Home from "./components/home/Home";
import YachtDetails from "./components/yacht-details/YachtDetails";

import MemberRegister from "./components/members/member-register/MemberRegister";
import MemberFavoriteYachts from "./components/members/member-favorite-yachts/MemberFavoriteYachts";
import MemberReservations from "./components/members/member-reservations/MemberReservations";

import OwnerRegister from "./components/yacht-owners/owner-register/OwnerRegister";
import OwnerYachts from "./components/yacht-owners/owner-yachts/OwnerYachts";
import YachtCreate from "./components/yacht-owners/yacht-create/YachtCreate";
import OwnerYachtsReservations from "./components/yacht-owners/yachts-reservations/OwnerYachtsReservations";


import { YachtsProvider } from "./contexts/yachtsContext";
import { MemberProvider } from "./contexts/memberContext";
import ErrorBoundary from "./error-boundaries/ErrorBoundary";


function App() {

    return (
        <ErrorBoundary>
            <AuthProvider>
                <YachtsProvider>
                    <MemberProvider>

                        <Navigation />

                        <main>
                            <Routes>
                                <Route path='*' element={<NotFound />} />
                                <Route path={Path.Home} element={<Home />}></Route>
                                <Route path={Path.Login} element={<Login />}></Route>
                                <Route path={Path.Logout} element={<Logout />}></Route>
                                <Route path={Path.AllYachts} element={<AllYachts />}></Route>
                                <Route path={Path.YachtsDetails} element={<YachtDetails />}></Route>

                                {/* Member Links */}
                                <Route path={Path.MemberRegister} element={<MemberRegister />}></Route>
                                <Route path={Path.MemberFavoriteYachts} element={<MemberFavoriteYachts />}></Route>
                                <Route path={Path.MemberReservations} element={<MemberReservations />}></Route>

                                {/* Owner Links */}
                                <Route path={Path.OwnerRegister} element={<OwnerRegister />}></Route>
                                <Route path={Path.OwnerYachts} element={<OwnerYachts />}></Route>
                                <Route path={Path.OwnerYachtsCreate} element={<YachtCreate />}></Route>
                                <Route path={Path.OwnerYachtsEdit} element={<YachtEdit />}></Route>
                                <Route path={Path.OwnerYachtsReservations} element={<OwnerYachtsReservations />}></Route>
                            </Routes>
                        </main>

                        <Footer />
                    </MemberProvider>
                </YachtsProvider>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App
