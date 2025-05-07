import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user ,setUser} = use(AuthContext);
  const { displayName, email, photoURL } = user;
  const { updateUserInformation } = use(AuthContext);
  const [editProfile, setEditProfile] = useState(false);

  const handlerUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    if (name.trim() === "" || photoUrl.trim() === "") {
      toast.error("Please fill in both Name and Email fields.");
      return;
    }

    const userData = {
      displayName: name,
      photoURL: photoUrl,
    };
    updateUserInformation(userData)
      .then(() => {
        toast.success("Update Success");
        setUser((prev)=>({...prev,...userData}));
        setEditProfile((prev) => !prev);
      })
      .cacth((err) => {
        toast.error(err.code);
      });

    e.target.reset();
  };
  return (
    <div className="min-h-md flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
        <div className="space-y-2 text-center">
          <div className="avatar w-24 h-24 avatar-online ">
            <img
              src={photoURL}
              alt="Profile"
              className="mx-auto ring-2 ring-orange-400 rounded-full  object-cover"
            />
          </div>
          <p>
            <strong>Name:</strong> {displayName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
        <div
          onClick={() => setEditProfile((prev) => !prev)}
          className="place-items-center "
        >
          <p className="flex gap-2 cursor-pointer items-center bg-gray-200 w-fit px-3 py-1 rounded-2xl text-md font-semibold ">
            <BiEdit size={20} />
            Edit Profile
          </p>
        </div>

        {editProfile && (
          <div className=" border-t pt-4 space-y-4">
            <h3 className="text-xl font-semibold">🔄 Update Profile</h3>
            <form onSubmit={handlerUpdateProfile} className="fieldset ">
              {/* Name field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              {/* PhotoUrl fied */}
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photoUrl"
                className="input"
                placeholder="Photo Url"
              />
              <button
                className="btn text-white hover:bg-white hover:text-black  bg-[#ff8904] mt-4"
              >
                Update
              </button>
              <button
                onClick={() => setEditProfile((prev) => !prev)}
                type="button"
                className="btn text-black  hover:border-orange-500"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
