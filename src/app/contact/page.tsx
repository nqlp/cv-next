"use client";

import Footer from "@/src/components/Footer";

export default function ContactForm() {
    async function handleSubmit(formData: FormData) {
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const message = formData.get("message");
        console.log({ firstName, lastName, email, message });
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <div className="grow py-12 px-4">
                <form action={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-cyan-800">Viens discuter!</h2>

                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénom <span className="text-red-500">*</span></label>
                        <input type="text" name="firstName" id="firstName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom <span className="text-red-500">*</span></label>
                        <input type="text" name="lastName" id="lastName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <input type="email" name="email" id="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                        <textarea name="message" id="message" rows={5} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900"></textarea>
                    </div>

                    <button type="submit" className="bg-cyan-600 text-white px-6 py-3 rounded-full font-bold hover:bg-cyan-700 transition w-full md:w-auto">
                        Envoyer
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}