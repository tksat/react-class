import React from "react"

const ImageList = ({ imageUrls }) => {
  const list = imageUrls.map(url => {
    return (
      <li key={url}>
        <img src={url} alt="" />{url}
      </li>
    )
  })

  return <ul>{list}</ul>
}

export default ImageList