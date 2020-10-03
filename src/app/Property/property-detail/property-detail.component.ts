import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../Services/housing.service';
import { Property } from '../../model/Property';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  property = new Property();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    debugger;

    this.propertyId = +this.route.snapshot.params['id'];
    // alert(1)
    this.route.data.subscribe((data: Property) => {
      this.property = data['prp'];
    });

    this.InitialiseGalleryComponent();

    // alert(this.propertyId)
    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //         // alert(JSON.stringify(this.property))
    //       }
    //     );
    //   }
    // );
  }

  InitialiseGalleryComponent() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/i-1.jpg',
        medium: 'assets/i-1.jpg',
        big: 'assets/i-1.jpg',
      },
      {
        small: 'assets/i-2.jpg',
        medium: 'assets/i-2.jpg',
        big: 'assets/i-2.jpg',
      },
      {
        small: 'assets/i-3.jpg',
        medium: 'assets/i-3.jpg',
        big: 'assets/i-3.jpg',
      },
      {
        small: 'assets/i-4.jpg',
        medium: 'assets/i-4.jpg',
        big: 'assets/i-4.jpg',
      }

    ];
  }
}
