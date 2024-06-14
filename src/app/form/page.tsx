import Navbar from "../navbar"
import styles from './MembershipForm.module.css'

export default function page() {
    return (
        <div className="w-screen">
            <Navbar image="/navbarImages/home.jpeg" />
            <div className="flex flex-col min-h-screen bg-customRedMedium px-4 space-y-4 py-6">
                <div className="max-w-lg mx-auto border border-white p-6 rounded-md">
                <h2 className="text-center text-xl font-bold mb-6">MEMBERSHIP BULLETIN</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
                            <input type="text" id="firstName" name="firstName" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="nameOfYoungGirl" className="block mb-1 font-medium">Name of Young Girl</label>
                            <input type="text" id="nameOfYoungGirl" name="nameOfYoungGirl" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="firstNameOfSpouse" className="block mb-1 font-medium">First Name of Spouse</label>
                            <input type="text" id="firstNameOfSpouse" name="firstNameOfSpouse" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-1 font-medium">Address</label>
                            <input type="text" id="address" name="address" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex-1">
                            <label htmlFor="postalCode" className="block mb-1 font-medium">Postal Code</label>
                            <input type="text" id="postalCode" name="postalCode" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="city" className="block mb-1 font-medium">City</label>
                            <input type="text" id="city" name="city" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        </div>
                        <div>
                            <label htmlFor="country" className="block mb-1 font-medium">Country</label>
                            <input type="text" id="country" name="country" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex-1">
                            <label htmlFor="tel" className="block mb-1 font-medium">Tel</label>
                            <input type="number" id="tel" name="tel" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="fax" className="block mb-1 font-medium">Fax</label>
                            <input type="number" id="fax" name="fax" className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                            <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <button type="submit" className="w-full py-2 bg-customOrange text-white font-bold rounded-md hover:bg-customYellow">Submit</button>
                    </form>
                    <p className=""><br/>
                        <u>ANNUAL CONTRIBUTION</u> 2016 : 30 Euros or 35 US Dollars.<br/>
                        Cheque to be paid to order from AJOE.<br/>
                        <u>Addressing the bulletin membership and your check to :</u><br/>
                        David Harari&apos;s<br/>
                        AJOE Secretary<br/>
                        2, presentation street<br/>
                        75011 Paris<br/><br/>

                        For any amount paid in excess of 30 Euros or 35 Dollars US, the difference will be considered as a DON to the association.<br/><br/>

                        To receive an received, thank you for attaching a stamped envelope.<br/><br/>
                        <span className="underline text-customOrange">Payment in Euro zone</span>
                    </p>
                </div>
            </div>
        </div>
    )
}