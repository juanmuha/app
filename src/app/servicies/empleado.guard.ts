import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoGuard implements CanActivate, CanDeactivate<CanComponentDeactivate> {
  
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let url = currentState.url;
      console.log(url);
      console.log(component);
      console.log(currentState);
      console.log(currentRoute);

      return component.puedeSalir ? component.puedeSalir() : true;
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }  
}

export interface CanComponentDeactivate
{ 
  puedeSalir:() => Observable<boolean> | Promise<boolean> | boolean;
}
