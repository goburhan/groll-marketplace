import React, { useState } from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

const Zone = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    place-items: center;
    border: 1px solid ${({ theme }) => theme.gray};
    padding: 4rem;
    border-radius: 12px;
    p {
        color: ${({ theme }) => theme.gray};
        font-size: 14px;
    }
`;

export default function DragDrop() {
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = (acceptedFiles) => {
        setFileNames(acceptedFiles.map((file) => file.name));
        console.log(acceptedFiles);
    };

    return (
        <div className="App">
            <Dropzone onDrop={handleDrop} minSize={1024} maxSize={3072000}>
                {({
                    getRootProps,
                    getInputProps,
                    isDragActive,
                    isDragAccept,
                    isDragReject,
                }) => {
                    // eslint-disable-next-line no-nested-ternary
                    const additionalClass = isDragAccept
                        ? 'accept'
                        : isDragReject
                            ? 'reject'
                            : '';

                    return (
                        <Zone
                            {...getRootProps({
                                className: `dropzone ${additionalClass}`,
                            })}
                        >
                            <input {...getInputProps()} />
                            <span>
                                {isDragActive ? (
                                    <img src="/images/Staticlogos/Steptwoupload.svg" />
                                ) : (
                                    <img src="/images/Staticlogos/Steptwoupload.svg" />
                                )}
                            </span>
                            <p>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
                        </Zone>
                    );
                }}
            </Dropzone>
            <div>
                <strong>Files:</strong>
                <ul>
                    {fileNames.map((fileName) => (
                        <li key={fileName}>{fileName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
