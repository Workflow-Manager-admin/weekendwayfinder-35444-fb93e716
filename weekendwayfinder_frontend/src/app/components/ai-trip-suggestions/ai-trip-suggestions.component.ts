import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type MoodType =
  | 'relaxing'
  | 'adventurous'
  | 'cultural'
  | 'romantic'
  | 'family'
  | 'nature'
  | 'foodie'
  | 'wellness'
  | 'party';

/**
 * PUBLIC_INTERFACE
 * AITripSuggestionsComponent: Shows mock/simulated AI trip suggestions given planner criteria.
 */
@Component({
  selector: 'ww-ai-trip-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-trip-suggestions.component.html',
  styleUrls: ['./ai-trip-suggestions.component.css']
})
export class AITripSuggestionsComponent {
  @Input() criteria!: { mood: MoodType; distance: number; budget: number; location: string } | null;

  // PUBLIC_INTERFACE
  get suggestions() {
    if (!this.criteria) return [];

    // New moods data
    const moodToPlace: Record<MoodType, string[]> = {
      relaxing: ['Lake Serenity', 'Countryside Spa Retreat'],
      adventurous: ['Forest Trail Hiking', 'Mountain Biking Park'],
      cultural: ['Art District Tour', 'Historic Town Exploration'],
      romantic: ['Winery Tour & Stay', 'Cozy Riverside Lodge'],
      family: ['Theme Fun Park', 'Interactive Science Museum'],
      nature: ['Scenic Canyon Walk', 'Wildflower Meadow Outing'],
      foodie: ['Downtown Food Crawl', 'Farm-to-Table Cooking Experience'],
      wellness: ['Yoga Mountain Resort', 'Natural Hot Springs Spa'],
      party: ['City Festival Weekend', 'Beachfront Club Night']
    };
    const mood = this.criteria.mood as MoodType;

    // fallback - if mood doesn't match (paranoia)
    const moodList = moodToPlace[mood] || ['Mystery Adventure', 'Surprise Retreat'];

    return [
      {
        title: `${mood.charAt(0).toUpperCase() + mood.slice(1)} Escape`,
        destination: moodList[0],
        distance: Math.min(this.criteria.distance, 90) + ' miles',
        cost: '$' + this.criteria.budget,
        description: `A personalized ${mood} escape near ${this.criteria.location}.`
      },
      {
        title: 'Alternative Suggestion',
        destination: moodList[1],
        distance: Math.max(this.criteria.distance - 12, 15) + ' miles',
        cost: '$' + Math.max(this.criteria.budget - 35, 30),
        description: `Another awesome option for your weekend!`
      }
    ];
  }
}
