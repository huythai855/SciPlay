// // import React from 'react';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';

// function Lesson({ history }) {

//   const [data, setData] = useState([]);
//   const { id } = useParams();
//   console.log("Lesson id: ", id);
//   let test_content;

//   useEffect(() => {
//     axios.get(`https://node-de-vcl-huythai855.vercel.app/api/lesson?id=${id}`)
//       .then(response => {
//         setData(response.data);
//         const { content } = data;
//         test_content = response.data.content;
//         console.log("Test:", typeof test_content);
//         console.log("Data: ", data);
//         const obj = JSON.parse(data[0].content);


//         console.log("OBJ: ", obj)
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);





//   return (
//     <div>
//       {/* <h2>{name}</h2> */}
//       <h2>{test_content}</h2>
//       <Link to="/">Back home</Link>
//       <br />
//       <br />

//       <ul>
//         {data.map(item => (
//           <li key={item.lesson_id}>
//             Tên bài học: {item.name}
//             <br />
//             Độ dài: {item.description}
//             <br />
//             Loại bài học: {item.type}
//             <br />
//             Nội dung: {item.content}
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// }

// //FLASHCARD HTML AND FLIP FUNCTION
// {/* <div
//   className={`flashcard ${className}`}
//   onClick={() => {
//     dispatch("click");
//   }}
// >
//   <div className="overlap">
//     <div className={`front ${state.property1}`}>
//       <div className="quest">
//         <div className="overlap-group">
//           {state.property1 === "flashcard-flipped" && <div className="text-wrapper">A là</div>}

//           {state.property1 === "flashcard-unflipped" && <p className="quest-2">1 chữ cái trong bảng chữ cái</p>}
//         </div>
//       </div>
//     </div>
//     <div className={`back property-1-0-${state.property1}`}>
//       <div className="quest">
//         <div className="quest-wrapper">
//           {state.property1 === "flashcard-flipped" && <p className="text-wrapper">1 chữ cái trong bảng chữ cái</p>}

//           {state.property1 === "flashcard-unflipped" && <div className="quest-2">A là</div>}
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}

// function reducer(state, action) {
//   if (state.property1 === "flashcard-flipped") {
//     switch (action) {
//       case "click":
//         return {
//           property1: "flashcard-unflipped",
//         };
//     }
//   }

//   if (state.property1 === "flashcard-unflipped") {
//     switch (action) {
//       case "click":
//         return {
//           property1: "flashcard-flipped",
//         };
//     }
//   }

//   return state;
// }

// Flashcard.propTypes = {
//   property1: PropTypes.oneOf(["flashcard-flipped", "flashcard-unflipped"]),
// };

// export default Lesson;
