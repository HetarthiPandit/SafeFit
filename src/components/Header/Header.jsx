import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ROUTES } from '../../constant';

const Header = ({setId,id}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get current location

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleScrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigateAndScroll = (path, elementId) => {
    navigate(path);
    setTimeout(() => {
      if (elementId) {
        handleScrollToElement(elementId);
        setActiveItem(`#${elementId}`);
        setId(elementId)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveItem(path);
      }
    }, 100);
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (id) {
      handleScrollToElement(id);
    }
  }, [id]);

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-[#531CC9] bg-gradient-to-r from-[#531CC9] from-50% to-[#5458F7]' : 'bg-transparent'} font-inter`}>
        <div className={`flex flex-wrap items-center justify-between mx-auto xl:mx-20 lg:mx-18 px-6 py-5 border-b ${isScrolled ? 'border-transparent' : 'border-b-white border-opacity-50'}`} ref={menuRef}>
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse focus:outline-none">
            <img src={Logo} className="md:h-8 h-6" alt="Flowbite Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-center md:text-3xl text-2xl text-white rounded-lg lg:hidden focus:outline-none relative z-50"
            aria-controls="navbar-default"
            onClick={handleToggle}
          >
            {isOpen ? <FontAwesomeIcon icon={faTimes} className='text-white' /> : <FontAwesomeIcon icon={faBars} className='text-white' />}
          </button>
          <div className={`fixed top-0 left-0 right-0 lg:m-0 mx-auto lg:h-full w-11/12 bg-white transition-transform transform ${isOpen ? 'translate-y-20' : '-translate-y-full'} lg:static lg:transform-none lg:bg-transparent lg:flex lg:items-center lg:w-auto`} id="navbar-default">
            <MenuLinks handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} currentPath={activeItem}  />
          </div>
        </div>
      </nav>
    </>
  );
};

const MenuItem = ({ children, to = ROUTES.HOME.PATH, target = "", scrollToId, handleNavigateAndScroll, handleClose, isActive }) => {
  const handleClick = (e) => {
    if (scrollToId) {
      e.preventDefault();
      handleNavigateAndScroll(to, scrollToId);
    } else {
      handleNavigateAndScroll(to);
    }
    handleClose();
  };

  return (
    <Link
      to={to}
      target={target}
      className={`block py-4 px-3 lg:bg-transparent lg:p-0 lg:border-0 border-b ${isActive ? ' lg:text-[#FFF] text-[#531CC9] text-bold' : 'lg:text-white'}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

const MenuLinks = ({ handleNavigateAndScroll, handleClose, currentPath}) => {
  return (
    <div className="font-medium flex flex-col lg:items-center lg:p-0 xl:text-lg text-sm lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 bg-[#fff] lg:bg-transparent ">
      <MenuItem to={ROUTES.HOME.PATH} handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === ROUTES.HOME.PATH}>Home</MenuItem>
      <MenuItem to={ROUTES.STUDIOLOCATION.PATH} handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === ROUTES.STUDIOLOCATION.PATH}>Locations</MenuItem>
      <MenuItem to={ROUTES.TRAINERSLISTING.PATH} handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === ROUTES.TRAINERSLISTING.PATH}>Personal Training</MenuItem>
      {/* <MenuItem to={ROUTES.GROUPTRANING.PATH} handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === ROUTES.GROUPTRANING.PATH} >Group Training main</MenuItem> */}
      {/* <MenuItem to={ROUTES.GROUPEVENT.PATH}  handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === ROUTES.GROUPEVENT.PATH} >Group Training</MenuItem> */}

      <MenuItem to={ROUTES.PROGERAMS.PATH} handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === ROUTES.PROGERAMS.PATH}>Programs</MenuItem>
      {/* <MenuItem to="#" scrollToId="partnerships" handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === '#partnerships'}  >  </MenuItem> */}
      <div className="lg:hidden block">
        <MenuItem to="#" scrollToId="contact" handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === '#contact'}  >Contact Us</MenuItem>
      </div>
      <div className="px-3 lg:block hidden" >
        <button type="button" className="text-white text-xs bg-transparent border border-white focus:outline-none hover:bg-[#531CC9] font-medium rounded-full xl:text-lg xs:text-sm lg:px-6 py-2 px-4 text-center">
          <MenuItem to="#" scrollToId="contact" handleNavigateAndScroll={handleNavigateAndScroll} handleClose={handleClose} isActive={currentPath === '#contact'} >Contact Us</MenuItem>
        </button>
      </div>
    </div>
  );
};

export default Header;
