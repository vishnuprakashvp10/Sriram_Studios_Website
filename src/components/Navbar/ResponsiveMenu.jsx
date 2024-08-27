import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/sriram_studios_logo.png";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Film Camera Units",
    link: "/film-camera-units",  
  },
  {
    id: 4,
    name: "Media Production",
    dropdownLinks: [
      {
        id: 1,
        name: "Post Production Suite",
        dropdownLinks: [ 
          {
            id: 1,
            name: "Green Matte Studio",
            link: "/green-matte-studio",
          },
          {
            id: 2,
            name: "Editing Suites",
            link: "/editing-suites",
          },
          {
            id: 3,
            name: "Dubbing Studios",
            link: "/dubbing-studios",
          },
          {
            id: 4,
            name: "Audio Mixing",
            link: "/audio-mixing",
          },
        ]
      },
      {
        id: 2,
        name: "Multi-Camera-Setup",
        link: "/multi-camera-setup",
      },
    ],
  },
  {
    id: 3,
    name: "Equipment Rentals",
    dropdownLinks: [
      {
        id: 1,
        name: "Lights and Grips",
        link: "/lights-and-grips",
      },
      {
        id: 2,
        name: "Lens Filters",
        link: "/lens-fileters",
      },
      {
        id: 3,
        name: "Camera Lenses",
        link: "/camera-lenses",
      },
    {
      id: 4,
      name: "Genset",
      link: "/genset",
    },
  ],
  },
  {
    id: 5,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 6,
    name: "Contact Us",
    link: "/contact-us",
  },
];

const ResponsiveMenu = ({ showMenu, toggleMenu, handleOrderPopup }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);

  const handleMenuItemClick = (dropdownId) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };

  const handleNestedDropdownClick = (nestedDropdownId) => {
    if (openNestedDropdown === nestedDropdownId) {
      setOpenNestedDropdown(null);
    } else {
      setOpenNestedDropdown(nestedDropdownId);
    }
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex flex-col bg-black justify-between px-8 pb-10 pt-24 text-white transition-all duration-200 md:hidden`}
      style={{ maxHeight: "100vh", overflowY: "auto" }} // Added styles for container
    >
      <div className="card">
        <div className="flex items-center justify-start gap-6">
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" className="h-13 w-36" />
            </a>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-bold text-xl">
            {Menu.map((data) => (
              <li key={data.id}>
                {data.dropdownLinks ? (
                  <div className="group relative cursor-pointer">
                    <Link
                      to={data.link}
                      className={`flex justify-between px-6 items-center gap-[2px] py-1 hover:text-primary ${data.name === "Equipment Rentals" ? "mr-4" : ""}`}
                      onClick={() => handleMenuItemClick(data.id)}
                    >
                      {data.name}
                      <span>
                        <FaCaretDown
                          className={`transition-all duration-200 ${
                            openDropdown === data.id ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </Link>
                    <div
                      className={`absolute z-[9999] ${
                        openDropdown === data.id ? "block" : "hidden"
                      } w-[250px] rounded-md bg-white p-5 text-black shadow-md `}
                    >
                      <ul>
                        {data.dropdownLinks.map((dropdownData) => (
                          <li key={dropdownData.id}>
                            {dropdownData.dropdownLinks ? (
                              <div className="group relative cursor-pointer">
                                <Link
                                  to={dropdownData.link}
                                  className="flex justify-center items-center p-1 gap-[2px] py-1 hover:text-primary"
                                  onClick={() => handleNestedDropdownClick(dropdownData.id)}
                                >
                                  {dropdownData.name}
                                  <span>
                                    <FaCaretDown
                                      className={`transition-all duration-200 ${
                                        openNestedDropdown === dropdownData.id ? "rotate-180" : ""
                                      }`}
                                    />
                                  </span>
                                </Link>
                                <div
                                  className={`absolute z-[9999] ${
                                    openNestedDropdown === dropdownData.id ? "block" : "hidden"
                                  } w-[230px]  rounded-md bg-white p-4 text-black shadow-md`}
                                >
                                  <ul>
                                    {dropdownData.dropdownLinks.map((nestedDropdownData) => (
                                      <li key={nestedDropdownData.id}>
                                        <Link
                                          to={nestedDropdownData.link}
                                          className="inline-block w-full  rounded-md p-1 hover:bg-primary/20"
                                          onClick={() => {setOpenDropdown(null); setOpenNestedDropdown(null);toggleMenu()}}
                                        >
                                          {nestedDropdownData.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              <Link
                                to={dropdownData.link}
                                className="inline-block w-full rounded-md p-1 hover:bg-primary/20"
                                onClick={() => {setOpenDropdown(null); setOpenNestedDropdown(null);toggleMenu()}}
                              >
                                {dropdownData.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={data.link}
                    className={`inline-block px-6 hover:text-primary/75 duration-200 ${data.name === "Home Interior Designs" ? "ml-4" : ""}`}
                    onClick={() => {setOpenDropdown(null); setOpenNestedDropdown(null); toggleMenu()}}
                  >
                    {data.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <button
          onClick={handleOrderPopup}
          className="bg-gradient-to-r from-primary to-secondary hover:scale-110 duration-200 text-white py-4 px-6 rounded-full"
        >
          Call Now
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;