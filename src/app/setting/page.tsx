"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  const [apiKeys, setApiKeys] = useState({
    meesho: "",
    amazon: "",
    flipkart: "",
  });

  const handleInputChange = (platform: "meesho" | "amazon" | "flipkart", value: string) => {
    setApiKeys((prev) => ({ ...prev, [platform]: value }));
  };

  const handleSaveKeys = () => {
    alert("API Keys saved successfully!");
    console.log("Saved API Keys:", apiKeys);
  };

  const handleDeleteKey = (platform: "meesho" | "amazon" | "flipkart") => {
    const confirmed = confirm(
      `Are you sure you want to delete the API key for ${platform}?`
    );
    if (confirmed) {
      setApiKeys((prev) => ({ ...prev, [platform]: "" }));
      alert(`${platform.charAt(0).toUpperCase() + platform.slice(1)} API key deleted.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Go Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
        >
          Go Back
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

        {/* API Integration Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">API Integration</h2>
          <p className="text-sm text-gray-500 mb-6">
            Add or manage your API keys for different platforms.
          </p>

          {/* API Key Inputs */}
          {["meesho", "amazon", "flipkart"].map((platform) => (
            <div key={platform} className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 capitalize">{platform} API Key</h3>
              <div className="mt-3 flex items-center gap-4">
                <input
                  type="text"
                  value={apiKeys[platform as keyof typeof apiKeys]}
                  onChange={(e) => handleInputChange(platform as keyof typeof apiKeys, e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-md bg-gray-50 text-gray-600 focus:ring focus:ring-blue-300"
                  placeholder={`Enter ${platform} API Key`}
                />
                <button
                  onClick={() => handleDeleteKey(platform as keyof typeof apiKeys)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={handleSaveKeys}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            Save API Keys
          </button>
        </section>

        {/* Account Details Section */}
        <section className="mb-10 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Account Details</h2>
          <p className="text-sm text-gray-500 mb-6">Update your personal information.</p>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                defaultValue="+123 456 7890"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Danger Zone */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Danger Zone</h2>
          <p className="text-sm text-gray-500 mb-6">
            Delete your account permanently. This action cannot be undone.
          </p>
          <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition">
            Delete Account
          </button>
        </section>
      </div>
    </div>
  );
}
