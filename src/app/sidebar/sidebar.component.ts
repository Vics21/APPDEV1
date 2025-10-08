import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  lore = [
    "The Johto region (Japanese: ジョウト地方 Johto region) is a region of the Pokémon world. Johto is located west of Kanto, which together form a joint landmass that is south of Sinnoh and Sinjoh Ruins.",
    "It was the second core series region to be introduced. First explored in Pokémon Gold and Silver, it is home to an additional 100 Pokémon that were not present in the previous games. It is also the setting of Pokémon Crystal, Pokémon HeartGold, and Pokémon SoulSilver.",
    "Players begin their journey in New Bark Town, where Professor Elm offers either Chikorita, Cyndaquil, or Totodile to beginning Pokémon Trainers.",
    "The English-version names of most of the cities in Johto are names of plants or things related to plants."
  ]
  private router = inject(Router);

  navigateToJohto(){
    this.router.navigate(['/landingpage'])
  }
}

