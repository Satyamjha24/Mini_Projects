import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

const routes: Routes = [
  { path: '', component: BmiCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
