import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HeadLogoComponent } from './head-logo/head-logo.component';
import { HeadLinksComponent } from './head-links/head-links.component';
import { HomeComponent } from './home/home.component';
import { HomeHeroImageComponent } from './home-hero-image/home-hero-image.component';
import { HomeTextComponent } from './home-text/home-text.component';
import { SocialImpactPageComponent } from './social-impact-page/social-impact-page.component';
import { SocialImpactDataComponent } from './social-impact-data/social-impact-data.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ImgAndTextBannerComponent } from './img-and-text-banner/img-and-text-banner.component';
import { SocialTextComponent } from './social-text/social-text.component';
import { SocialImageComponent } from './social-image/social-image.component';
import { CooperativeSectionComponent } from './cooperative-section/cooperative-section.component';
import { CoopImgAndTextComponent } from './coop-img-and-text/coop-img-and-text.component';
import { CoopTextComponent } from './coop-text/coop-text.component';
import { CoopImgComponent } from './coop-img/coop-img.component';
import { BeyondBusinessComponent } from './beyond-business/beyond-business.component';
import { BeyondBusinessTextComponent } from './beyond-business-text/beyond-business-text.component';
import { BeyondBusinessImageComponent } from './beyond-business-image/beyond-business-image.component';
import { OpenKnowledgeComponent } from './open-knowledge/open-knowledge.component';
import { OpenKnowledgeTextComponent } from './open-knowledge-text/open-knowledge-text.component';
import { OpenKnowledgeImageComponent } from './open-knowledge-image/open-knowledge-image.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectsSectionImagesComponent } from './projects-section-images/projects-section-images.component';
import { ProjectsSectionTextComponent } from './projects-section-text/projects-section-text.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { CallToActionTextComponent } from './call-to-action-text/call-to-action-text.component';
import { FooterComponent } from './footer/footer.component';
import { FooterNavigationsComponent } from './footer-navigations/footer-navigations.component';
import { FooterImagesComponent } from './footer-images/footer-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HeadLogoComponent,
    HeadLinksComponent,
    HomeComponent,
    HomeHeroImageComponent,
    HomeTextComponent,
    SocialImpactPageComponent,
    SocialImpactDataComponent,
    MainPageComponent,
    ImgAndTextBannerComponent,
    SocialTextComponent,
    SocialImageComponent,
    CooperativeSectionComponent,
    CoopImgAndTextComponent,
    CoopTextComponent,
    CoopImgComponent,
    BeyondBusinessComponent,
    BeyondBusinessTextComponent,
    BeyondBusinessImageComponent,
    OpenKnowledgeComponent,
    OpenKnowledgeTextComponent,
    OpenKnowledgeImageComponent,
    ProjectsSectionComponent,
    ProjectsSectionImagesComponent,
    ProjectsSectionTextComponent,
    CallToActionComponent,
    CallToActionTextComponent,
    FooterComponent,
    FooterNavigationsComponent,
    FooterImagesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
