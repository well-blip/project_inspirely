// FilesSectionContent.tsx
import React from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "./FileSectionContent.css";

const FilesSectionContent = () => {
  const files = [
    { name: "Stage2_Report.pdf", type: "PDF", size: "2.5 MB" },
    { name: "Pitch.pptx", type: "PowerPoint", size: "5.8 MB" },
    { name: "TaskDivision.xlsx", type: "Excel", size: "1.2 MB" },
    { name: "DesignSpec.docx", type: "Word", size: "3.0 MB" },
    { name: "ProjectTimeline.pdf", type: "PDF", size: "1.8 MB" },
    { name: "ClientFeedback.docx", type: "Word", size: "2.7 MB" },
    { name: "BudgetOverview.xlsx", type: "Excel", size: "0.9 MB" },
    { name: "Proposal.pdf", type: "PDF", size: "4.2 MB" },
    { name: "MarketingPlan.pptx", type: "PowerPoint", size: "6.5 MB" },
    { name: "VacationPhoto.jpg", type: "Image", size: "4.5 MB" },
    { name: "MusicPlaylist.mp3", type: "Audio", size: "6.2 MB" },
    { name: "DemoVideo.mp4", type: "Video", size: "10.1 MB" },
    { name: "BackupFiles.zip", type: "Archive", size: "8.7 MB" },
    { name: "JavaScriptCode.js", type: "Code", size: "0.8 MB" },
  ];

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
