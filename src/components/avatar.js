import React from "react"
import './avatar.css';

const Avatar = ({ img }) => {
  return (
    <div className="avatar_img">
      <img
        src={img}
        alt="avatar"
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          objectFit: "cover",
          margin: 0,
        }}
      />
    </div>
  )
}

export default Avatar
