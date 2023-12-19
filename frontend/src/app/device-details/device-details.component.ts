import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent {
device: any;
addComment() {
throw new Error('Method not implemented.');
}
newComment: any;

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  phone: any; // Declare the 'phone' property

  ngOnInit() {
    const phoneId = this.route.snapshot.paramMap.get('phoneId');
    this.service.getPhoneDetails(phoneId).subscribe(
      (data: any) => {
        this.device = data;
        console.log(this.device);
      }
    );
  }

}
