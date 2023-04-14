import { Component } from '@angular/core';
import { Gadget } from 'src/app/model/gadget';
import { GadgetService } from 'src/app/service/gadget.service';
import { Router } from '@angular/router';
import { GadgetType } from 'src/app/model/gadget-type';
import { GadgetTypeService } from 'src/app/service/gadget-type.service';

@Component({
  selector: 'app-gadget-list',
  templateUrl: './gadget-list.component.html',
  styleUrls: ['./gadget-list.component.css']
})
export class GadgetListComponent {
  gadgets! : Gadget[];
  gadget! : Gadget;
  gadgetTypes! : GadgetType[];
  showGadgetTypes : boolean = false;

  constructor(
    private service: GadgetService, 
    private router : Router,
    private gadgetTypeService : GadgetTypeService
  ) {
    this.clearForm();
    this.gadgetTypes = [];
  }

  gadgetTypeList() {
    this.showGadgetTypes = !this.showGadgetTypes
    if (!this.showGadgetTypes) return;
    this.gadgetTypeService.findAll().subscribe(data => {
      this.gadgetTypes = data;
    });
  }

  clearForm() {
    this.gadget = new Gadget();
  }

  setType(gadgetType : GadgetType) {
    this.gadget.gadgetType = gadgetType; 
  }

  editGadget(gadget : Gadget) {
    this.gadget = gadget;
  }

  addGadget() {
    if (this.gadget.name === undefined || this.gadget.name.length < 4) {
      alert("Name is not available");
    }
    if (this.gadget.guarantee === undefined || this.gadget.guarantee <= 0) {
      alert("Guarantee is not available");
    }
    if (this.gadget.gadgetType === null || this.gadget.gadgetType === undefined) {
      alert("Gadget type is not chosen");
    }
    this.service.post(this.gadget).subscribe(() => this.router.navigate(['gadgets']));
  }

  delete(gadget: Gadget) {
    this.service.delete(gadget.id).subscribe();
    this.gadgets.splice(this.gadgets.indexOf(gadget), 1);
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.gadgets = data;
    });
  }
}
