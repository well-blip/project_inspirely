// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebars from "./sidebar/sidebar";
import CardColumnsComponent from "./cardColumns/cardCols";
import BottomActionsCard from "./cardColumns/differentCard";
import FAQCard from "./cardColumns/FAQCard";
import DateCalendarValue from "./Calender/calender";
import DecoratedList from "./list/todolist";
import { Grid } from "@mui/material";
import CheckboxListSecondary from "./list/checkBoxList";
import PrimarySearchAppBar from "./appbar/Appbar";
import OutlinedCard from "./cardColumns/WordOftheday";
import Variants from "./cardColumns/paperCard";
import InputVariants from "./postsBar/textbox";
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <div class="timeline-header">
        <span class="title">Your Timeline</span>, created for you
      </div>
      {/* <InputVariants /> */}
      <Sidebars />
      <Grid container spacing={4}>
        <Grid item md={4}>
          <CardColumnsComponent />
          <BottomActionsCard />
          <CardColumnsComponent />
        </Grid>
        <Grid item md={4} spacing={3}>
          <FAQCard />
          <div className="Inline Cards" style={{ display: "flex" }}>
            <OutlinedCard />
            <Variants />
            <div className="dotted-line" />
          </div>
        </Grid>
        <Grid
          item
          md={4}
          direction={"column"}
          justifyContent="space-evenly"
          display="flex"
          flexDirection="flex-start"
          alignItems="flex-end"
        >
          <div
            className="checklist"
            style={{
              marginRight: "25px",
              marginTop: "30px",
              marginBottom: "100px",
              width: "70%",
              maxWidth: {
                xs: 300,
                md: 400,
              } /* Adjust width based on screen size */,
              bgcolor: "#FEF9C8",
            }}
          >
            <CheckboxListSecondary />
          </div>
          <div className="calender" style={{ marginRight: "10px" }}>
            <DateCalendarValue />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
