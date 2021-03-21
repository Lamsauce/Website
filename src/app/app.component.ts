import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  name = "LILY LAM";
  categoryA = "ABOUT";
  categoryB = "PORTFOLIO";
  categoryC = "CONTACT ME";
  canViewA = false;
  canViewB = false;
  canViewC = false;

  onViewClickA() {
    this.canViewA = !this.canViewA;

    if (this.canViewA == true) {
      if (this.canViewB == true || this.canViewC == true) {
        this.canViewB = false;
        this.canViewC = false;
      }
    }
  }

  onViewClickB() {
    this.canViewB = !this.canViewB;

    if (this.canViewB == true) {
      if (this.canViewA == true || this.canViewC == true) {
        this.canViewA = false;
        this.canViewC = false;
      }
    }
  }

  onViewClickC() {
    this.canViewC = !this.canViewC;

    if (this.canViewC == true) {
      if (this.canViewA == true || this.canViewB == true) {
        this.canViewA = false;
        this.canViewB = false;
      }
    } 
  }
}