import React from 'react'
// conext is a global variable to understand for now 
 const UserContext=React.createContext()

 export default UserContext;

 // creating context we have to create a provider also with it 

//  <UserContext>
//     <login></login>
//     <Card>
//         <Data/>
//     </Card>
//  </UserContext>

//understand here by writing usercontext in fragments it gives the acces that whatever w write inside the those fragments , the inner variables can use Usercontext variable 

