import "./body.css";

function Body() {
  const cards = [
    // Dummy data for cards
    { title: "MA210 Algebra 1", content: "New: Class test on Tuesday" },
    { title: "CH230 Chemistry", content: "New: Assignment Organic Chem" },
    // Add more dummy card data as needed
  ];

 return (
    <div className="main-content" id="mainContent">
      <div className="content-header">
        <h2 className="spaces-title">Spaces</h2>
        <div className="header-buttons">
          <button className="button">+ New Group</button>
          <button className="button">...</button>
        </div>
      </div>
      <hr className="divider" /> {/* Divider line */}
      <div className="spaces-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
