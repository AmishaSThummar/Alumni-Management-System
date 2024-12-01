import React from 'react'

const Profile = () => {
  return (
    <>
      return (
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Profile Management Form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block font-medium mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              placeholder="Enter your address"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="graduation-date" className="block font-medium mb-2">
              Year of Graduation
            </label>
            <input
              type="date"
              id="graduation-date"
              name="graduation-date"
              defaultValue="2025-05-09"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="department" className="block font-medium mb-2">
              Department
            </label>
            <select
              id="department"
              name="department"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select your department</option>
              <option value="computer-science">Computer Science</option>
              <option value="mechanical">Mechanical</option>
              <option value="electrical">Electrical</option>
              <option value="civil">Civil</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block font-medium mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="linkedin" className="block font-medium mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              placeholder="Enter your LinkedIn profile URL"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">Are you an alumni?</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="alumni"
                  value="yes"
                  className="mr-2"
                  onChange={() => setIsAlumni(true)}
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="alumni"
                  value="no"
                  className="mr-2"
                  onChange={() => setIsAlumni(false)}
                  defaultChecked
                />
                No
              </label>
            </div>
          </div>

          {isAlumni && (
            <div className="mb-4">
              <label
                htmlFor="current-company"
                className="block font-medium mb-2"
              >
                Current Company
              </label>
              <input
                type="text"
                id="current-company"
                name="current-company"
                placeholder="Enter your current company"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label
                htmlFor="experience"
                className="block font-medium mt-4 mb-2"
              >
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                placeholder="Enter years of experience"
                min="0"
                step="0.1"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="profile-photo" className="block font-medium mb-2">
              Profile Photo
            </label>
            <input
              type="file"
              id="profile-photo"
              name="profile-photo"
              accept="image/*"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="skills" className="block font-medium mb-2">
              Skills
            </label>
            <textarea
              id="skills"
              name="skills"
              rows="3"
              placeholder="List your skills (comma-separated)"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile
