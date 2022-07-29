import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styled from "styled-components";

export default function SingleUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const UploadButton = styled.button`
    font-family: "Popins", sans-serif;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #484d57;
    border-radius: 25px;
    padding: 12px 16px;
    margin-top: 16px;
    color: ${({ theme }) => theme.linkItems};
  `;
  //   interface flex {
  //     direction?: string;
  //   }
  //   const Flex = styled.div<flex>`
  //     display: flex;
  //     justify-content: space-between;
  //     color: ${( props ) => props.direction}; `
  //     ;

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <UploadButton
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload
            </UploadButton>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <UploadButton onClick={() => onImageUpdate(index)}>
                    Update
                  </UploadButton>
                  {/* <button onClick={() => onImageRemove(index)}>Remove</button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
