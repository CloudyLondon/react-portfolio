import React, { useState } from "react";
// import Modal from "./Modal";
const Project = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState([
    {
      name: "Lazeat!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Run Buddy!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "and more...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    // {
    //   name: "Activently",
    //   category: "project",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
  ]);
  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   // setIsModalOpen(!isModalOpen);
  // };
  return (
    // <div>
    //   {isModalOpen && (
    //     <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
    //   )}
    //   <div className="flex-row">
    //     {
    //       (photos.map = currentPhoto((image, i) => (
    //         <img
    //           src={require(`../../assets/${i}.jpg`)}
    //           alt={image.name}
    //           className="img-thumbnail mx-1"
    //           onClick={() => toggleModal(image, i)}
    //           key={image.name}
    //         />
    //       )))
    //     }
    //   </div>
    // </div>
    <div>
      {/* {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )} */}
      <div className="row">
        <div className="card-group ">
          {photos.map((image, i) => (
            <>
              <div className="col-4 bg-success bg-opacity-25 p-3 border ">
                <img
                  src={require(`../../assets/${i}.jpg`)}
                  //src={nerd}
                  alt={image.name}
                  style={{ width: "50%" }}
                  className="card-img-top img-thumbnail p-1"
                  // onClick={() => toggleModal(image, i)}
                  key={image.name}
                />
                <h5>{image.name}</h5>
                <p>{image.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;
