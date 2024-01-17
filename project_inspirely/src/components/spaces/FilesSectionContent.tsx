// Inside the component where you render the "Files" section content
import React from "react";
import "./FileSectionContent.css";

const FilesSectionContent = () => {
  // Sample data for files
  const files = [
    { name: "Document.pdf", type: "PDF", size: "2.5 MB" },
    { name: "Presentation.pptx", type: "PowerPoint", size: "5.8 MB" },
    { name: "Spreadsheet.xlsx", type: "Excel", size: "1.2 MB" },
    // Add more files as needed
  ];

  return (
    <div>
      <h3>Files</h3>
      <table className="file-table">
        <thead>
          <tr>
            <th>Filename</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index} className="file-item">
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
