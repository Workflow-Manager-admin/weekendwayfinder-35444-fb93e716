import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AITripSuggestionsComponent } from '../ai-trip-suggestions/ai-trip-suggestions.component';
import { CommonModule } from '@angular/common';

/**
 * PUBLIC_INTERFACE
 * TripPlannerComponent displays the trip planning form and hands user input to AI Trip Suggestions.
 */
@Component({
  selector: 'ww-trip-planner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AITripSuggestionsComponent],
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css'],
})
export class TripPlannerComponent {
  showSuggestions = false;
  formData: any = null;
  plannerForm: FormGroup;

  moods = [
    { label: 'Relaxing', value: 'relaxing' },
    { label: 'Adventurous', value: 'adventurous' },
    { label: 'Cultural', value: 'cultural' },
    { label: 'Romantic', value: 'romantic' },
    { label: 'Family', value: 'family' },
    { label: 'Nature', value: 'nature' },
    { label: 'Foodie', value: 'foodie' },
    { label: 'Wellness', value: 'wellness' },
    { label: 'Party', value: 'party' }
  ];

  constructor() {
    const fb = new FormBuilder();
    this.plannerForm = fb.group({
      distance: [50, [Validators.required, Validators.min(5), Validators.max(200)]],
      mood: ['relaxing', Validators.required],
      budget: [150, [Validators.required, Validators.min(30)]],
      location: ['', Validators.required],
    });
  }

  // PUBLIC_INTERFACE
  submitPlanner() {
    if (this.plannerForm.valid) {
      this.formData = this.plannerForm.value;
      this.showSuggestions = true;
    }
  }
}
