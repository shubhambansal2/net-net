import "@/styles/footer.css"

function Footer() {
    return (
        <footer className="footerBackgroundColor text-gray-400 py-12 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Blueberry is a leading technology company specializing in custom AI solutions for various industries.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/company/neuraledge-ai/"
                            className="hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Fiverr
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Upwork
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Email: aiblueberry.co@gmail.com</p>
                    <p>Phone: (+91)-9001696768</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2024 AI BLUEBERRY. All rights reserved.</p>
        </footer>
    )
}

export default Footer