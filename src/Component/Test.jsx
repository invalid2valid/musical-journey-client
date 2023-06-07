import React from "react";

const Test = () => {
  const runfun = (e) => {
    e.preventDefault();
    // const form = e.target;
    const photo = e.target.photo.files[0];
    const formData = new FormData();
    formData.append("image", photo);

    console.log("fromdata", formData);
    const url =
      "https://api.imgbb.com/1/upload?key=ffdfe5e4bf8343c330ab6b652b624de0";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData.data.url);
      });

    console.log(photo);
  };

  return (
    <div>
      <form onSubmit={runfun}>
        <input type="file" name="photo" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Test;
