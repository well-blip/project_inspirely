import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faFilePowerpoint,
  faFileExcel,
  faFileWord,
  faFileImage,
  faFileAudio,
  faFileVideo,
  faFileArchive,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./FileSectionContent.css";
// import firebase from "firebase/app";
import "firebase/storage";

const FilesSectionContent = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [files, setFiles] = useState<
    {
      name: string;
      type: string;
      size: string;
    }[]
  >([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };

  const handleConfirmation = () => {
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).map((file) => ({
        name: file.name,
        type: getFileType(file.name),
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      }));
      setFiles([...files, ...newFiles]);
      setSelectedFiles(null);
    }
  };

  const getFileType = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return "PDF";
      case "pptx":
        return "PowerPoint";
      case "xlsx":
        return "Excel";
      case "docx":
        return "Word";
      case "jpg":
      case "jpeg":
      case "png":
        return "Image";
      case "mp3":
        return "Audio";
      case "mp4":
        return "Video";
      case "zip":
        return "Archive";
      case "js":
        return "Code";
      default:
        return "Unknown";
    }
  };

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "PDF":
        return faFilePdf;
      case "PowerPoint":
        return faFilePowerpoint;
      case "Excel":
        return faFileExcel;
      case "Word":
        return faFileWord;
      case "Image":
        return faFileImage;
      case "Audio":
        return faFileAudio;
      case "Video":
        return faFileVideo;
      case "Archive":
        return faFileArchive;
      case "Code":
        return faFileCode;
      default:
        return null;
    }
  };

  const handleFileClick = (fileName: string) => {
    console.log(`Clicked on file: ${fileName}`);
  };

  return (
    <div className="file-table-container">
      <h3>Files</h3>
      {selectedFiles && (
        <div>
          <h4>Selected Files:</h4>
          <ul>
            {Array.from(selectedFiles).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <button
            onClick={handleConfirmation}
            className="custom-confirm-button"
          >
            Confirm
          </button>
        </div>
      )}
      {!selectedFiles && (
        <input
          type="file"
          accept=".pdf,.pptx,.xlsx,.docx,.jpg,.mp3,.mp4,.zip,.js"
          onChange={handleFileChange}
          multiple
          className="custom-file-input"
        />
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Filename</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr
              key={index}
              className="file-item"
              onClick={() => handleFileClick(file.name)}
              style={{ cursor: "pointer" }}
            >
              <td>
                <FontAwesomeIcon
                  icon={getFileIcon(file.type) || faFilePdf}
                  className="text-primary"
                />
              </td>
              <td className="file-name">{file.name}</td>
              <td className="file-details">
                <span className="file-type">{file.type}</span> -{" "}
                <span className="file-size">{file.size}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilesSectionContent;
