import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
})
export class BmiCalculatorComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number | undefined;

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
    }
  }

  getBMICategory() {
    if (this.bmi === undefined) {
      return 'Unknown';
    }
  
    if (this.bmi < 18.5) {
      return 'Underweight';
    } else if (this.bmi < 24.9) {
      return 'Normal Weight';
    } else if (this.bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }

  getCSSClassForBMICategory(category: string) {
    switch (category) {
      case 'Underweight':
        return 'text-red-600'; // Red color for underweight
      case 'Normal Weight':
        return 'text-green-600'; // Green color for normal weight
      case 'Overweight':
        return 'text-orange-600'; // Yellow color for overweight
      case 'Obese':
        return 'text-red-600'; // Red color for obese
      default:
        return 'text-gray-600'; // Default color for unknown category
    }
  }

  getCSSClassForBG(category: string) {
    switch (category) {
      case 'Underweight':
        return 'bg-red-100'; // Red color for underweight
      case 'Normal Weight':
        return 'bg-green-100'; // Green color for normal weight
      case 'Overweight':
        return 'bg-yellow-100'; // Yellow color for overweight
      case 'Obese':
        return 'bg-red-100'; // Red color for obese
      default:
        return 'bg-gray-100'; // Default color for unknown category
    }
  }
}