import "./body.css";
import math from "../../assets/math.jpeg";

function Body() {
  const cards = [
    // Dummy data for cards
    { title: "MA210 Algebra 1", content: "New: Class test on Tuesday", backgroundImage: `url(${math})` },
    { title: "CH230 Chemistry", content: "New: Assignment Organic Chem" },
    { title: "CS50 Computer Science", content: "New: Mock test on Monday" },
    { title: "PS120 Physics", content: "New: Class test on Tuesday" },
    { title: "EN050 English FL", content: "New: Assignment due on Wednesday" },
    { title: "BO200 Biology 1", content: "New: New assignment uploaded" },
  ];

  return (
    <div className="main-content" id="mainContent">
      <div className="content-header">
        <h2 className="spaces-title">Spaces</h2>
        <div className="header-buttons">
          <button className="button">+ New Group</button>
          <button className="button">Ahmed, Hamid</button>
        </div>
      </div>
      <hr className="divider" /> {/* Divider line */}
      <div className="spaces-grid">
        {cards.map((card, index) => (
          <div className="card" key={index} style={{ backgroundImage: card.backgroundImage }}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
