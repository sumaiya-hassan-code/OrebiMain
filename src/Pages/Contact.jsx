import React, { useState } from "react";

const offices = {
  germany: {
    label: "Germany",
    title: "Germany Office",
    address: "525 Crescent Ave, Quakertown, PA 18951",
    phone: "+880 1234 567890",
    hours: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
  slovakia: {
    label: "Slovakia",
    title: "Slovakia Office",
    address: "Hlavná 45, 811 01 Bratislava, Slovakia",
    phone: "+421 2 1234 5678",
    hours: "Mon - Fri, 9:00 AM - 5:30 PM",
  },
  lithuania: {
    label: "Lithuania",
    title: "Lithuania Office",
    address: "Gedimino pr. 20, Vilnius 01103, Lithuania",
    phone: "+370 5 123 4567",
    hours: "Mon - Fri, 8:30 AM - 5:00 PM",
  },
};

export default function Contact() {
  const [activeOffice, setActiveOffice] = useState("germany");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  const currentOffice = offices[activeOffice];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-6xl px-5 py-12">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="mb-1.5 text-4xl font-bold tracking-tight">Contacts</h1>
          <nav className="text-xs text-zinc-500">
            <a href="#" className="hover:text-zinc-800">
              Home
            </a>
            <span className="mx-1.5">/</span>
            <a href="#" className="hover:text-zinc-800">
              Pages
            </a>
            <span className="mx-1.5">/</span>
            <span className="font-medium text-rose-600">Contacts</span>
          </nav>
        </div>

        {/* Contact Form */}
        <div className="mb-14 max-w-2xl">
          <h2 className="mb-6 text-2xl font-bold">Fill up a Form</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold text-zinc-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-3.5 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold text-zinc-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email*"
                required
                className="w-full rounded border border-zinc-200 bg-zinc-50 px-3.5 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold text-zinc-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message Here*"
                required
                className="w-full resize-y rounded border border-zinc-200 bg-zinc-50 px-3.5 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="rounded bg-zinc-900 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Post
            </button>
          </form>
        </div>

        {/* Map & Floating Office Card */}
        <div className="relative overflow-hidden rounded-md border border-zinc-200 sm:h-[420px]">
          <div className="z-10 border-b border-zinc-200 bg-white p-4 sm:absolute sm:left-6 sm:top-6 sm:w-80 sm:rounded-md sm:border-none sm:shadow-xl">
            <div className="mb-3.5 flex gap-1.5 border-b border-zinc-100 pb-2.5">
              {Object.entries(offices).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveOffice(key)}
                  className={`flex-1 rounded border px-2 py-1.5 text-xs font-semibold transition ${
                    activeOffice === key
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="space-y-1.5 text-xs text-zinc-600">
              <p className="text-sm font-semibold text-zinc-900">
                {currentOffice.title}
              </p>
              <p>{currentOffice.address}</p>
              <p>{currentOffice.phone}</p>
              <p>{currentOffice.hours}</p>
            </div>
          </div>

          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
            className="h-[300px] w-full border-0 sm:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}