// function PropsClass({studentOne,studentTwo,course}) {
//     return (
//         <div>
//             There are two students in the class {studentOne} and {studentTwo}  {course}
//         </div>
//     )
// }
// export default PropsClass



// Passing props from parentcomponent child Component
// function PropsClass(Props) {
//     return (
//         <div>
//            <h1> We have been assigned a new tutor by name; {Props.tutorOne} to stand  in for {Props.tutorTwo} in  RJS course.</h1>
//         </div>
//     );
// }

function PropsClass({surName,firstName,middleName}) {
    return (
        <div className="Div1">
            My name is {surName} , {firstName}  { middleName }
        </div>
    )
}
export default PropsClass


// // destructuring of props

// function PropsClass({tutorOne,tutorTwo,Course}) {
//     return (
//         <div>
//             We have been assigned a new tutor by name; {Props.tutorOne} to stand  in for {Props.tutorTwo} in  RJS.{Course}
//         </div>
//     );
// }

// export default PropsClass
