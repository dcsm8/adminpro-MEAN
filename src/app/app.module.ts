import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Modulos
import { PagesModule } from "./pages/pages.module";

// Componentes
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app.routes";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
