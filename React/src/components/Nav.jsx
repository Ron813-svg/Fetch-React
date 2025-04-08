import React from "react";

const Nav = () => {
    return (
        <nav
            className="shadow-md"
            style={{
                backgroundColor: "#1A202C",
                color: "#CBD5E0",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            }}
        >
            <div
                className="container mx-auto px-4 py-3 flex justify-between items-center"
                style={{
                    padding: "1rem",
                }}
            >
                <div
                    className="text-lg font-bold"
                    style={{
                        fontSize: "1.25rem",
                        color: "#E2E8F0",
                    }}
                >
                    MyApp
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a
                            href="/"
                            className="hover:text-gray-200"
                            style={{
                                color: "#A0AEC0",
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#63B3ED")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#A0AEC0")}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dragon"
                            className="hover:text-gray-200"
                            style={{
                                color: "#A0AEC0",
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#63B3ED")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#A0AEC0")}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/morty"
                            className="hover:text-gray-200"
                            style={{
                                color: "#A0AEC0",
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#63B3ED")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#A0AEC0")}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
