import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'cc-root',
    imports: [RouterOutlet, TuiRoot, TuiRoot],
    templateUrl: './app.component.html'
})
export class AppComponent {
}
