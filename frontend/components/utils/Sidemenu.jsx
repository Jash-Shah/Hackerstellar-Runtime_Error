import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CalculateIcon from "@mui/icons-material/Calculate";

import Link from "next/link";

function Sidemenu({ log }) {
    return (
        <div className="h-max px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 fixed z-20 md:hidden aside">
            <ul className="space-y-2 flex flex-col gap-4 px-4">
                <li>
                    <Link
                        href="/"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <HomeIcon></HomeIcon>
                        <span className="ml-3">Home</span>
                    </Link>
                </li>

                <li>
                    <Link
                        href="/profile"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <AccountBoxIcon></AccountBoxIcon>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                            Profile
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/manage"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <ManageAccountsIcon></ManageAccountsIcon>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                            Track
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/analysis"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <CalculateIcon></CalculateIcon>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                            Execute
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/help"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <HelpCenterIcon></HelpCenterIcon>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                            Help
                        </span>
                    </Link>
                </li>
                {log ? (
                    <>
                        <li>
                            <Link
                                href="/logout"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <LoginIcon></LoginIcon>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Log out
                                </span>
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link
                                href="/login"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <LogoutIcon></LogoutIcon>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Log In
                                </span>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Sidemenu;
