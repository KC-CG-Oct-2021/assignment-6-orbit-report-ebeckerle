export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	// could not figure out if I need to use a boolean variable in order to set the CSS warning class on for the Space Dbris
	spaceDebris: boolean = true;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		//meant to return true only when a Satellite object's type is 'Space Debris', returns false otherwise
		//- need to fix this method
		// can we put a parameter in for type?  
		// ie -

		// isSpaceDebris(string: satelliteType): boolean {
		// 	if (satelliteType === "Space Debris"){ 
		// 		//use the method to add a warning class onto the table cell - use Angular attribute directive (3)to accomplish this
		// 		return true;
		// 	} else {
		// 		return false;
		// 	}

		//or maybe - 
		// isSpaceDebris(): boolean {
			if (this.type === "Space Debris"){ 
				//use the method to add a warning class onto the table cell - use Angular attribute directive (3)to accomplish this
				return true;
			} else {
				return false;
			}
		

   }

}

// TODO 3a: fix isSpaceDebris check
