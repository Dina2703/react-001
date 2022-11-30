// function MainContent() {
//   return <h1>I'm learning React!</h1>;
// }

// ReactDOM.render(
//   <>
//     <h3>Hi</h3>
//     <MainContent />
//   </>,
//   document.getElementById("root")
// );

const h1 = document.createElement("h1");
h1.textContent = "This is an imperitive way to program";
h1.className = "header";
document.getElementById("root").appendChild(h1);
