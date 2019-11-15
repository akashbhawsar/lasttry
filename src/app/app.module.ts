import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule} from '@angular/common/http';
import { NfComponent } from './nf/nf.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';  
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    VehicleComponent,
    NfComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
       {path:'register',component:RegisterComponent},
      {path:'contact',component:ContactComponent},
      {path:'vehicle',component:VehicleComponent},
      {path:'**',component:NfComponent}
    ])
     
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
