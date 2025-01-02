import React from "react";

export default function UserImage() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* https://media.licdn.com/dms/image/v2/D4D03AQGZm7HQ1__MgA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669030485855?e=1741219200&v=beta&t=kyjB3OvOHQikggxN7W54480byFKfFhQNu-es3mXbKps */}
      <img
        src="https://unavatar.io/banner.png"
        className="h-24 w-24 rounded-full outline outline-1 outline-offset-2 object-cover outline-stone-300"
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold">Yogesh Vishwakarma</h1>
        <p className="text-center italic font-thin">i write *business* code</p>
      </div>
    </div>
  );
}
