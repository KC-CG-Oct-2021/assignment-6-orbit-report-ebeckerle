import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }

 countTotal(){
	 //add up the current totals for each type
	 let total = this.countByType("Space Debris") + this.countByType("Communication") + this.countByType("Probe") + this.countByType("Positioning") + this.countByType("Space Station") + this.countByType("Telescope");
	 return total;
 }

 trialFunction3(logMe){
	console.log("fox");
	console.log(typeof logMe);
	console.log(logMe[1]);
	// console.log(logMe.value);
}

}