import React from "react"
import logo from '../../assets/logos/logo.svg'


export default function Footer() {
    return (
        <footer class="p-6 bg-white sm:p-10">
            <div className="container mx-auto flex flex-col items-center justify-between mt-4">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-20 md:gap-20">
                    <div>
                        <h1 className="text-blue_dark font-bold">Social media</h1>
                        <ul>
                            <li className="text-blue_dark cursor-pointer hover:indigo-800"><a href="#">Discord</a></li>
                            <li className="text-blue_dark cursor-pointer"><a href="#">Twitter</a></li>
                            <li className="text-blue_dark cursor-pointer"><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-blue_dark font-bold">Campany</h1>
                        <ul>
                            <li className="text-blue_dark cursor-pointer"><a href="#">Community</a></li>
                            <li className="text-blue_dark cursor-pointer"><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-blue_dark font-bold">Resources</h1>
                        <ul>
                            <li className="text-blue_dark cursor-pointer"><a href="#">Contact us</a></li>
                            <li className="text-blue_dark cursor-pointer"><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-60" src={logo} alt="logo" />
                        <h1 className="hidden md:block text-blue_dark text-xs my-2 text-center">Ullamcorper orci, venenatis ac euismod vel purus tortor rhoncu.</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}