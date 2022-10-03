import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
    FileUploadContainer,
    FormField,
    DragDropText,
    FilePreviewContainer,
    ImagePreview,
    PreviewContainer,
    PreviewList,
    FileMetaData,
    RemoveFileIcon,
    InputLabel,
} from '../../components/Auth/FileUploader/StyledFile';

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

// eslint-disable-next-line max-len
const convertNestedObjectToArray = (nestedObj) => Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

interface prop {
    [x: string]: any;
    label?: any;
    updateFilesCb?: any;
    maxFileSizeInBytes?: number;
}
const FileUpload: React.FC<prop> = ({
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
}) => {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});

    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const addNewFiles = (newFiles) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const file of newFiles) {
            if (file.size <= maxFileSizeInBytes) {
                if (!otherProps.multiple) {
                    return { file };
                }
                files[file.name] = file;
            }
        }
        return { ...files };
    };

    // const addNewFiles = (newFiles) => {
    //     newFiles.forEach((file) => {
    //         if (file.size <= maxFileSizeInBytes) {
    //             if (!otherProps.multiple) {
    //                 return { file };
    //             }
    //             files[file.name] = file;
    //         }
    //         return { ...files };
    //     });
    // };

    const callUpdateFilesCb = (files) => {
        const filesAsArray = convertNestedObjectToArray(files);
        updateFilesCb(filesAsArray);
    };

    const handleNewFileUpload = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles.length) {
            const updatedFiles = addNewFiles(newFiles);
            setFiles(updatedFiles);
            callUpdateFilesCb(updatedFiles);
        }
    };

    const removeFile = (fileName) => {
        delete files[fileName];
        setFiles({ ...files });
        callUpdateFilesCb({ ...files });
    };

    const Drag = styled(DragDropText)`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
            min-width: 28px;
            min-height: 28px;
            margin-bottom: 10px;
        }
    `;

    return (
        <>
            <FileUploadContainer>
                <InputLabel>{label}</InputLabel>

                <Drag>
                    <img
                        src="/images/Staticlogos/Miniupload.svg"
                        alt="uploadFile"
                    />
                    PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                </Drag>

                <FormField
                    type="file"
                    ref={fileInputField}
                    onChange={handleNewFileUpload}
                    title=""
                    value=""
                    {...otherProps}
                ></FormField>
            </FileUploadContainer>
            <FilePreviewContainer>
                <PreviewList>
                    {Object.keys(files).map((fileName, index) => {
                        const file = files[fileName];
                        const isImageFile = file.type.split('/')[0] === 'image';
                        return (
                            <PreviewContainer key={fileName}>
                                <div>
                                    {isImageFile && (
                                        <ImagePreview
                                            src={URL.createObjectURL(file)}
                                            alt={`file preview ${index}`}
                                        />
                                    )}
                                    <FileMetaData isImageFile={isImageFile}>
                                        <span>{file.name}</span>
                                        <aside>
                                            <span>
                                                {convertBytesToKB(file.size)} kb
                                            </span>
                                            <RemoveFileIcon
                                                // className="fas fa-trash-alt"
                                                onClick={() => removeFile(fileName)
                                                }
                                            />
                                        </aside>
                                    </FileMetaData>
                                </div>
                            </PreviewContainer>
                        );
                    })}
                </PreviewList>
            </FilePreviewContainer>
        </>
    );
};

export default FileUpload;
