import { Component } from '@angular/core';
import { GadgetType } from 'src/app/model/gadget-type';
import { GadgetTypeService } from 'src/app/service/gadget-type.service';

@Component({
  selector: 'app-gadget-type-list',
  templateUrl: './gadget-type-list.component.html',
  styleUrls: ['./gadget-type-list.component.css']
})
export class GadgetTypeListComponent {
  gadgetTypes! : GadgetType[];
  gadgetType! : GadgetType;

  constructor(private service: GadgetTypeService) {
    this.gadgetType = new GadgetType();
  }

  addGadgetType() {
    this.updateGadgetType(this.gadgetType);
  }

  updateGadgetType(gadgetType : GadgetType) {
    if (gadgetType.name === undefined || gadgetType.name.length < 4) {
      console.log(gadgetType.name);
      
      alert("Name is not available");
    }
    this.service.post(gadgetType).subscribe(() => window.location.reload());
  }

  delete(gadgetType: GadgetType) {
    this.service.delete(gadgetType.id).subscribe();
    this.gadgetTypes.splice(this.gadgetTypes.indexOf(gadgetType), 1);
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.gadgetTypes = data;
    });
  }
}
