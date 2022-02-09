import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { CadConfigComponent } from './components/cad-config/cad-config.component';
import { CadAgenciaComponent } from './components/cad-agencia/cad-agencia.component';
import { CadCargoComponent } from './components/cad-cargo/cad-cargo.component';
import { CadFeriadoComponent } from './components/cad-feriado/cad-feriado.component';
import { CadParticaoComponent } from './components/cad-particao/cad-particao.component';
import { CadUsuarioComponent } from './components/cad-usuario/cad-usuario.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ListAgenciaComponent } from './components/list-agencia/list-agencia.component';
import { ListCargoComponent } from './components/list-cargo/list-cargo.component';
import { ListFeriadoComponent } from './components/list-feriado/list-feriado.component';
import { ListParticaoComponent } from './components/list-particao/list-particao.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListConfigComponent } from './components/list-config/list-config.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SidebarMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CadAgenciaComponent,
    CadConfigComponent,
    CadCargoComponent,
    CadFeriadoComponent,
    CadParticaoComponent,
    CadUsuarioComponent,
    ListAgenciaComponent,
    ListCargoComponent,
    ListFeriadoComponent,
    ListParticaoComponent,
    ListUserComponent,
    ListConfigComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'cad-agencia', component: CadAgenciaComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'cad-config', component: CadConfigComponent },
      { path: 'cad-cargo', component: CadCargoComponent },
      { path: 'cad-feriado', component: CadFeriadoComponent },
      { path: 'cad-partition', component: CadParticaoComponent },
      { path: 'cad-user', component: CadUsuarioComponent },
      { path: 'list-agencia', component:  ListAgenciaComponent},
      { path: 'list-cargo', component:  ListCargoComponent},
      { path: 'list-config', component:  ListConfigComponent},
      { path: 'list-partition', component:  ListParticaoComponent},
      { path: '', component:  ListFeriadoComponent},
      { path: 'list-user', component:  ListUserComponent},
      { path: 'loguot', component:  LogoutComponent},
      { path: 'login', component:  LoginComponent, pathMatch: 'full'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
