// import App from "../App"

// function PassProps ({firstName,middleName,lastName,age,Country,Profession }){
//   return (
//     <div className="Italy">
//       My brother's name is {firstName} {middleName} {lastName}.
//       He is {age} years old  and he is a {Profession}.
//       He lives in {Country}
//     </div>
//   );
// }
// export default PassProps

function PassProps(props) { 
  return(
    <div className="Italy">
      My brother's name is {props.firstName} { props.middleName} {props.lastName}.
      He is {props.age} years old  and he is an {props.Profession}.
      He lives in {props.Country}
    </div>
  );
}
export default PassProps