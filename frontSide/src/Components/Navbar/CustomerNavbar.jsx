import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../context/authSlice';
import { Link, NavLink } from 'react-router-dom';
import profile from '../../assets/profile.jpg';

const CustomerNavbar = () => {

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

onst [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-100 shadow-lg py-4 font-poppins-400">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
              ADs VIEW
            </Link>
    
            {/* Hamburger Icon (Visible on mobile) */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
    
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-roboto-condensed">
              <NavLink
                to="/"
                exact
                className="text-lg hover:border-b-4 hover:border-yellow-200"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "4px solid #fcd34d" : "none", // Yellow underline
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                exact
                className="text-lg hover:border-b-4 hover:border-yellow-200"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "4px solid #fcd34d" : "none", // Yellow underline
                })}
              >
                About
              </NavLink>
              <NavLink
                to="/advertisings"
                exact
                className="text-lg hover:border-b-4 hover:border-yellow-200"
                style={({ isActive }) => ({
                  borderBottom: isActive ? "4px solid #fcd34d" : "none",
                })}
              >
                Advertisings
              </NavLink>
            </div>
    
            {/* User Section */}
            <div className="hidden lg:flex items-center space-x-6">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="flex items-center space-x-2 hover:underline">
                    <img
                      src={user?.avatar || profile}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-700">{user?.username || "User"}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:opacity-90"
                >
                  Sign Up Now
                </Link>
              )}
            </div>
          </div>
    
          {/* Mobile Menu (Visible on mobile) */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4">
              <div className="flex flex-col items-center">
                <NavLink
                  to="/"
                  exact
                  className="text-lg py-2 hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  exact
                  className="text-lg py-2 hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
                <NavLink
                  to="/advertisings"
                  exact
                  className="text-lg py-2 hover:text-yellow-500"
                  onClick={toggleMenu}
                >
                  Advertisings
                </NavLink>
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      className="text-lg py-2 hover:text-yellow-500"
                      onClick={toggleMenu}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-6 py-2 rounded-full mt-4 shadow-lg hover:opacity-90"
                    onClick={toggleMenu}
                  >
                    Sign Up Now
                  </Link>
                )}
              </div>
            </div>
          )}
        </nav>
      );
    };
  
export default CustomerNavbar