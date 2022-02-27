import React, { useRef } from 'react';
import './FileUpload.scss';

interface FileUploadProps {
    setFile: Function,
    accept: string
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
    const ref: any = useRef<HTMLInputElement>();

    const onChange = (e: any) => {
        setFile(e.target.files[0]);
    }

    return (
        <div
            className='file-upload'
            onClick={() => ref.current.click()}
        >
            <input
                type='file'
                accept={accept}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
}

export default FileUpload;