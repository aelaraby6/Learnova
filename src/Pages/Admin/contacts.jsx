import React, { useState, useEffect } from "react";
import { Mail, Plus } from "lucide-react";
import { get } from "../../utils/api";

const ContactsSection = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);

      //   const token = localStorage.getItem("token");

      const response = await get(
        "contacts",
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbGVhcm5vdmEtYXBpLXByb2R1Y3Rpb24udXAucmFpbHdheS5hcHAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE3NjIwMjI2MTcsImV4cCI6MTc2MjAyNjIxNywibmJmIjoxNzYyMDIyNjE3LCJqdGkiOiJab1Bub25mdEJWWXlTcEVSIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5pJWTx6eIdWqETG2K17bOABNtU5V2xI3__lnBIsSogs"
      );

      if (response.status && response.contacts) {
        setContacts(response.contacts);
      } else if (Array.isArray(response)) {
        setContacts(response);
      } else if (response.data) {
        setContacts(response.data);
      }
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError(err.message || "Failed to fetch contacts");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-8">
        <div className="flex items-center justify-center">
          <div className="text-gray-600">Loading contacts...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-8">
        <div className="flex items-center justify-center">
          <div className="text-red-600">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div
        className="p-6 border-b border-gray-100"
        style={{
          background: "linear-gradient(135deg, #e1edfb 0%, #ffffff 100%)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-xl"
              style={{ backgroundColor: "#0f437f" }}
            >
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Contacts</h2>
              <p className="text-sm text-gray-600">
                {contacts.length} total contacts
              </p>
            </div>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all hover:opacity-90 shadow-md"
            style={{ backgroundColor: "#0f437f" }}
          >
            <Plus size={20} />
            Add Contact
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead style={{ backgroundColor: "#e1edfb" }}>
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                NAME
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                EMAIL
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                PHONE
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 text-sm">
                MESSAGE
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-8 px-6 text-center text-gray-500">
                  No contacts found
                </td>
              </tr>
            ) : (
              contacts.map((contact, index) => (
                <tr
                  key={contact.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index === contacts.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                        style={{ backgroundColor: "#064ea4" }}
                      >
                        {contact.name
                          ? contact.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()
                          : "N/A"}
                      </div>
                      <span className="font-medium text-gray-900">
                        {contact.name || "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">
                    {contact.email || "N/A"}
                  </td>
                  <td className="py-4 px-6 text-gray-600">
                    {contact.phone || "N/A"}
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700 line-clamp-2">
                      {contact.message || contact.company || "N/A"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsSection;
