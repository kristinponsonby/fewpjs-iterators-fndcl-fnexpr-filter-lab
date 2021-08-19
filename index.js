//  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//traditional syntax for functions:
// function findMatching(drivers, name) {
//      }
//Arrow function syntax. This is the same as above: 
findMatching = (drivers, name) => {
     return drivers.filter(n => {
         return n.toLowerCase() === name.toLowerCase() 
      }
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
        )
    }
        // Arrow function syntax: 
        // fuzzyMatch = (drivers, string) => {
        //     return drivers.filter(possibleMatch => {
        //         return possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
        //         }
        //     )
        // }

    
        function matchName(drivers, name) {
            return drivers.filter( record => record.name === name)
          }