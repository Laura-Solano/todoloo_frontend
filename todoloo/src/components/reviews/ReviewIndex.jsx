// import {
//     Typography,
//     Button,
//     Box,
//     Select,
//     MenuItem,
//     Container,
//     Divider,
//   } from "@material-ui/core";
//   import React, { useState, useEffect, useRef } from "react";
//   import { useSession } from "../../context/sessionContext";

//   import MainContentContainer from "../common/MainContentContainer";
//   import RecipeCardArea from "../common/RecipeCardArea";
//   import RecipeCardContainer from "../common/RecipeCardContainer";
//   import RecipeCard from "../common/RecipeCard";
//   import RecipeCreate from "./RecipeCreate";

//   const RecipeIndex = (props) => {
//     const [recipes, setRecipes] = useState([]);
//     const [error, setError] = useState(false);
//     const [message, setMessage] = useState("");
//     const [open, setOpen] = useState(false);
//     const { sessionToken } = useSession();

//     const greeting = () => {
//       const hours = new Date().getHours();
//       return hours < 12
//         ? "Good morning!"
//         : hours >= 12 && hours <= 18
//         ? "Good afternoon!"
//         : "Good evening!";
//     };

//     useEffect(() => {
//       let mounted = true;
//       (async () => {
//         try {
//           const { status, json } = await fetchPublicRecipes(sessionToken);
//           if (status === 200) {
//             if (mounted) {
//               setRecipes(json);
//               setMessage("");
//               setError(false);
//             }
//           } else if (status === 403) {
//             if (mounted) return;
//             setMessage(json.message);
//             setError(true);
//           }
//           if (status === 404) {
//             if (mounted) {
//               setMessage(json.message);
//               setError(true);
//             }
//           }
//         } catch (err) {
//           if (mounted) {
//             setMessage(
//               "Uh-oh something on our end went wrong. Try refreshing to view this page"
//             );
//             setError(true);
//           }
//         }
//       })();
//       return () => (mounted = false);
//     }, [sessionToken]);

//     return (
//       <>
//         <MainContentContainer>
//           <Container className="homeMain" sx={{ pb: 2 }}>
//             <Typography variant="h2" color="textPrimary" sx={{ mt: 5 }}>
//              Review
//             </Typography>
//             <Button
//               type="submit"
//               color="secondary"
//               variant="contained"
//               onClick={}
//             >
//               Add a recipe
//             </Button>
//             <RecipeCreate />
//           </Container>
//           <Divider flexItem />
//           <RecipeCardArea>
//             {recipes.map((recipe) => (
//               <RecipeCardContainer key={recipe.id}>
//                 <RecipeCard recipe={recipe} />
//               </RecipeCardContainer>
//             ))}
//           </RecipeCardArea>
//         </MainContentContainer>
//       </>
//     );
//   };

//   export default RecipeIndex;
